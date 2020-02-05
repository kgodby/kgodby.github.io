  export function discSampler(width, height, radius){
        let k = 100, 
        radius2 = radius**2,
        R = 3 * radius2,
        cellSize = radius*Math.SQRT1_2,
        gridWidth = Math.ceil(width / cellSize),
        gridHeight = Math.ceil(height/ cellSize),
        grid = new Array(gridWidth*gridHeight),
        queue = [],
        queueSize = 0,
        sampleSize = 0;
       grid.fill(-1)
       
    
    return function() {
       
        if(!sampleSize) return sample(Math.random() * width, Math.random() * height)
        
        while(queueSize) {
            const i = Math.random() * queueSize | 0,
            s = queue[i];

            for(let j = 0; j < k; j++){
                const a = 2*Math.PI * Math.random(),
                r = Math.sqrt(Math.random() * R + radius2),
                x = s[0] + r * Math.cos(a),
                y = s[1] + r * Math.sin(a);

                if (0 <= x && x < width && 0 <= y && y < height && far(x,y)){ 
                    
                   return sample(x,y)
             
                    
                    
                }
            }
            queue[i] = queue[--queueSize];
            queue.length = queueSize;
        }
        return [null,sampleSize, grid]
    };

    function far(x,y){
        var i = x / cellSize | 0,
            j = y / cellSize | 0,
            i0 = Math.max(i - 1, 0),
            j0 = Math.max(j - 1, 0),
            i1 = Math.min(i + 1, gridWidth),
            j1 = Math.min(j + 1, gridHeight);

        for (j = j0; j < j1; j++) {
            var o = j * gridWidth;
            for (i = i0; i < i1; i++) {
                if (s = grid[o + i]) {
                    var s,
                        dx = s[0] - x,
                        dy = s[1] - y;
                        // console.log(dx**2 + dy**2)
                        // console.log(radius2)
                    if (dx * dx + dy * dy < radius2) return false;
                }
            }
        }

        return true;
    }

    function sample(x,y){
        const s = [x,y];
        queue.push(s);

        grid[gridWidth * (y / cellSize | 0) + (x / cellSize | 0)] = s;
        ++sampleSize;
        ++queueSize;
        
        return [s,sampleSize, grid];
    }
  }

