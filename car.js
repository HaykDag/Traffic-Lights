class Car {
    constructor(rad,speed,dir){
        
        this.rad = rad;
        this.t = 0;
        this.speed = speed;
        this.accelerator = 1000;
        this.dir = dir;
        switch(this.dir){
            case "bottomLeft":
                this.x = 380;
                this.y = 700;
                this.points = [
                    {x:this.x,y:this.y},
                    {x:400,y:300},
                    {x:350,y:310},
                    {x:-1,y:310}
                ];
                this.color="pink";
                break;
            case "bottomUp":
                this.x = 440;
                this.y = 700;
                this.color="violet";
                break;
            case "rightBottom":
                this.x = 700;
                this.y = 310;
                this.points = [
                    {x:this.x,y:this.y},
                    {x:350,y:310},
                    {x:310,y:330},
                    {x:310,y:701}
                ];
                this.color="purple";
                break;
            case "rightLeft":
                this.x = 700;
                this.y = 250;
                this.color="green";
                break;
            case "upRight":
                this.x = 310;
                this.y = 0;
                this.points = [
                    {x:this.x,y:this.y},
                    {x:300,y:340},
                    {x:360,y:390},
                    {x:701,y:390}
                ];
                this.color="blue";
                break;
            case "upBottom":
                this.x = 260;
                this.y = 0;
                this.color="gray";
                break;
            case "leftUp":
                this.x = 0;
                this.y = 390;
                this.points = [
                    {x:this.x,y:this.y},
                    {x:350,y:390},
                    {x:390,y:450},
                    {x:390,y:-1}
                ];
                this.color="lightblue";
                break;
            case "leftRight":
                this.x = 0;
                this.y = 440;
                this.color="orange";
                break;            
                
        }
        
    }

    draw(ctx){

        ctx.beginPath();
        ctx.arc(this.x,this.y,this.rad,0,Math.PI*2);
        ctx.fillStyle = this.color;
        ctx.fill();
       
        
    }

    update(lights){
      
        switch(this.dir){
            case "bottomLeft":
                if(lights[0].color === "green"){//improve
                    this.#bezierCurve(this.points);
                }else if((lights[0].color==="red"||lights[0].color==="yellow")&&Math.abs((lights[0].y+lights[0].height)-this.y+this.rad)>1){
                    this.#bezierCurve(this.points);
                }
                break;
            case "bottomUp":
                if(lights[1].color === "green"){//improve
                    this.y = this.y -this.speed*this.accelerator;
                }else if((lights[1].color==="red"||lights[1].color==="yellow")&&Math.abs((lights[1].y+lights[1].height)-this.y+this.rad)>1){
                    this.y = this.y -this.speed*this.accelerator;
                }
                break;
            case "rightBottom":
                if(lights[2].color === "green"){//improve
                    this.#bezierCurve(this.points);
                }else if((lights[2].color==="red"||lights[2].color==="yellow")&&Math.abs((lights[2].x+lights[2].width)-this.x+this.rad)>1){
                    this.#bezierCurve(this.points);
                }
                break;
            case "rightLeft":
                if(lights[3].color === "green"){//improve
                    this.x = this.x - this.speed*this.accelerator;
                }else if((lights[3].color==="red"||lights[3].color==="yellow")&&Math.abs((lights[3].x+lights[3].width)-this.x+this.rad)>1){
                    this.x = this.x - this.speed*this.accelerator;
                }
                break;
            case "upRight":
                if(lights[4].color === "green"){//improve
                    this.#bezierCurve(this.points);
                }else if((lights[4].color==="red"||lights[4].color==="yellow")&&Math.abs((lights[4].y-lights[4].height)-this.y-this.rad)>1){
                    this.#bezierCurve(this.points);
                }
                break;
            case "upBottom":
                if(lights[5].color === "green"){//improve
                    this.y = this.y + this.speed*this.accelerator;
                }else if((lights[5].color==="red"||lights[5].color==="yellow")&&Math.abs((lights[5].y-lights[5].height)-this.y-this.rad)>1){
                    this.y = this.y + this.speed*this.accelerator;
                }
                break;
            case "leftUp":
                if(lights[6].color === "green"){//improve
                    this.#bezierCurve(this.points);
                }else if((lights[6].color==="red"||lights[6].color==="yellow")&&Math.abs((lights[6].x-lights[6].width)-this.x-this.rad)>1){
                    this.#bezierCurve(this.points);
                }
                break;
            case "leftRight":
                if(lights[7].color === "green"){//improve
                    this.x = this.x + this.speed*this.accelerator;
                }else if((lights[7].color==="red"||lights[7].color==="yellow")&&Math.abs((lights[7].x-lights[7].width)-this.x-this.rad)>1){
                    this.x = this.x + this.speed*this.accelerator;
                }
                break;
        }
        
          
    }
            

    #bezierCurve(points) {
        let [p0,p1,p2,p3] = this.points;
            let cx = 3 * (p1.x-p0.x);
            let bx = 3 * (p2.x-p1.x)-cx;
            let ax = p3.x-p0.x-cx-bx;
        
            let cy = 3 * (p1.y-p0.y);
            let by = 3 * (p2.y-p1.y)-cy;
            let ay = p3.y - p0.y - cy - by;
        
            let t = this.t;
        
            this.t += this.speed;
        
            let xt = ax * (t*t*t) + bx* (t*t) + cx*t + p0.x;
            let yt = ay*(t*t*t)+by*(t*t)+cy*t+p0.y;
            
            if(this.t>1){
                this.t = 1
            }
            this.x = xt;
            this.y = yt;
    }

}