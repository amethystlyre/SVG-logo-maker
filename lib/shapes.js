//Generic shapes class
class Shapes {
    constructor (text, textColor, logoColor){
        this.text = text;
        this.textColor = textColor;
        this.logoColor = logoColor;
    }

    render(){
        throw new Error('Child class must implement render() method.');
    }

}

//Circle class inherits Shapes properties
class Circle extends Shapes {
    constructor (text, textColor, logoColor){
        super(text, textColor, logoColor);
    }
    render(){
        return `<circle cx="150" cy="100" r="80" fill="${this.logoColor}" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }

}

//Triangle class inherits Shapes properties
class Triangle extends Shapes {
    constructor (text, textColor, logoColor){
        super(text, textColor, logoColor);
    }
    render(){
        return `<polygon points = "150,20 40,180 260,180" fill="${this.logoColor}" />

        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    }
}

//Rectangle class inherits Shapes properties
class Rectangle extends Shapes{
    constructor (text, textColor, logoColor){
        super(text, textColor, logoColor);

    }
    render(){
        return `<rect x="50" y="40" width="200" height="120" fill="${this.logoColor}" />

        <text x="150" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    }

}

module.exports = {
    Shapes,
    Circle,
    Triangle,
    Rectangle
  };