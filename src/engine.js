(function () {
  function resize(canvas, callback) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    if (callback) {
      callback(canvas);
    }
  }

  function createCanvas(options) {
    if (!options.container) {
      return;
    }

    const canvas = document.createElement('canvas');
    options.container.appendChild(canvas);

    window.addEventListener('resize', () => {
      resize(canvas, options.onResize)
    });
    resize(canvas, options.onResize);

    return canvas
  }

  function now() {
    return new Date().getTime();
  }

  window.createEngine = function engine(options) {
    let world = {};
    const canvas = createCanvas(options);

    if (options.onCreate) {
      world = options.onCreate(world);
    }

    let lastTime;
    function tick() {
      requestAnimationFrame(tick);
      if (!lastTime) {
        lastTime = now();
      }
      const currentTime = now();
      const dt = currentTime - lastTime

      lastTime = currentTime;

      if (options.onUpdate) {
        world = options.onUpdate(dt, world);
      }
      if (options.onDraw) {
        options.onDraw(world, canvas);
      }
    }
    tick();
  }
})();
