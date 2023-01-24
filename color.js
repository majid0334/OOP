//Color bygd med prototyp
/* function Color(r, g, b) {
  this.r = r;
  this.g = g;
  this.b = b;
}

Color.prototype.toRgb = function () {
  return console.log(`color is following: ${this.r}, ${this.g}, ${this.b}`);
};
Color.prototype.toHex = function () {
  return (
    "#" +
    ((1 << 24) | (this.r << 16) | (this.g << 8) | this.b).toString(16).slice(1)
  );
};

Color.prototype.toRgba = function (a) {
  return console.log(
    `color is following: ${this.r}, ${this.g}, ${this.b}, ${a}`
  );
};

const rgb = new Color(242, 22, 22);
rgb.toRgb();
const hex = new Color(242, 22, 22);
console.log(hex.toHex());
const rgba = new Color(242, 22, 22);
rgba.toRgba(1); */

class Color {
  constructor(r, g, b) {
    this.r = r;
    this.g = g;
    this.b = b;
  }
  toRgb() {
    return console.log(
      `rbg color is following: ${this.r}, ${this.g}, ${this.b}`
    );
  }

  rgbToHex() {
    return (
      "#" +
      ((1 << 24) | (this.r << 16) | (this.g << 8) | this.b)
        .toString(16)
        .slice(1)
    );
  }
  toRgba(a) {
    return console.log(
      `rgba color is following: ${this.r}, ${this.g}, ${this.b}, ${a}`
    );
  }
}

const rgbCol = new Color(22, 22, 22);
rgbCol.toRgb();
const toHex = new Color(222, 22, 22);
console.log(toHex.rgbToHex());
const rgba = new Color(242, 22, 22);
rgba.toRgba(1);
