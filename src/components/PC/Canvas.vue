<template>
    <canvas ref="canvas" id="canv" width="920" height="920"></canvas>
</template>
  
<script setup lang='ts'>
import { onMounted, ref } from 'vue'

onMounted(() => {
    window.requestAnimationFrame = (function (callback) {
        return window.requestAnimationFrame || window.requestAnimationFrame || window.requestAnimationFrame || window.requestAnimationFrame || window.requestAnimationFrame ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    //canvas
    var canvas;

    //context
    var ctx: any;

    //distance of hillset - how far out it runs 
    var hillset = 920;

    //max x,y positions (width and height of canvas)
    var canvasWidth = 920;
    var canvasHeight = 920;

    //view point (higher looks like your watching from above.)
    var viewPoint = 90;

    //half width
    var canvasWidthHalf = canvasWidth / 3;

    //half height
    var canvasHeightHalf = canvasHeight / 3;

    //screen margin left
    var marginLeft = 0;

    //screen margin top
    var marginTop = -15.0;

    //screen margin bottom 
    var marginBottom = 0;

    //color update
    var colorUpdate = 0;

    function draw() {
        canvas = document.getElementById("canv");
        //@ts-ignore
        ctx = canvas.getContext("2d");
        //make valleys, speed
        setInterval(hillsValleys, 60);
    }
    //2d to 3d conversion  (x3d, y3d, z3d)
    function conversion(conversionX: number, conversionY: number, conversionZ: number) {
        //scale = dist / dist + z3d
        var scale = hillset / (hillset + conversionZ);

        //x2d to x3d - half w * scale + half w
        var xConversionX = ((conversionX - canvasWidthHalf) * scale) + canvasWidthHalf;

        //y2d to y3d - half w * scale + half w *.01
        var yConversionX = ((conversionY - canvasHeightHalf) * scale) + canvasHeightHalf - (conversionZ * 0.01);

        //return x2d, y2d vals
        return [xConversionX, yConversionX];
    }

    //noise function noise
    function noise(x: number, y: number) {
        //control height and length of peaks here by changing any of the values, but specifically, the 2.55 val
        return (Math.sin(y * 0.172) + Math.sin((x + (y * 0.347)) * 0.2)) * 2.55;
    }

    // make hills && valleys
    function hillsValleys() {
        //the opacity of the canvas background color gives kind of a blending / shaded effect of the lines so they don't appear so sharp - more mystic-like - purely a matter of taste. looks fine with opacity of 1. 
        ctx.fillStyle = "hsla(0,0%,98%,1)";
        ctx.fillRect(0, 0, canvasWidth, canvasHeight);

        //increase bottom margin
        marginBottom += 1;

        //increase top margin
        marginLeft += 1;

        //increment color val
        colorUpdate -= 0.5;

        //line width: anything higher than 1 slows animation and looks pretty horrible! 
        //I think the highest it should go is .8
        ctx.lineWidth = .22;

        //valley crevices counter
        //equals max x / view point
        var valleyCrevicesCounter = canvasWidth / viewPoint;

        //shift left = margin left mod 1 * viewpoint
        var shiftԼeft = (marginLeft % 1) * viewPoint;

        //shift bottom = margin bottom mod 1 * viewpoint
        var shiftBottom = (marginBottom % 1) * viewPoint;

        //2d starting points  
        //point 2d array x,y
        var arrayPoint = [0, 0];

        //z axis crevice loop (the 3d effect)
        //for z crevices = 100; >=10; decrease them (forward movement effect)
        for (var i = 100; i >= 10; i--) {
            ctx.beginPath();

            // edge = edge > remove / hide elements outside of this container. 
            // eq. to z crevices * 1.25
            var edge = i * 1.25;

            //z position = z crevices * viewpoint - bottom margin 
            var positionZ = (i * viewPoint) - shiftBottom;

            //crevice / line visibility set to false initially
            var creviceLineVisible = false;

            //stroke > rotating hues 
            ctx.strokeStyle = "hsla(200,100%,25%,1)";

            // moveTo the first point(moveToFirstPoint). 
            var moveToFirstPoint = true;

            //j = crevice x
            //for crevice x = edge; crevice x <= crevice counter + edge; increase crevice x
            for (var j = -edge; j <= valleyCrevicesCounter + edge; j++) {

                //horizon = horizon > level and direction of noise
                //noise(noise) is crevice x + margin left &&  margin bottom + crevice z.
                var horizon = noise(j + marginLeft, marginBottom + i);

                //xPosition = x position; yPosition = y position 
                //hiding and showing lines based on their x,y positions
                //x pos = crevice x * viewpoint - left shift
                var xPosition = (j * viewPoint) - shiftԼeft;
                //y pos = horizon - margin top * viewpoint
                var yPosition = (horizon - marginTop) * viewPoint;

                //point 2d = scale(xpos, ypos, zpos)
                arrayPoint = conversion(xPosition, yPosition, positionZ);

                //if point 2d[array pos 1] > max x
                if (arrayPoint[1] > canvasWidth) {

                    //point 2d[array pos 1] = max y
                    arrayPoint[1] = canvasHeight;
                }
                //else if point 2d[array pos 1] < 0
                else if (arrayPoint[1] < 0) {

                    //point 2d [array pos 1] = 0
                    arrayPoint[1] = 0;
                } else {
                    //else, crevice visibility is true (show more lines)
                    creviceLineVisible = true;
                }

                //if point location is at first position
                if (moveToFirstPoint) {

                    //shift array
                    ctx.moveTo(arrayPoint[0], arrayPoint[1]);

                    //first position is now false
                    moveToFirstPoint = false;
                } else {
                    //else, create point 2d lines x=0, y=1
                    ctx.lineTo(arrayPoint[0], arrayPoint[1]);
                }
            }
            //if line is within the visible (creviceLineVisible) area, draw it.
            if (creviceLineVisible) {
                ctx.stroke();
            }
        }

    }
    window.requestAnimationFrame(draw);
})

</script>
  
<style scoped>
canvas {
    width: 100%;
    height: 92vh;
}

@media screen and (max-width: 1366px) {
    canvas {
        min-width: 1920px;
    }
}
</style>
  