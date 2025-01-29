const editor = ace.edit("editor");
editor.setReadOnly(false);
editor.setOptions({fontSize: "14px"});
editor.setTheme("ace/theme/monokai");
editor.session.setMode("ace/mode/python");

const outputDiv = document.getElementById("output");
const inputBox = document.getElementById("user-input");
const waitingMessage = document.getElementById("waiting-message"); // New reference for waiting message
const inputQueue = [];

let isWaitingForInput = false;
let programCode = "";

function appendOutput(text) {
  outputDiv.innerHTML += text.replace(/\n/g, "<br>");
  outputDiv.scrollTop = outputDiv.scrollHeight;
}

function handleUserInput() {
  const inputValue = inputBox.value.trim();
  if (isWaitingForInput) {
    inputQueue.push(inputValue);
    appendOutput(`${inputValue}<br>`);
    inputBox.value = "";
    isWaitingForInput = false;
    waitingMessage.style.display = "none"; // Hide waiting message when input is given
  }
}

function executeCode() {
  outputDiv.innerHTML = "";
  inputQueue.length = 0;
  isWaitingForInput = false;

  programCode = editor.getValue();

  Sk.configure({
    output: appendOutput,
    read: function (filename) {
      if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][filename] === undefined) {
        throw `File not found: '${filename}'`;
      }
      return Sk.builtinFiles["files"][filename];
    },
    inputfun: function (promptText) {
      appendOutput(promptText);
      waitingMessage.style.display = "inline"; // Show waiting message
      return new Promise((resolve) => {
        isWaitingForInput = true;
        const interval = setInterval(() => {
          if (!isWaitingForInput) {
            clearInterval(interval);
            resolve(inputQueue.shift());
          }
        }, 50);
      });
    },
  });

  Sk.misceval
    .asyncToPromise(() => Sk.importMainWithBody("<stdin>", false, programCode, true))
    .then(
      () => appendOutput("<br>Program finished successfully.<br>"),
      (err) => appendOutput(`<br>Error: ${err.toString()}<br>`)
    );
}