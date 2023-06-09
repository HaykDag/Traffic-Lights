const canvas = document.querySelector("canvas")

const ctx = canvas.getContext("2d");

canvas.width = 700;
canvas.height = 700;

const lights = [new TrafficLight(40,7,"bottomLeft"),
                new TrafficLight(40,7,"bottomUp"),
                new TrafficLight(40,7,"rightBottom"),
                new TrafficLight(40,7,"rightLeft"),
                new TrafficLight(40,7,"upRight"),
                new TrafficLight(40,7,"upBottom"),
                new TrafficLight(40,7,"leftUp"),
                new TrafficLight(40,7,"leftRight")
            ];
const trafficLightPairs = [
    "leftRightrightLeft",
    "bottomUpupbottom",
    "bottomLeftupRight",
    "leftUprightBottom",
    "bottomUpleftUp",
    "upBottomrightBottom",
    "rightLeftbottomLeft",
    "leftRightupRight"
]

// input for the number of cars for each direction
const carTypes = {
    bottomLeft:10,
    bottomUp:30,
    rightBottom:20,
    rightLeft:10,
    upRight:25,
    upBottom:10,
    leftUp:36,
    leftRight:15,
}

const cars = [];

for(let i = 0;i<Object.entries(carTypes).length;i++){
    for(let j = 0;j<Object.entries(carTypes)[i][1];j++){
        cars.push(new Car(10,0.003,Object.entries(carTypes)[i][0]))
    }
}
let brain = new NeuralNetwork([8,12,8]);
if(localStorage.getItem("brain")){
    brain = JSON.parse(localStorage.getItem("brain"));
    NeuralNetwork.mutate(brain,0.1)
}

let outputs = [];

let carsArr = getRemainingCars(cars);
const num = 0;
document.onmousedown = (event)=>{
    const num = Math.floor(Math.random()*8+1);

        for(let i = 0;i<lights.length;i++){
            lights[i].update("yellow")
        }
        setTimeout(()=>{
            for(let i = 0;i<lights.length;i++){
                lights[i].update(trafficLightPairs[num-1]);
            }
        },1700)
    
}

function save(){
    localStorage.setItem("brain",
        JSON.stringify(brain));
}

function discard(){
    localStorage.removeItem("brain");
}
function loop (){
    
    ctx.clearRect(0,0,canvas.width,canvas.height)
    BlockLines(canvas,ctx);
    
    for(let i = 0;i<cars.length;i++){
        //remove the cars that are out of the canvas
        if(cars[i].x>canvas.width||cars[i].x<0||cars[i].y<0||cars[i].y>canvas.height){
            cars.splice(i,1);
          //don't draw the cars in one lane on each other, keep space;  
        }else if(cars[i-1]&&getDist(cars[i-1],cars[i])<cars[i].rad*2.5){
            cars[i].draw(ctx);
        }else{
            cars[i].draw(ctx);
            cars[i].update(lights);
        } 
    }
    /*
    if(cars.length===0){
        save();
        location.reload();
    }*/
    carsArr = getRemainingCars(cars);
    
    outputs = NeuralNetwork.feedForward(carsArr,brain);
    let maxIndex = 0;
    for(let j = 1;j<outputs.length;j++){
        if(outputs[j]>outputs[maxIndex]){
            maxIndex = j
        }
    }
    
    for(let i = 0;i<lights.length;i++){
        lights[i].update(trafficLightPairs[maxIndex]);
    }

    
    lights.forEach(light => {
        light.draw(ctx);
    });
    requestAnimationFrame(loop)
}
 loop();

 function getDist(c1,c2){
    return Math.sqrt((c1.x-c2.x)*(c1.x-c2.x)+(c1.y-c2.y)*(c1.y-c2.y));
 }

 function getRemainingCars(arr){
    if(arr.length===0) return [];
    const remainingCars = new Array(8).fill(0);

    for(let i = 0;i<arr.length;i++){
        
        switch(arr[i].dir){
            case "bottomLeft":
                remainingCars[0]++;
                break;
            case "bottomUp":
                remainingCars[1]++;
                break;
            case "rightBottom":
                remainingCars[2]++;
                break;
            case "rightLeft":
                remainingCars[3]++;
                break;
            case "upRight":
                remainingCars[4]++;
                break;
            case "upBottom":
                remainingCars[5]++;
                break;
            case "leftUp":
                remainingCars[6]++;
                break;
            case "leftRight":
                remainingCars[7]++;
                break;
        }
    }
    return remainingCars;
 }

 function lerp(A,B,t){
    return A+(B-A)*t;
}
