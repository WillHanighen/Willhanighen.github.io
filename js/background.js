/**
 * Background wireframe and particles system for Will Hanighen's portfolio website
 * This file consolidates all background-related functionality for better maintainability
 */

// Default configuration
const DEFAULT_CONFIG = {
  speed: 8,
  opacity: 65,
  avoidMouse: false,
  numParticles: 10,
  sizeMultiplier: 5,
  width: 1,
  connections: true,
  connectionDensity: 15,
  noBounceH: false,
  noBounceV: false,
  speedH: 1,
  speedV: 1,
  hover: true
};

/**
 * Initialize the particle system
 * @param {Object} options - Configuration options for the particle system
 */
function initBackground(options = {}) {
  // Merge default config with provided options
  const config = { ...DEFAULT_CONFIG, ...options };
  
  // Set up the canvas
  const canvas = document.getElementById('particles');
  if (!canvas) {
    console.error('Canvas element with id "particles" not found');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  let particleArray;
  
  // Set canvas dimensions
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  // Process configuration
  const speed = config.speed !== 0 ? config.speed / 100 : 0;
  const opacity = config.opacity / 100;
  canvas.style.opacity = opacity;
  
  // Get colors from CSS variables
  let particleColor, particleStrokeColor, particleStrokeHoverColor;
  
  // Get particle color
  if (getComputedStyle(document.documentElement).getPropertyValue('--col-particle').length === 0) {
    particleColor = '#3a86ff';
    console.log("CSS variable '--col-particle' is not set. Using default blue (#3a86ff).");
  } else {
    particleColor = getComputedStyle(document.documentElement).getPropertyValue('--col-particle');
  }
  
  // Get particle stroke color
  if (getComputedStyle(document.documentElement).getPropertyValue('--col-particle-stroke').length === 0) {
    particleStrokeColor = '#3a86ff';
    console.log("CSS variable '--col-particle-stroke' is not set. Using default blue (#3a86ff).");
  } else {
    particleStrokeColor = getComputedStyle(document.documentElement).getPropertyValue('--col-particle-stroke');
  }
  
  // Get particle hover stroke color
  if (config.hover && getComputedStyle(document.documentElement).getPropertyValue('--col-particle-stroke-hover').length === 0) {
    particleStrokeHoverColor = '#8338ec';
    console.log("CSS variable '--col-particle-stroke-hover' is not set. Using default purple (#8338ec).");
  } else {
    particleStrokeHoverColor = getComputedStyle(document.documentElement).getPropertyValue('--col-particle-stroke-hover');
  }
  
  // Mouse position tracking
  let mouse = {
    x: undefined,
    y: undefined,
    radius: (canvas.height / 80) * (canvas.width / 80)
  };
  
  window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
  });
  
  // Handle window resize
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    mouse.radius = (canvas.height / 80) * (canvas.width / 80);
    init();
  });
  
  // Particle class
  class Particle {
    constructor(x, y, directionX, directionY, size) {
      this.x = x;
      this.y = y;
      this.directionX = directionX;
      this.directionY = directionY;
      this.size = size;
    }
    
    // Draw individual particle
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
      ctx.fillStyle = particleColor;
      ctx.fill();
    }
    
    // Update particle position and handle collisions
    update() {
      // Handle horizontal boundaries
      if (config.noBounceH && config.speedH > 0) {
        if (this.x > canvas.width) {
          this.x = 0;
        }
      } else if (config.noBounceH && config.speedH < 0) {
        if (this.x < 0) {
          this.x = canvas.width;
        }
      } else if (this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
      }
      
      // Handle vertical boundaries
      if (config.noBounceV && config.speedV > 0) {
        if (this.y > canvas.height) {
          this.y = 0;
        }
      } else if (config.noBounceV && config.speedV < 0) {
        if (this.y < 0) {
          this.y = canvas.height;
        }
      } else if (this.y > canvas.height || this.y < 0) {
        this.directionY = -this.directionY;
      }
      
      // Mouse interaction
      if (config.avoidMouse) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < mouse.radius + this.size) {
          if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {
            this.x += 10;
          }
          if (mouse.x > this.x && this.x > this.size * 10) {
            this.x -= 10;
          }
          if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {
            this.y += 10;
          }
          if (mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
          }
        }
      }
      
      // Move particle
      if (speed !== 0) {
        this.x += this.directionX * speed * config.speedH;
        this.y += this.directionY * speed * config.speedV;
      }
      
      // Draw the particle
      this.draw();
    }
  }
  
  // Create particle array
  function init() {
    particleArray = [];
    let numberOfParticles = (canvas.width * 0.01) * config.numParticles;
    
    for (let i = 0; i < numberOfParticles; i++) {
      let size = Math.random() * config.sizeMultiplier + 1;
      let x = (Math.random() * ((canvas.width - size * 2) - (size * 2)) + size * 2);
      let directionX;
      
      if (config.noBounceH) {
        directionX = (Math.random() * 5);
      } else {
        directionX = (Math.random() * 5) - 2.5;
      }
      
      let y = (Math.random() * ((canvas.height - size * 2) - (size * 2)) + size * 2);
      let directionY;
      
      if (config.noBounceV) {
        directionY = (Math.random() * 5);
      } else {
        directionY = (Math.random() * 5) - 2.5;
      }
      
      particleArray.push(new Particle(x, y, directionX, directionY, size));
    }
  }
  
  // Connect particles with lines
  function connect() {
    let opacityValue = 1;
    
    for (let a = 0; a < particleArray.length; a++) {
      for (let b = a; b < particleArray.length; b++) {
        let distance = ((particleArray[a].x - particleArray[b].x) * (particleArray[a].x - particleArray[b].x)) + 
                       ((particleArray[a].y - particleArray[b].y) * (particleArray[a].y - particleArray[b].y));
        
        if (distance < (canvas.width / config.connectionDensity) * (canvas.height / config.connectionDensity)) {
          opacityValue = 1 - (distance / 20000);
          ctx.strokeStyle = `rgba(${particleStrokeColor}, ${opacityValue})`;
          ctx.lineWidth = config.width;
          ctx.beginPath();
          ctx.moveTo(particleArray[a].x, particleArray[a].y);
          ctx.lineTo(particleArray[b].x, particleArray[b].y);
          ctx.stroke();
        }
      }
    }
  }
  
  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    for (let i = 0; i < particleArray.length; i++) {
      particleArray[i].update();
    }
    
    if (config.connections) {
      connect();
    }
  }
  
  // Initialize and start animation
  init();
  animate();
}

// Backward compatibility with the old particles function
function particles(options = {}) {
  // Extract parameters from the old way of calling
  const config = {
    speed: options.speed || DEFAULT_CONFIG.speed,
    avoidMouse: options.avoidMouse !== undefined ? options.avoidMouse : DEFAULT_CONFIG.avoidMouse,
    opacity: options.opacity || DEFAULT_CONFIG.opacity
  };
  
  initBackground(config);
}
