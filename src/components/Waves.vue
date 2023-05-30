<template>
  <canvas ref="canvas" id="particle-canvas"
    style="position: absolute; z-index: -2; left: 0; top: 0;min-width: 1920px;"></canvas>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
const canvas = ref();
onMounted(() => {
  // modified version of random-normal
  function normalPool(o: { mean: any; dev: any; pool: string | any[]; }) {
    var r = 0;
    do {
      var a = Math.round(normal({ mean: o.mean, dev: o.dev }));
      if (a < o.pool.length && a >= 0) return o.pool[a]; r++
    }
    while (r < 100)
  }

  function randomNormal(o: { mean: any; dev: any; pool?: any; }) {
    if (o = Object.assign({ mean: 0, dev: 1, pool: [] }, o), Array.isArray(o.pool) && o.pool.length > 0)
      return normalPool(o); var r, a, n, e, l = o.mean, t = o.dev;
    do { r = (a = 2 * Math.random() - 1) * a + (n = 2 * Math.random() - 1) * n }
    while (r >= 1); return e = a * Math.sqrt(-2 * Math.log(r) / r), t * e + l
  }

  const NUM_PARTICLES = 600;
  const PARTICLE_SIZE = 0.4; // View heights
  const SPEED = 20000; // Milliseconds

  let particles: any[] = [];

  function rand(low: number, high: number) {
    return Math.random() * (high - low) + low;
  }

  function createParticle(canvas: any) {
    const colour = {
      // r: 80,
      // g: randomNormal({ mean: 200, dev: 50 }),
      // b: 120,
      r: 0,
      g: 87,
      b: 130,
      a: rand(0, 1),
    };
    return {
      x: -2,
      y: -2,
      diameter: Math.max(0, randomNormal({ mean: PARTICLE_SIZE, dev: PARTICLE_SIZE / 2 })),
      duration: randomNormal({ mean: SPEED, dev: SPEED * 0.1 }),
      amplitude: randomNormal({ mean: 17, dev: 1 }),
      offsetY: randomNormal({ mean: 0, dev: 5 }),
      arc: Math.PI * 2,
      startTime: performance.now() - rand(0, SPEED),
      colour: `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.a})`,
    }
  }

  function moveParticle(particle: { startTime: number; duration: number; arc: number; amplitude: number; offsetY: number; }, canvas: any, time: number) {
    const progress = ((time - particle.startTime) % particle.duration) / particle.duration;
    return {
      ...particle,
      x: progress,
      y: ((Math.sin(progress * particle.arc) * particle.amplitude) + particle.offsetY),
    };
  }

  function drawParticle(particle: { colour: any; x: number; y: number; diameter: number; }, canvas: HTMLElement | null, ctx: { fillStyle: any; beginPath: () => void; ellipse: (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number) => void; fill: () => void; }) {
    canvas = document.getElementById('particle-canvas');
    const vh = canvas.height / 100;

    ctx.fillStyle = particle.colour;
    ctx.beginPath();
    ctx.ellipse(
      particle.x * canvas.width,
      particle.y * vh + (canvas.height / 2),
      particle.diameter * vh,
      particle.diameter * vh,
      0,
      0,
      2 * Math.PI
    );
    ctx.fill();
  }

  function draw(time: number, canvas: { width: any; height: any; }, ctx: { clearRect: (arg0: number, arg1: number, arg2: any, arg3: any) => void; }) {
    // Move particles
    particles.forEach((particle, index) => {
      particles[index] = moveParticle(particle, canvas, time);
    })

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the particles
    particles.forEach((particle) => {
      drawParticle(particle, canvas, ctx);
    })

    // Schedule next frame
    requestAnimationFrame((time) => draw(time, canvas, ctx));
  }

  function initializeCanvas() {
    let canvas = document.getElementById('particle-canvas');
    canvas.width = canvas.offsetWidth * window.devicePixelRatio;
    canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    let ctx = canvas.getContext("2d");

    window.addEventListener('resize', () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx = canvas.getContext("2d");
    })

    return [canvas, ctx];
  }

  function startAnimation() {
    const [canvas, ctx] = initializeCanvas();

    // Create a bunch of particles
    for (let i = 0; i < NUM_PARTICLES; i++) {
      particles.push(createParticle(canvas));
    }

    requestAnimationFrame((time) => draw(time, canvas, ctx));
  };

  // Start animation when document is loaded
  (function () {
    if (document.readyState !== 'loading') {
      startAnimation();
    } else {
      document.addEventListener('DOMContentLoaded', () => {
        startAnimation();
      })
    }
  }());
})

</script>

<style scoped>
#particle-canvas {
  width: 100%;
  height: 100vh;
  background: #f9f9f9;
  vertical-align: middle;
}
</style>
