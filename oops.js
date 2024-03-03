const circle = {
  radious: 1,
  location: {
    x: 1,
    y: 2,
  },
  draw: function () {
    console.log(
      "Drawing Circle at " +
        this.location.x +
        "," +
        this.location.y +
        " with radius " +
        this.radious
    );
  },
};

circle.draw();
