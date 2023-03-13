function BlockLines (canvas,ctx) {
    //blocks
    ctx.beginPath();
    ctx.fillStyle = "green"
    ctx.fillRect(0,0,canvas.width/3,canvas.height/3)
    
    ctx.beginPath();
    ctx.fillRect(0,canvas.height-canvas.height/3,canvas.width/3,canvas.height/3)
    
    ctx.beginPath();
    ctx.fillRect(canvas.width-canvas.width/3,0,canvas.width/3,canvas.height/3)
    
    ctx.beginPath();
    ctx.fillRect(canvas.width-canvas.width/3,2*canvas.height/3,canvas.width/3,canvas.height/3)
    
    /// lines 
    ctx.beginPath()
    ctx.moveTo(canvas.width/2-15,0)
    ctx.lineWidth = 4
    ctx.lineTo(canvas.width/2-15,canvas.height)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(canvas.width/2+15,0)
    ctx.lineTo(canvas.width/2+15,canvas.height)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(0,canvas.height/2+15)
    ctx.lineTo(canvas.width,canvas.height/2+15)
    ctx.stroke()
    
    ctx.beginPath()
    ctx.moveTo(0,canvas.height/2-15)
    ctx.lineTo(canvas.width,canvas.height/2-15)
    ctx.stroke()
    
    // dash-lines
    ctx.setLineDash([20, 20]);
    ctx.beginPath();
    ctx.moveTo(canvas.width/2-65,0);
    ctx.lineTo(canvas.width/2-65,canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(canvas.width/2+65,0);
    ctx.lineTo(canvas.width/2+65,canvas.height);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0,canvas.height/2+65);
    ctx.lineTo(canvas.width,canvas.height/2+65);
    ctx.stroke();
    
    ctx.beginPath();
    ctx.moveTo(0,canvas.height/2-65);
    ctx.lineTo(canvas.width,canvas.height/2-65);
    ctx.stroke();
    
    //white rect in the middle
    ctx.beginPath()
    ctx.fillStyle = "white"
    ctx.fillRect(canvas.width/3-5,canvas.height/3,canvas.width/3+20,canvas.height/3)
    
    ctx.setLineDash([]);
    
}
