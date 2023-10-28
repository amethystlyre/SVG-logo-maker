const { Shapes, Circle, Triangle, Rectangle } = require('../lib/shapes.js');

//Test to verify that render method for Shapes triggers error
describe('Shapes', () => {
  describe('Shapes', () => {
    it('should throw error if render() is called', () => {
      const shapes = new Shapes();
      const err = new Error('Child class must implement render() method.');
      expect(shapes.render).toThrow(err);
    });
  });
  //Test to verify that the Shapes class can be instantiated.
  describe('Instantiate', () => {
    it('should be an instance of Shapes class', () => {
      const shapes = new Shapes();
      expect(shapes).toBeInstanceOf(Shapes);
    });
  });
  //Test to verify that the logo text can be assigned
  describe('Initialize text', () => {
    it('should set text correctly in logo', () => {
      const text = "AbC";
      const shapes = new Shapes(text, "", "");
      expect(shapes.text).toEqual(text);
    });
  });
  //Test to verify that the text color can be assigned
  describe('Initialize text color', () => {
    it('should set text color correctly in logo', () => {
      const textColor = "white";
      const shapes = new Shapes("AbC", textColor, "");
      expect(shapes.textColor).toEqual(textColor);
    });
  });
  //Test to verify that the logo background color can be assigned
  describe('Initialize logo color', () => {
    it('should set logo background color correctly in logo', () => {
      const logoColor = "#191970";
      const shapes = new Shapes("AbC", "white", logoColor);
      expect(shapes.logoColor).toEqual(logoColor);
    });
  });
});

//Test to verify that a new circle object can be instantiated by inheriting shapes properties
describe('Circle', () => {
  it('should render a circlar shape background', () => {
    const text = "AbC";
    const textColor = "white";
    const logoColor = "#191970";
    const circle = new Circle(text, textColor, logoColor);
    expect(circle.render()).toBe(
      `<circle cx="150" cy="100" r="80" fill="#191970" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">AbC</text>`
    );
  });
});

//Test to verify that a new triangle object can be instantiated by inheriting shapes properties
describe('Triangle', () => {
  it('should render a triangular shape background', () => {
    const text = "AbC";
    const textColor = "white";
    const logoColor = "#191970";
    const triangle = new Triangle(text, textColor, logoColor);
    expect(triangle.render()).toBe(
      `<polygon points = "150,20 40,180 260,180" fill="#191970" />

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="white">AbC</text>`
    );
  });
});

//Test to verify that a new rectange object can be instantiated by inheriting shapes properties
describe('Rectangle', () => {
  it('should render a rectangular shape background', () => {
    const text = "AbC";
    const textColor = "white";
    const logoColor = "#191970";
    const rectangle = new Rectangle(text, textColor, logoColor);
    expect(rectangle.render()).toBe(
      `<rect x="50" y="40" width="200" height="120" fill="#191970" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="white">AbC</text>`
    );
  });
});
