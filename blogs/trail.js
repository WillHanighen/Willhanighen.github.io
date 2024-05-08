let lastX = -1;
let lastY = -1;

function trail (e) {

    if (lastX === -1 && lastY === -1) {
        lastX = e.pageX;
        lastY = e.pageY;
        return;
    }
    
    const deltaX = e.pageX - lastX;
    const deltaY = e.pageY - lastY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    
    const step = 5;
    
    if (distance >= step) {
        const steps = Math.floor(distance / step);
        const stepX = deltaX / steps;
        const stepY = deltaY / steps;

        for (let i = 0; i < steps; i++) {
            createDot(lastX + stepX * i, lastY + stepY * i);
        }

        lastX = e.pageX;
        lastY = e.pageY;
    }
}

function createDot(x, y) {
    const div = document.createElement('div');
    div.classList.add('happyTrail');
    Object.assign(div.style, {
        top: y + 'px',
        left: x + 'px',
        zIndex: '500'
    });
    document.body.appendChild(div);
    setTimeout(function(){document.body.removeChild(div)}, 500);
}

addEventListener('mousemove', trail);
