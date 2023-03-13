class TrafficLight {
    constructor(width,height,dir){
        this.color = "red";
        this.dir = dir;
        switch(this.dir){
            case "bottomLeft":
                this.x = 370;
                this.y = 467;
                this.width = width
                this.height = height;
                break;
            case "bottomUp":
                this.x = 425;
                this.y = 467;
                this.width = width
                this.height = height;
                break;
            case "rightBottom":
                this.x = 475;
                this.y = 290;
                this.width = height
                this.height= width
                break;
            case "rightLeft":
                this.x = 475;
                this.y = 235;
                this.width = height
                this.height= width
                break;
            case "upRight":
                this.x = 290;
                this.y = 225;
                this.width = width
                this.height = height;
                break;
            case "upBottom":
                this.x = 235;
                this.y = 225;
                this.width = width
                this.height = height;
                break;
            case "leftUp":
                this.x = 225;
                this.y = 370;
                this.width = height
                this.height= width
                break;
             case "leftRight":
                this.x = 225;
                this.y = 420;
                this.width = height
                this.height= width
                break;
                
        }
            
    }

    draw(ctx,pair){
        

        ctx.beginPath();
        ctx.rect(this.x,this.y,this.width,this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
    }

    update(pair){
        switch(pair){
            //in case the lights should be yellow
            case "yellow":
                this.color = "yellow";
                break;
            case "leftRightrightLeft":
                if(this.dir==="leftRight"||this.dir==="rightLeft"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
            case "bottomUpupbottom":
                if(this.dir==="bottomUp"||this.dir==="upBottom"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
            case "bottomLeftupRight":
                if(this.dir==="bottomLeft"||this.dir==="upRight"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
            case "leftUprightBottom":
                if(this.dir==="leftUp"||this.dir==="rightBottom"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
            case "bottomUpleftUp":
                if(this.dir==="bottomUp"||this.dir==="leftUp"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
            case "upBottomrightBottom":
                if(this.dir==="upBottom"||this.dir==="rightBottom"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
            case "rightLeftbottomLeft":
                if(this.dir==="rightLeft"||this.dir==="bottomLeft"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
            case "leftRightupRight":
                if(this.dir==="leftRight"||this.dir==="upRight"){
                    this.color = "green";
                }else{
                    this.color = "red";
                }
                break;
        }
    }
    
}