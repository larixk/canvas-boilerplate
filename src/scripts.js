window.createEngine({
  container: document.body,
  onCreate: () => {
    const world = {};
    return world;
  },
  onUpdate: (dt, world, canvas) => {
    return world;
  },
  onDraw: (world, canvas) => {
  }
})
