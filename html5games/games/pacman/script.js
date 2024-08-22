    let scale = 1.5
    
    const context = document.getElementById("canvas").getContext("2d");
    context.canvas.height = 296 * scale;
    context.canvas.width = 224 * scale;
    var size = 8;
    
      //1 - dots
      //4 - air
      //3 - wall
      //2 - energizer
      //5 - ghost lair
      //6 & 7- teleport
      map = 
      [
        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
        [3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3],
        [3,1,3,3,3,3,1,3,3,3,3,3,1,3,3,1,3,3,3,3,3,1,3,3,3,3,1,3],
        [3,2,3,3,3,3,1,3,3,3,3,3,1,3,3,1,3,3,3,3,3,1,3,3,3,3,2,3],
        [3,1,3,3,3,3,1,3,3,3,3,3,1,3,3,1,3,3,3,3,3,1,3,3,3,3,1,3],
        [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
        [3,1,3,3,3,3,1,3,3,1,3,3,3,3,3,3,3,3,1,3,3,1,3,3,3,3,1,3],
        [3,1,3,3,3,3,1,3,3,1,3,3,3,3,3,3,3,3,1,3,3,1,3,3,3,3,1,3],
        [3,1,1,1,1,1,1,3,3,1,1,1,1,3,3,1,1,1,1,3,3,1,1,1,1,1,1,3],
        [3,3,3,3,3,3,1,3,3,3,3,3,4,3,3,4,3,3,3,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,3,3,3,4,3,3,4,3,3,3,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,4,4,4,4,4,4,4,4,4,4,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,4,3,3,3,5,5,3,3,3,4,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,4,3,3,3,5,5,3,3,3,4,3,3,1,3,3,3,3,3,3],
        [6,4,4,4,4,4,1,4,4,4,3,3,5,5,5,5,3,3,4,4,4,1,4,4,4,4,4,7],
        [3,3,3,3,3,3,1,3,3,4,3,3,3,3,3,3,3,3,4,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,4,3,3,3,3,3,3,3,3,4,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,4,4,4,4,4,4,4,4,4,4,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,4,3,3,3,3,3,3,3,3,4,3,3,1,3,3,3,3,3,3],
        [3,3,3,3,3,3,1,3,3,4,3,3,3,3,3,3,3,3,4,3,3,1,3,3,3,3,3,3],
        [3,1,1,1,1,1,1,1,1,1,1,1,1,3,3,1,1,1,1,1,1,1,1,1,1,1,1,3],
        [3,1,3,3,3,3,1,3,3,3,3,3,1,3,3,1,3,3,3,3,3,1,3,3,3,3,1,3],
        [3,1,3,3,3,3,1,3,3,3,3,3,1,3,3,1,3,3,3,3,3,1,3,3,3,3,1,3],
        [3,2,1,1,3,3,1,1,1,1,1,1,1,4,4,1,1,1,1,1,1,1,3,3,1,1,2,3],
        [3,3,3,1,3,3,1,3,3,1,3,3,3,3,3,3,3,3,1,3,3,1,3,3,1,3,3,3],
        [3,3,3,1,3,3,1,3,3,1,3,3,3,3,3,3,3,3,1,3,3,1,3,3,1,3,3,3],
        [3,1,1,1,1,1,1,3,3,1,1,1,1,3,3,1,1,1,1,3,3,1,1,1,1,1,1,3],
        [3,1,3,3,3,3,3,3,3,3,3,3,1,3,3,1,3,3,3,3,3,3,3,3,3,3,1,3],
        [3,1,3,3,3,3,3,3,3,3,3,3,1,3,3,1,3,3,3,3,3,3,3,3,3,3,1,3],
        [3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3],
        [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
      ];
    
    const createImage = function(src)
    {
      image = new Image();
      image.src = src;
      image.onload = function()
      {
        global.loaded ++;
      }
      return(image);
    }
    
    const global = 
    {
      level: 1,
      loaded: 0,
      exit: null,
      ghostMode: null,
      width: context.canvas.width,
      height: context.canvas.height,
      tileSize: (context.canvas.width)/28,
      currentFruit: createImage("images/Fruits/Cherry.png"),
      fruitWidth: 15,
      fruitHeight: 7,
      fruitScore: createImage("images/Scores/100.png"),
      fruitValue: 100,
      levelCounter: [null, null, null, null, null, null, createImage("images/Fruits/Cherry.png")],
      displayPoints: false,
      pointsX: null,
      pointsY: null,
      waitedForInky: false,
      waitedForClyde: false,
      waitingToStart: true,
      waitToRestart: false,
      pause: false,
      completedLevel: false,
      intersections: 
      [
        {x:2*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:2*(context.canvas.width/28)},
        {x:2*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:6*(context.canvas.width/28)},
        {x:2*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:9*(context.canvas.width/28)},
        {x:10*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:14*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:15*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:12*(context.canvas.width/28)},{x:19*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:15*(context.canvas.width/28)},
        {x:10*(context.canvas.width/28), y:18*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:18*(context.canvas.width/28)},
        {x:2*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:21*(context.canvas.width/28)},
        {x:2*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:4*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:25*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:24*(context.canvas.width/28)},
        {x:2*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:4*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:25*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:27*(context.canvas.width/28)},
        {x:2*(context.canvas.width/28), y:30*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:30*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:30*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:30*(context.canvas.width/28)}
      ],
      reset: function()
      {
        global.currentFruit = createImage("images/Fruits/Cherry.png")
        global.fruitWidth = 15
        global.fruitHeight = 7
        global.fruitScore = createImage("images/Scores/100.png")
        global.fruitValue = 100
        global.levelCounter = [null, null, null, null, null, null,  createImage("images/Fruits/Cherry.png")]
        global.waitedForInky = false
        global.waitedForClyde = false
        global.completedLevel = false
        global.pause = false
        global.waitToRestart = false
        global.waitingToStart = true
        global.level = 1
        intersections: 
        [
          {x:2*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:2*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:2*(context.canvas.width/28)},
          {x:2*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:6*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:6*(context.canvas.width/28)},
          {x:2*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:9*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:9*(context.canvas.width/28)},
          {x:10*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:14*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:15*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:12*(context.canvas.width/28)},{x:19*(context.canvas.width/28), y:12*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:15*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:15*(context.canvas.width/28)},
          {x:10*(context.canvas.width/28), y:18*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:18*(context.canvas.width/28)},
          {x:2*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:21*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:21*(context.canvas.width/28)},
          {x:2*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:4*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:25*(context.canvas.width/28), y:24*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:24*(context.canvas.width/28)},
          {x:2*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:4*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:7*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:10*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:19*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:22*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:25*(context.canvas.width/28), y:27*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:27*(context.canvas.width/28)},
          {x:2*(context.canvas.width/28), y:30*(context.canvas.width/28)}, {x:13*(context.canvas.width/28), y:30*(context.canvas.width/28)}, {x:16*(context.canvas.width/28), y:30*(context.canvas.width/28)}, {x:27*(context.canvas.width/28), y:30*(context.canvas.width/28)}
        ]
      },
      checkCollision: function(object, direction)
      {
        if (direction === null) 
        {
          return;
        }

        if (object.isEaten === true)
        {
          return(false)
        }

        if (Number.isInteger(object.x / global.tileSize) && Number.isInteger(object.y / global.tileSize))
        {
          let nextRow = 0;
          let row = 0;
          let tunnelRow = 0;
          let nextColumn = 0;
          let column = 0;
          let tunnelColumn = 0;
          switch (direction)
          {
            case(1):
              nextRow = object.y - global.tileSize;
              row = nextRow / global.tileSize;
              column = object.x / global.tileSize;
              break;

            case(2):
              nextColumn = object.x + global.tileSize;
              column = nextColumn / global.tileSize;
              row = object.y / global.tileSize;
              break;  

            case(3):
              nextRow = object.y + global.tileSize;
              row = nextRow / global.tileSize;
              column = object.x / global.tileSize;
              break;

            case(4):
              nextColumn = object.x - global.tileSize;
              column = nextColumn / global.tileSize;
              row = object.y / global.tileSize;
              break;

            case(0):
              row = object.y / global.tileSize;
              column = object.x / global.tileSize;
          }

          if (object.direction === 4 || object.direction === 3)
          {
            nextColumn = (object.x + global.tileSize) - global.tileSize;
            tunnelColumn = nextColumn / global.tileSize;
            tunnelRow = object.y / global.tileSize;
          }
          else if (object.direction === 2 || object.direction === 1)
          {
            nextColumn = (object.x - global.tileSize) + global.tileSize;
            tunnelColumn = nextColumn / global.tileSize;
            tunnelRow = object.y / global.tileSize;
          }

          const tile = map[row][column];

          if ((tunnelColumn <= 0 || tunnelColumn >= 27) && (tunnelRow === 14) && object.tunnel === false)
          {
            object.tunnel = true
            object.y = 112 * (global.tileSize / 8)
          }

          if ((tunnelColumn <= -2 || tunnelColumn === 29) && tunnelRow === 14 && object.tunnel === true)
          {
            if (tunnelColumn === -2)
            {
              object.x = 224 * (global.tileSize / 8);
              object.direction = 4;
            }
            else if (tunnelColumn === 29)
            {
              object.x = -8 * (global.tileSize / 8)
              object.direction = 2;
            }
          }
          if (object === pacman)
          {
            if (tile !== 3 && tile !== 5)
            {
              return(false)
            }
          }
          else if (object.isInBox === false && (tile !== 5 && tile !== 3))
          {
            return(false)
          }
          else if (object.isInBox === true && (tile === 5 || tile !== 3))
          {
            return(false)
          }
        }
        return true;
      },
      inTunnel: function(object)
      {
        if (object === pacman)
        {
          if ((object.x > -8 * (global.tileSize / 8) && object.direction === 2) || (object.x < 224 * (global.tileSize / 8) && object.direction === 4))
          {
            return(false)
          }
        }
        for (let k=0; k<global.intersections.length; k++)
        {
          if (object === pacman)
          {
            //+global.intersections[k].x+" "+global.intersections[k].y)
          }
          if (object.x+global.tileSize === global.intersections[k].x && object.y+global.tileSize === global.intersections[k].y)
          {
            //else if (object === pacman) console.log("PAC"+" "+(object.x+8)/global.tileSize+" "+(object.y+8)/global.tileSize)
            return(false)
          }
        }
        return(object.tunnel)
      },
      respondToMove: function(object, relX, relY, actX, actY)
      {
        if (global.inTunnel(object))
        {
          return
        }
        else
        {
          object.tunnel = false
        }

        if (object.isEaten === true)
        {
          startX = object.startX
          startY = object.startY
          relX = Math.abs(object.x - object.startX)
          actX = object.x - object.startX
          relY = Math.abs(object.y - object.startY)
          actY = object.y - object.startY
          if (object === b)
          {
            relY = Math.abs(object.y - p.startY)
            actY = object.y - p.startY
            startY = p.startY
          }

          if ((object.x > (startX - (global.tileSize/8)) && object.x < (startX + (global.tileSize/8))) && (object.y > (startY - (global.tileSize/8)) && object.y < (startY + (global.tileSize/8))))
          {
            object.x = startX
            object.y = startY
            object.isInBox = true
            if (object !== b)
            {
              object.exit = object.path.slice()
            }
            else
            {
              object.exit = p.path.slice()
            }
            object.isEaten = false
            if (ghosts.frightened === true) object.wasEaten = true
            return
          }

          if (relX > relY)
          {
            if (actX > 0)
            {
              object.direction = 4
            }
            else if (actX < 0)
            {
              object.direction = 2
            }
          }
          else if (relY > relX)
          {
            if (actY > 0)
            {
              object.direction = 1
            }
            else if (actY < 0)
            {
              object.direction = 3
            }
          }
          return
        }

        // Move LEFT / RIGHT
        if (relX > relY && !object.tunnel)
        {
          // Pacman to the LEFT
          if (actX > 0)
          {
            if (object.x >= 176 * (global.tileSize / 8) && object.y === 112 * (global.tileSize / 8) && actX > 48 * (global.tileSize / 8))// && (object != i || (object === i && pacman.tunnel === true)))
            {
              object.direction = 2
              return;
            }
            // Move LEFT
            if (!global.checkCollision(object, 4))
            {
              object.direction = 4
            }
            else
            {
              // Move DOWN
              if (actY < 0 && !global.checkCollision(object, 3))
              {
                object.direction = 3
              }
              // Move UP
              else if (actY > 0 && !global.checkCollision(object, 1))
              {
                object.direction = 1
              }
              // Move RIGHT
              else if (!global.checkCollision(object, 2))
              {
                object.direction = 2
              }
              if (object.direction !== 0) object.tunnel = true
            }
          }
          // Pacman to the RIGHT
          else if (actX < 0)
          {
            if (object.x <= 56 * (global.tileSize / 8) && object.y === 112 * (global.tileSize / 8) && actX < -48 * (global.tileSize / 8))// && (object != i || (object === i && pacman.tunnel === true)))
            {
              object.direction = 4
              return;
            }
            // Move RIGHT
            if (!global.checkCollision(object, 2))
            {
              object.direction = 2
            }
            else
            {
              // Move UP
              if (actY > 0 && !global.checkCollision(object, 1))
              {
                object.direction = 1
              }
              // Move DOWN
              else if (actY < 0 && !global.checkCollision(object, 3))
              {
                object.direction = 3
              }
              // Move LEFT
              else if (!global.checkCollision(object, 4))
              {
                object.direction = 4
              }
              if (object.direction !== 0) object.tunnel = true
            }
          }
        }
        // Move UP / DOWN
        else if (relY > relX && !object.tunnel)
        {
          // Pacman is ABOVE
          if (actY > 0)
          {
            // Move UP
            if (!global.checkCollision(object, 1))
            {
              object.direction = 1;
            }
            else
            {
              // Move RIGHT
              if (actX < 0 && !global.checkCollision(object, 2))
              {
                object.direction = 2;
              }
              // Move LEFT
              else if (actX > 0 && !global.checkCollision(object, 4))
              {
                object.direction = 4;
              }
              // Move DOWN
              else if (!global.checkCollision(object, 3))
              {
                object.direction = 3;
              }
              if (object.direction !== 0) object.tunnel = true
            }
          }
          // Pacman is BELOW
          else if (actY < 0)
          {
            // Move DOWN
            if (!global.checkCollision(object, 3))
            {
              object.direction = 3;
            }
            else
            {
              // Move LEFT
              if (actX > 0 && !global.checkCollision(object, 4))
              {
                object.direction = 4;
              }
              // Move RIGHT
              else if (actX < 0 && !global.checkCollision(object, 2))
              {
                object.direction = 2;
              }
              // Move UP
              else if (!global.checkCollision(object, 1))
              {
                object.direction = 1;
              }
              if (object.direction !== 0) object.tunnel = true
            }
          }
        }

      },
      currentImage: function(object)
      {
        if (object.animate%2 === 0 && object.animate > 2 && object.isDead !== true) 
        {
          object.animate = 2
        }
        else if (object.isDead === true)
        {
          if (object.animate <= 11)
          {
            return(images.death[object.animate - 1])
          }
        }

        if (global.completedLevel === true && object.wantedDirection === -1 || pacman.isDead === true)
        {
          return(images.invisible)
        }

        if (ghosts.frightened === true && object.frightened === true && !(object.isEaten === true || object.wasEaten === true))
        {
          if (object === b || object === p || object === i || object === c)
          {
            return(images.frightened[object.animate%2])
          }
        }
        else if (object.isEaten)
        {
          return(images.eaten[object.direction])
        }
        else if (object === b)
        {
          return(images.blinky[object.direction][object.animate%2])
        }
        else if (object === p)
        {
          return(images.pinky[object.direction][object.animate%2])
        }
        else if (object === i)
        {
          return(images.inky[object.direction][object.animate%2])
        }
        else if (object === c)
        {
          return(images.clyde[object.direction][object.animate%2])
        }
        else if (object === pacman) return(images.pacman[object.direction][object.animate%2])
      },
      move: function(object)
      {
        if (object.direction === null || object.direction === 0 || object.isInBox === true || global.completedLevel === true || global.pause === true)
        {
          return;
        }

        var killPacman = function()
        {
          pacman.isDead = true
          global.pause = true
          clear = function()
          {
            pacman.lives --
            if (pacman.lives > 0)
            {
              pacman.softReset()
            }
            else
            {
              pacman.hardReset()
            }
            ghosts.softReset()
            global.pause = false
            global.waitingToStart = true
          }
          setTimeout(clear, 1800)
        }

        var eatGhost = function(object)
        {
          object.isEaten = true
          pacman.ghostsEaten ++
          ghosts.displayPoints(object)
        }

        if (!global.inTunnel(object))
        {
          object.tunnel = false
        }

        if (object === pacman)
        {
          if (((object.x / global.tileSize) >= 28 || (object.x / global.tileSize) <= -1) && (object.y / global.tileSize) !== 14)
          {
            object.wantedDirection = object.direction
            if (object.x / global.tileSize === 28)
            {
              object.direction = 2
            }
            else
            {
              object.direction = 4
            }
            object.y = 112 * (global.tileSize / 8)
            object.tunnel = true
          }
        }

        if (object === pacman)
        {
          if (pacman.x === fruit.x && pacman.y === fruit.y && fruit.isVisible === true && fruit.isEaten === false)
          {
            fruit.isEaten = true
            fruit.isVisible = false
            fruit.completed = true
            pacman.score += global.fruitValue
            var clear = function()
            {
              fruit.isEaten = false
              fruit.isVisible = false
            }
            setTimeout(clear, 1000)
          }

          for (var k=0; k<ghosts.g.length; k++)
          {
            if (object.x >= ghosts.g[k].x - (global.tileSize / 3) && object.y >= ghosts.g[k].y - (global.tileSize / 3) && object.x <= ghosts.g[k].x + (global.tileSize / 3) && object.y <= ghosts.g[k].y + (global.tileSize / 3) && ghosts.g[k].isEaten === false)
            {
              if (ghosts.frightened === true && ghosts.g[k].wasEaten === false)
              {
                eatGhost(ghosts.g[k])
              }
              else
              {
                killPacman()
              }
            }
          }
        }
        else if (object !== pacman)
        {
          if (object.x - (global.tileSize / 3) <= pacman.x && object.y + (global.tileSize / 3) >= pacman.y && object.x + (global.tileSize / 3) >= pacman.x && object.y - (global.tileSize / 3) <= pacman.y && object.isEaten === false)
          {
            if (ghosts.frightened === true && object.wasEaten === false)
            {
              eatGhost(object)
            }
            else
            {
              killPacman()
            }
          }
        }

        if ((object.x % global.tileSize) === 0 && (object.y % global.tileSize) === 0 && object.wantedDirection !== -1 && object.tunnel === false && !((object.x / global.tileSize) >= 27 || (object.x / global.tileSize) <= 0))
        {
          if (!global.checkCollision(object, object.wantedDirection))
          {
            object.direction = object.wantedDirection;
          }
        }

        if (object.x % global.tileSize === 0 && object.y % global.tileSize === 0)
        {
          if (global.checkCollision(object, object.direction))
          {
           return;
          }
        }

        switch (object.direction)
        {
          case(1):
            object.y -= 1 * (global.tileSize / 8);
            break;
          case(2):
            object.x += 1 * (global.tileSize / 8);
            break;
          case(3):
            object.y += 1 * (global.tileSize / 8);
            break;
          case(4):
            object.x -= 1 * (global.tileSize / 8);
            break;
        }
      },
      tick: function()
      {
        b.animate ++
        p.animate ++
        i.animate ++
        c.animate ++
        if (pacman.isDead === true)
        {
          pacman.animate ++
        }
      }
    }

    var images = 
    {
      pacman: 
        [
        [createImage("images/Pac-Man/Pacman.png"), createImage("images/Pac-Man/Pacman.png")],
        [createImage("images/Pac-Man/Pacman-Up-1.png"), createImage("images/Pac-Man/Pacman-Up-2.png")],
        [createImage("images/Pac-Man/Pacman-Right-1.png"), createImage("images/Pac-Man/Pacman-Right-2.png")],
        [createImage("images/Pac-Man/Pacman-Down-1.png"), createImage("images/Pac-Man/Pacman-Down-2.png")],
        [createImage("images/Pac-Man/Pacman-Left-1.png"), createImage("images/Pac-Man/Pacman-Left-2.png")]
        ],
      blinky: 
        [
        [createImage("images/Blinky/Blinky-Left-1.png"), createImage("images/Blinky/Blinky-Left-2.png")],
        [createImage("images/Blinky/Blinky-Up-1.png"), createImage("images/Blinky/Blinky-Up-2.png")],
        [createImage("images/Blinky/Blinky-Right-1.png"), createImage("images/Blinky/Blinky-Right-2.png")],
        [createImage("images/Blinky/Blinky-Down-1.png"), createImage("images/Blinky/Blinky-Down-2.png")],
        [createImage("images/Blinky/Blinky-Left-1.png"), createImage("images/Blinky/Blinky-Left-2.png")]
        ],
      pinky: 
        [
        [createImage("images/Pinky/Pinky-Left-1.png"), createImage("images/Pinky/Pinky-Left-2.png")],
        [createImage("images/Pinky/Pinky-Up-1.png"), createImage("images/Pinky/Pinky-Up-2.png")],
        [createImage("images/Pinky/Pinky-Right-1.png"), createImage("images/Pinky/Pinky-Right-2.png")],
        [createImage("images/Pinky/Pinky-Down-1.png"), createImage("images/Pinky/Pinky-Down-2.png")],
        [createImage("images/Pinky/Pinky-Left-1.png"), createImage("images/Pinky/Pinky-Left-2.png")]
        ],
      inky: 
        [
        [createImage("images/Inky/Inky-Left-1.png"), createImage("images/Inky/Inky-Left-2.png")],
        [createImage("images/Inky/Inky-Up-1.png"), createImage("images/Inky/Inky-Up-2.png")],
        [createImage("images/Inky/Inky-Right-1.png"), createImage("images/Inky/Inky-Right-2.png")],
        [createImage("images/Inky/Inky-Down-1.png"), createImage("images/Inky/Inky-Down-2.png")],
        [createImage("images/Inky/Inky-Left-1.png"), createImage("images/Inky/Inky-Left-2.png")]
        ],
      clyde: 
        [
        [createImage("images/Clyde/Clyde-Left-1.png"), createImage("images/Clyde/Clyde-Left-2.png")],
        [createImage("images/Clyde/Clyde-Up-1.png"), createImage("images/Clyde/Clyde-Up-2.png")],
        [createImage("images/Clyde/Clyde-Right-1.png"), createImage("images/Clyde/Clyde-Right-2.png")],
        [createImage("images/Clyde/Clyde-Down-1.png"), createImage("images/Clyde/Clyde-Down-2.png")],
        [createImage("images/Clyde/Clyde-Left-1.png"), createImage("images/Clyde/Clyde-Left-2.png")]
        ],
      frightened: 
        [
          createImage("images/Ghost-Death/Dead-Blue-1.png"), createImage("images/Ghost-Death/Dead-Blue-2.png")
        ],
      ghostScores: [createImage("images/Scores/200.png"), createImage("images/Scores/400.png"),createImage("images/Scores/800.png"), createImage("images/Scores/1600.png")],
      ghostWidth: [15, 15, 15, 18],
      ghostHeight: [7, 7, 7, 7],
      fruitScores: [createImage("images/Scores/100.png"), createImage("images/Scores/300.png"), createImage("images/Scores/500.png"), createImage("images/Scores/700.png"), createImage("images/Scores/1000.png"), createImage("images/Scores/2000.png"), createImage("images/Scores/3000.png"), createImage("images/Scores/5000.png")],
      fruit: [createImage("images/Fruits/Cherry.png"), createImage("images/Fruits/Strawberry.png"), createImage("images/Fruits/Peach.png"), createImage("images/Fruits/Apple.png"), createImage("images/Fruits/Melon.png"), createImage("images/Fruits/GalaxianStarship.png"), createImage("images/Fruits/Bell.png"), createImage("images/Fruits/Key.png")],
      fruitScores: [createImage("images/Scores/100.png"), createImage("images/Scores/300.png"), createImage("images/Scores/500.png"), createImage("images/Scores/700.png"), createImage("images/Scores/1000.png"), createImage("images/Scores/2000.png"), createImage("images/Scores/3000.png"), createImage("images/Scores/5000.png")],
      death: [createImage("images/Pacman-Death/Pacman-Death-3.png"), createImage("images/Pacman-Death/Pacman-Death-4.png"), createImage("images/Pacman-Death/Pacman-Death-5.png"), createImage("images/Pacman-Death/Pacman-Death-6.png"), createImage("images/Pacman-Death/Pacman-Death-7.png"), createImage("images/Pacman-Death/Pacman-Death-8.png"), createImage("images/Pacman-Death/Pacman-Death-9.png"), createImage("images/Pacman-Death/Pacman-Death-10.png"), createImage("images/Pacman-Death/Pacman-Death-11.png"), createImage("images/Pacman-Death/Pacman-Death-12.png"), createImage("images/Pacman-Death/Pacman-Death-13.png")],
      fruitValue: [100, 300, 500, 700, 1000, 2000, 3000, 5000],
      fruitWidth: [15, 15, 15, 15, 20, 20, 20, 20],
      fruitHeight: [7, 7, 7, 7, 7, 7, 7, 7],
      eaten: [createImage("images/Ghost-Death/Eyes-Left.png"), createImage("images/Ghost-Death/Eyes-Up.png"), createImage("images/Ghost-Death/Eyes-Right.png"), createImage("images/Ghost-Death/Eyes-Down.png"), createImage("images/Ghost-Death/Eyes-Left.png")],
      dot: createImage("images/Dot.png"),
      energizer: createImage("images/PowerPellet.png"),
      lives: createImage("images/Pac-Man/Pacman-Left-1.png"),
      invisible: createImage("images/Invisible.png"),
      map: createImage("images/Pacman-Map.png")
    }

    var dots = []
    const resetDots = function()
    {
      dots = []
      for (var k = 28; k >= 0; k--) 
      {
        for (var j = 30; j >= 0; j--)
        {
          if (map[j][k] === 1)
          {
            dots.push({x:k * global.tileSize, y:j * global.tileSize, width:16 * (global.tileSize / 8), height:16 * (global.tileSize / 8), value:10, image:images.dot});
          }
          else if (map[j][k] === 2)
          {
            dots.push({x:k * global.tileSize, y:j * global.tileSize, width:16 * (global.tileSize / 8), height:16 * (global.tileSize / 8), value:50, image:images.energizer});
          }
        }
      }
    }
    
    const pacman = 
    {
      direction: 0,
      wantedDirection: 0,
      isDead: false,
      tunnel: false,
      frightened: false,
      ghostsEaten: 0,
      lives: 3,
      score: 0,
      x: 108 * (global.tileSize / 8),
      y: 184 * (global.tileSize / 8),
      width: 16 * (global.tileSize / 8),
      height: 16 * (global.tileSize / 8),
      animate: 1,
      deathAnimation: [],
      softReset: function()
      {
        pacman.wantedDirection = 0
        pacman.direction = 0
        pacman.x = 108 * (global.tileSize / 8)
        pacman.y = 184 * (global.tileSize / 8)
        pacman.animate = 1
        pacman.frightened = false
        pacman.isDead = false
      },
      hardReset: function()
      {
        if (parseInt(localStorage.highscore) < pacman.score)
        pacman.softReset()
        pacman.x = 108 * (global.tileSize / 8)
        pacman.y = 184 * (global.tileSize / 8)
        pacman.direction = 0
        pacman.width = 16 * (global.tileSize / 8)
        pacman.height = 16 * (global.tileSize / 8)
        pacman.score = 0
        pacman.lives = 3
        pacman.tunnel = false
        pacman.isDead = false
        global.reset()
        dots = []
        global.waitToRestart = true
      }
    }

    const b = 
    {
      direction: 0,
      wantedDirection: -1,
      isEaten: false,
      wasEaten: false,
      isInBox: true,
      tunnel: false,
      frightened: false,
      path: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7],
      exit: [],
      x: 108 * (global.tileSize / 8),
      y: 88 * (global.tileSize / 8),
      startX: 108 * (global.tileSize / 8),
      startY: 88 * (global.tileSize / 8),
      width: 16 * (global.tileSize / 8),
      height: 16 * (global.tileSize / 8),
      animate: 1,
      determineDirection: function()
      {
        if (b.x === null || b.y === null)
        {
          return
        }
        var relX = Math.abs(b.x - pacman.x)
        var relY = Math.abs(b.y - pacman.y)
        var actX = (b.x - pacman.x)
        var actY = (b.y - pacman.y)

        global.respondToMove(b, relX, relY, actX, actY)
      }
    }

    const p = 
    {
      direction: 0,
      wantedDirection: -1,
      isEaten: false,
      wasEaten: false,
      isInBox: true,
      tunnel: false,
      frightened: false,
      path: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,  7, 7, 7, 7],
      exit: [],
      x: 108 * (global.tileSize / 8),
      y: 112 * (global.tileSize / 8),
      startX: 108 * (global.tileSize / 8),
      startY: 112 * (global.tileSize / 8),
      width: 16 * (global.tileSize / 8),
      height: 16 * (global.tileSize / 8),
      animate: 1,
      determineDirection: function()
      {
        if (p.x === null || p.y === null)
        {
          return
        }

        if (pacman.direction === 1)
        {
          var relX = Math.abs(p.x - (pacman.x - 4*global.tileSize))
          var relY = Math.abs(p.y - (pacman.y - 4*global.tileSize))
          var actX = (p.x - (pacman.x - 4*global.tileSize))
          var actY = (p.y - (pacman.y - 4*global.tileSize))
        }
        else
        {
          switch (pacman.direction)
          {
            case(2):
              var relX = Math.abs(p.x - (pacman.x + 2*global.tileSize))
              var relY = Math.abs(p.y - pacman.y)
              var actX = (p.x - (pacman.x + 2*global.tileSize))
              var actY = (p.y - pacman.y)
              break;

            case(3):
              var relX = Math.abs(p.x - pacman.x)
              var relY = Math.abs(p.y - (pacman.y - 2*global.tileSize))
              var actX = (p.x - pacman.x)
              var actY = (p.y - (pacman.y + 2*global.tileSize))
              break;

            case(4):
              var relX = Math.abs(p.x - (pacman.x - 2*global.tileSize))
              var relY = Math.abs(p.y - pacman.y)
              var actX = (p.x - (pacman.x - 2*global.tileSize))
              var actY = (p.y - pacman.y)
              break;
          }
        }

        global.respondToMove(p, relX, relY, actX, actY)
      }
    }

    const i = 
    {
      direction: 0,
      wantedDirection: -1,
      isEaten: false,
      wasEaten: false,
      isInBox: true,
      tunnel: false,
      frightened: false,
      path: [2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 7, 7, 7, 7],
      exit: [],
      x: 92 * (global.tileSize / 8),
      y: 112 * (global.tileSize / 8),
      startX: 92 * (global.tileSize / 8),
      startY: 112 * (global.tileSize / 8),
      width: 16 * (global.tileSize / 8),
      height: 16 * (global.tileSize / 8),
      animate: 1,
      determineDirection: function()
      {
        if (i.x === null || i.y === null)
        {
          return
        }

        if (pacman.direction === 1)
        {
          // Blinky dist: Math.sqrt(Math.pow(b.x - pacman.x, 2) + Math.pow(b.y - pacman.y, 2))
          var relX = Math.abs(i.x - (pacman.x - 2*global.tileSize))
          var relY = Math.abs(i.y - (pacman.y - 2*global.tileSize))
          var actX = (i.x - (pacman.x - 2*global.tileSize))
          var actY = (i.y - (pacman.y - 2*global.tileSize))
        }
        else
        {
          switch (pacman.direction)
          {
            case(2):
              var relX = Math.abs(i.x - pacman.x*Math.sqrt(Math.pow((b.x - (pacman.x + 2*global.tileSize)), 2) + Math.pow((b.y - pacman.y), 2)))
              var relY = Math.abs(i.y)
              var actX = (i.x - pacman.x*Math.sqrt(Math.pow((b.x - (pacman.x + 2*global.tileSize)), 2) + Math.pow((b.y - pacman.y), 2)))
              var actY = (i.y)
              break;

            case(3):
              var relX = Math.abs(i.x)
              var relY = Math.abs(i.y - pacman.y*Math.sqrt(Math.pow((b.y - (pacman.y + 2*global.tileSize)), 2) + Math.pow((b.x - pacman.x), 2)))
              var actX = (i.x)
              var actY = (i.y - pacman.y*Math.sqrt(Math.pow((b.y - (pacman.y + 2*global.tileSize)), 2) + Math.pow((b.x - pacman.x), 2)))
              break;

            case(4):
              var relX = Math.abs(i.x - pacman.x*Math.sqrt(Math.pow((b.x - (pacman.x - 2*global.tileSize)), 2) + Math.pow((b.y - pacman.y), 2)))
              var relY = Math.abs(i.y)
              var actX = (i.x - pacman.x*Math.sqrt(Math.pow((b.x - (pacman.x - 2*global.tileSize)), 2) + Math.pow((b.y - pacman.y), 2)))
              var actY = (i.y)
              break;
          }
        }

        global.respondToMove(i, relX, relY, actX, actY)
      }
    }

    const c = 
    {
      direction: 0,
      wantedDirection: -1,
      isEaten: false,
      wasEaten: false,
      isInBox: true,
      tunnel: false,
      frightened: false,
      flee: false,
      path: [4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 7, 7, 7, 7],
      exit: [],
      x: 124 * (global.tileSize / 8),
      y: 112 * (global.tileSize / 8),
      startX: 124 * (global.tileSize / 8),
      startY: 112 * (global.tileSize / 8),
      width: 16 * (global.tileSize / 8),
      height: 16 * (global.tileSize / 8),
      animate: 1,
      determineDirection: function()
      {
        if (c.x === null || c.y === null)
        {
          return
        }

        if ((c.x > (pacman.x - 4*global.tileSize) && c.x < (pacman.x + 4*global.tileSize)) && (c.y > (pacman.y - 4*global.tileSize) && c.y < (pacman.y + 4*global.tileSize)))
        {
          var relX = Math.abs(c.x - 8)
          var relY = Math.abs(c.y - 232)
          var actX = (b.x - 8)
          var actY = (b.y - 232)
        }
        else
        {
          var relX = Math.abs(c.x - pacman.x)
          var relY = Math.abs(c.y - pacman.y)
          var actX = (c.x - pacman.x)
          var actY = (c.y - pacman.y)
        }

        global.respondToMove(c, relX, relY, actX, actY)
      }
    }

    const ghosts = 
    {
      frightened: false,
      g: [b, p, i, c], 
      buffer: function()
      {
        for (var k=0; k<ghosts.g.length; k++)
        {
          if (ghosts.g[k].isInBox === false && ghosts.g[k].frightened === false) 
          {
            ghosts.g[k].determineDirection()
          }
          else if (ghosts.g[k].frightened === true)
          {
            ghosts.frightenedDirection(ghosts.g[k])
          }
        }
      },
      move: function()
      {
        for (var k=0; k<ghosts.g.length; k++)
        {
          if (!ghosts.g[k].isInBox) 
          {
            global.move(ghosts.g[k])
          }
          else
          {
            ghosts.g[k].x = ghosts.g[k].x
            ghosts.g[k].y = ghosts.g[k].y
          }
        }
      },
      draw: function()
      {
        for (var k=0; k<ghosts.g.length; k++)
        {
          context.drawImage(global.currentImage(ghosts.g[k]), ghosts.g[k].x - (4 * (global.tileSize / 8)), ghosts.g[k].y + (20 * (global.tileSize / 8)), ghosts.g[k].width, ghosts.g[k].height)
        }
      },
      // Works
      exit: function()
      {
        if (pacman.direction === 0 || global.completedLevel === true || global.pause === true)
        {
          return
        }

        const move = function(object, direction)
        {
          switch (direction)
          {
            case(1):
              object.y -= 0.25 * (global.tileSize);
              break;
            case(2):
              object.x += 0.25 * (global.tileSize);
              break;
            case(3):
              object.y += 0.25 * (global.tileSize);
              break;
            case(4):
              object.x -= 0.25 * (global.tileSize);
              break;
            case(7):
              object.x -= 0.25 * (global.tileSize / 2);
              break;
          }
        }

        if (b.exit[0] !== undefined && b.isInBox)
        {
          if (b.exit[0] !== 7) b.direction = b.exit[0]
          move(b, b.exit.shift())
          if (b.exit[0] === undefined)
          {
            b.isInBox = false
            if (global.waitedForInky === false && global.waitedForClyde === false)
            {
              setTimeout(function(){global.waitedForInky = true}, 5000)
              setTimeout(function(){global.waitedForClyde = true}, 15000)
            }
          }
        }
        else if (p.exit[0] !== undefined && p.isInBox)
        {
          if (p.exit[0] !== 7) p.direction = p.exit[0]
          move(p, p.exit.shift())
          if (p.exit[0] === undefined) p.isInBox = false
        }
        else if (i.exit[0] !== undefined && i.isInBox && global.waitedForInky === true)
        {
          if (i.exit[0] !== 7) i.direction = i.exit[0]
          move(i, i.exit.shift())
          if (i.exit[0] === undefined)
          {
            i.isInBox = false
          }
        }
        else if (c.exit[0] !== undefined && c.isInBox && global.waitedForClyde === true)
        {
          if (c.exit[0] !== 7) c.direction = c.exit[0]
          move(c, c.exit.shift())
          if (c.exit[0] === undefined) c.isInBox = false
        }
        else if (c.isInBox === true && global.waitedForClyde === true)
        {
          c.isInBox = false
          global.exit = clearInterval(global.exit)
        }
      },
      normalMode: function()
      {
        pacman.ghostsEaten = 0
        for (var k=0; k<ghosts.g.length; k++)
        {
          ghosts.g[k].frightened = false
          ghosts.g[k].wasEaten = false
        }
        ghosts.frightened = false
      },
      frightenedMode: function()
      {
        pacman.ghostsEaten = 0
        for (var k=0; k<ghosts.g.length; k++)
        {
          ghosts.g[k].frightened = true
          ghosts.g[k].wasEaten = false
        }
        ghosts.frightened = true
      },
      frightenedDirection: function(ghost)
      {
        relX = Math.abs(pacman.x - ghost.x)
        relY = Math.abs(pacman.y - ghost.y)
        actX = pacman.x - ghost.x
        actY = pacman.y - ghost.y

        global.respondToMove(ghost, relX, relY, actX, actY)
      },
      displayPoints: function(ghost)
      {
        global.displayPoints = true
        global.pointsX = ghost.x
        global.pointsY = ghost.y 
        var reset = function()
        {
          global.displayPoints = false
          global.pointsX = null
          global.pointsY = null
        }
        setTimeout(reset, 1000)
        pacman.score += 100*Math.pow(2, pacman.ghostsEaten)
      },
      softReset: function()
      {
        for (var k=0; k<ghosts.g.length; k++)
        {
          ghosts.g[k].isInBox = false
        }
        for (var k=0; k<ghosts.g.length; k++)
        {
          if (ghosts.g[k].isInBox === false)
          {
            ghosts.normalMode()
            ghosts.g[k].direction = 0
            ghosts.g[k].wantedDirection = -1
            ghosts.g[k].x = ghosts.g[k].startX
            ghosts.g[k].y = ghosts.g[k].startY
            ghosts.g[k].isEaten = false
            ghosts.g[k].wasEaten = false
            ghosts.g[k].tunnel = false
            ghosts.g[k].isInBox = true
            ghosts.g[k].exit = ghosts.g[k].path.slice()
          }
        }
        global.exit = clearInterval(global.exit)
      },
      hardReset: function()
      {
        ghosts.softReset()
        for (var k=0; k<ghosts.g.length; k++)
        {
          ghosts.g[k].isInBox = false
        }

        b.x = 108 * (global.tileSize / 8)
        b.startX = 108 * (global.tileSize / 8)
        b.y = 88 * (global.tileSize / 8)
        b.startY = 88 * (global.tileSize / 8)
        b.width = 16 * (global.tileSize / 8)
        b.height = 16 * (global.tileSize / 8)
        b.isInBox = true

        p.x = 108 * (global.tileSize / 8)
        p.startX = 108 * (global.tileSize / 8)
        p.y = 112 * (global.tileSize / 8)
        p.startY = 112 * (global.tileSize / 8)
        p.width = 16 * (global.tileSize / 8)
        p.height = 16 * (global.tileSize / 8)
        p.isInBox = true

        i.x = 92 * (global.tileSize / 8)
        i.startX = 92 * (global.tileSize / 8)
        i.y = 112 * (global.tileSize / 8)
        i.startY = 112 * (global.tileSize / 8)
        i.width = 16 * (global.tileSize / 8)
        i.height = 16 * (global.tileSize / 8)
        i.isInBox = true

        c.x = 124 * (global.tileSize / 8)
        c.startX = 124 * (global.tileSize / 8)
        c.y = 112 * (global.tileSize / 8)
        c.startY = 112 * (global.tileSize / 8)
        c.width = 16 * (global.tileSize / 8)
        c.height = 16 * (global.tileSize / 8)
        c.isInBox = true
      }
    }

    const fruit = 
    {
      completed: false,
      isVisible:false,
      isEaten: false,
      x: 108 * (global.tileSize / 8),
      y: 184 * (global.tileSize / 8),
      image: global.currentFruit,
      width: 16 * (global.tileSize / 8),
      height: 16 * (global.tileSize / 8),
      value: global.fruitValue
    }

    const drawObjects = function()
    {
      // Map
      context.drawImage(images.map, 0, 0, (224) * (global.tileSize / 8), (296) * (global.tileSize / 8))
      // Dots
      for (var k = 0; k<dots.length; k++)
      {
        context.drawImage(dots[k].image, dots[k].x - (4 * (global.tileSize / 8)), dots[k].y + (20 * (global.tileSize / 8)), dots[k].width, dots[k].height);
      }
      // Level counter
      var x = 96 * (global.tileSize / 8)
      var y = 276 * (global.tileSize / 8)
      for (var k = 0; k<7; k++)
      {
        if (global.levelCounter[k] !== null)
        {
          context.drawImage(global.levelCounter[k], x, y, 16 * (global.tileSize / 8), 16 * (global.tileSize / 8))
        }
        x += 16 * (global.tileSize / 8)
      }
      // Lives
      var x = 16 * (global.tileSize / 8)
      for (var k = 0; k<5; k++)
      {
        if (pacman.lives > k)
        {
          context.drawImage(images.lives, x, y, 16 * (global.tileSize / 8), 16 * (global.tileSize / 8))
        }
        x += 16 * (global.tileSize / 8)
      }
      // Fruit / Fruit Points
      if (fruit.isVisible === true && fruit.completed === false)
      {
        context.drawImage(fruit.image, fruit.x - (4 * global.tileSize / 8), fruit.y + (20 * (global.tileSize / 8)), fruit.width, fruit.height)
      }
      else if (fruit.isEaten === true)
      {
        context.drawImage(global.fruitScore, fruit.x - (3 * global.tileSize / 8), fruit.y + (24 * (global.tileSize / 8)), global.fruitWidth * (global.tileSize / 8), global.fruitHeight * (global.tileSize / 8))
      }
      // Ghost Points
      if (global.displayPoints === true && pacman.ghostsEaten > 0)
      {
        context.drawImage(images.ghostScores[pacman.ghostsEaten-1], global.pointsX - (3 * (global.tileSize / 8)), global.pointsY + (24 * (global.tileSize / 8)), images.ghostWidth[pacman.ghostsEaten-1] * (global.tileSize / 8), images.ghostHeight[pacman.ghostsEaten-1] * (global.tileSize / 8))
      }

      // Sprites
      context.drawImage(global.currentImage(pacman), pacman.x - (4 * (global.tileSize / 8)), pacman.y + (20 * (global.tileSize / 8)), pacman.width, pacman.height)
      ghosts.draw()

      // Scores
      context.fillStyle = "white";
      context.font = ""+12 * (global.tileSize / 8) + "px Arial";
      context.fillText("1-UP: "+pacman.score, 5 * (global.tileSize / 8), 16 * (global.tileSize / 8));
      // Highscore
      context.fillStyle = "white";
      context.font = ""+12 * (global.tileSize / 8) + "px Arial";
      var highscore = parseInt(localStorage.highscore)
      if (highscore === undefined) highscore = 0
      if (pacman.score > highscore)
      {
        highscore = pacman.score
        localStorage.highscore = pacman.score
      }
      context.fillText("HIGHSCORE: "+highscore, 95 * (global.tileSize / 8), 16 * (global.tileSize / 8));
      if (pacman.direction === 0 && pacman.x === 108 * (global.tileSize / 8) && pacman.y === 184 * (global.tileSize / 8) && global.waitingToStart === true && global.waitToRestart === false)
      {
        // Level
        context.fillStyle = "yellow";
        context.font = "bold "+10 * (global.tileSize / 8) + "px Arial";
        var str = " "+global.level
        context.fillText("READY!", 92 * (global.tileSize / 8), 168 * (global.tileSize / 8));
      }
      else if (global.waitToRestart === true)
      {
        context.fillStyle = "yellow";
        context.font = "bold "+10 * (global.tileSize / 8) + "px Arial";
        var str = " "+global.level
        context.fillText("PRESS 'ENTER'", 76 * (global.tileSize / 8), 168 * (global.tileSize / 8));
      }

      if (global.pause === true && pacman.isDead === false)
      {
        context.fillStyle = "yellow";
        context.font = "bold "+10 * (global.tileSize / 8) + "px Arial";
        context.fillText("PAUSED", 92 * (global.tileSize / 8), 168 * (global.tileSize / 8));
      }
    }

    const loop = function() 
    {
      // Move sprites
      if (pacman.direction !== 0 && global.completedLevel === false && pacman.isDead === false && global.pause === false)
      {
        global.move(pacman)
        ghosts.buffer()
        ghosts.move()
      }

      if (localStorage.highscore === undefined)
      {
        localStorage.highscore = pacman.score
      }

      // Draw the animations
      drawObjects()

      // Eat dots
      for (var k = 0; k<dots.length; k++)
      {
        if (pacman.x === dots[k].x && pacman.y === dots[k].y)
        {
          pacman.animate ++
          if (dots[k].value === 50)
          {
            ghosts.frightenedMode()
            global.ghostMode = clearTimeout(global.ghostMode)
            global.ghostMode = setTimeout(ghosts.normalMode, 10000)
          }
          pacman.score += dots[k].value;
          dots.splice(k, 1);
        }
      }

      // If map half completed
      if (dots.length <= 122 && fruit.completed === false && !(pacman.direction === 0 && b.isInBox === true))
      {
        fruit.isVisible = true
        reset = function()
        {
          fruit.isVisible = false
          fruit.completed = true
        }
        setTimeout(reset, 10000)
      }

      // If map is completed
      if (dots.length === 0 && global.completedLevel === false && !(pacman.direction === 0 && b.isInBox === true))
      {
        pacman.direction = 0
        global.level ++
        global.completedLevel = true
        resume = function()
        {
          // Reset dots
          resetDots()
          // Reset ghosts
          ghosts.softReset()
          // Reset pacman
          pacman.softReset()
          global.exit = clearInterval(global.exit)
          global.waitedForInky = false
          global.waitedForClyde = false
          global.waitingToStart = true
          global.completedLevel = false
          fruit.isVisible = false
          fruit.isEaten = false
          fruit.completed = false

          var fruits = null

          if (global.level >= 13)
          {
            fruits = 7
          }
          else if (global.level === 11 || global.level === 12)
          {
            fruits = 6
          }
          else if (global.level === 9 || global.level === 10)
          {
            fruits = 5
          }
          else if (global.level === 7 || global.level === 8)
          {
            fruits = 4
          }
          else if (global.level === 5 || global.level === 6)
          {
            fruits = 3
          }
          else if (global.level === 3 || global.level === 4)
          {
            fruits = 2
          }
          else if (global.level === 2)
          {
            fruits = 1
          }
          else if (global.level === 1)
          {
            fruits = 0
          }

          global.currentFruit = images.fruit[fruits]
          global.levelCounter.push(images.fruit[fruits])
          global.levelCounter.shift()
          global.fruitScore = images.fruitScores[fruits]
          global.fruitWidth = images.fruitWidth[fruits]
          global.fruitHeight = images.fruitHeight[fruits]
          global.fruitValue = images.fruitValue[fruits]
          fruit.image = global.currentFruit
        }
        resume()
      }


      context.stroke();
      window.requestAnimationFrame(loop);
    }

      /*
        - Make an array of fake 'player' positions representing the position of the corners for the ghosts to circle around
        - Set a timer on a specific interval to change which 'player' position each ghost is chasing to make it circle around and around.
      */

    const keyPressed = function(event)
    {
      if (event.keyCode === 13 && global.waitToRestart === true)
      {
        resetDots()
        global.waitToRestart = false
      }
      else if (global.waitToRestart === true || (global.pause === true && event.keyCode !== 80))
      {
        return;
      }

      if (pacman.direction === 0 && ((event.keyCode === 68 || event.keyCode === 39) || (event.keyCode === 65 || event.keyCode === 37)))
      {
        b.exit = b.path.slice()
        p.exit = p.path.slice()
        i.exit = i.path.slice()
        c.exit = c.path.slice()
        global.exit = setInterval(ghosts.exit, 35)
        global.waitingToStart = false
      }

      if (event.keyCode === 80 && pacman.direction !== 0)
      {
        global.pause = !global.pause
      }

      /*
      if (event.keyCode === 187)
      {
        scale += 0.25
        context.canvas.height = 296 * scale;
        context.canvas.width = 224 * scale;
        global.tileSize = (context.canvas.width / 28)
        global.width = context.canvas.width
        global.height = context.canvas.height
        ghosts.hardReset()
        pacman.hardReset()
        fruit.x = 108 * (global.tileSize / 8)
        fruit.y = 136 * (global.tileSize / 8)
      }
      else if (event.keyCode === 189)
      {
        scale -= 0.25
        context.canvas.height = 296 * scale;
        context.canvas.width = 224 * scale;
        global.tileSize = (context.canvas.width / 28)
        global.width = context.canvas.width
        global.height = context.canvas.height
        ghosts.hardReset()
        pacman.hardReset()
        fruit.x = 108 * (global.tileSize / 8)
        fruit.y = 136 * (global.tileSize / 8)
      }
      */

      // Right
      if (event.keyCode === 68 || event.keyCode === 39)
      {
        if (pacman.direction === 4 || pacman.direction === 0)
        {
          pacman.direction = 2;
        }
        pacman.wantedDirection = 2;
      }

      // Left
      else if (event.keyCode === 65 || event.keyCode === 37)
      {
        if (pacman.direction === 2 || pacman.direction === 0)
        {
          pacman.direction = 4;
        }
        pacman.wantedDirection = 4;
      }

      // Down
      else if (event.keyCode === 83 || event.keyCode === 40)
      {
        if (pacman.direction === 1)
        {
          pacman.direction = 3;
        }
        pacman.wantedDirection = 3;
      }

      // Up
      else if (event.keyCode === 87 || event.keyCode === 38)
      {
        if (pacman.direction === 3)
        {
          pacman.direction = 1;
        }
        pacman.wantedDirection = 1;
      }
    }
    
    window.addEventListener("keydown", keyPressed)
    var tick = setInterval(global.tick, 150)
    resetDots()
    loop();