const { Circle, Triangle, Rectangle} = require('./shapes.js');

//Generate SVG file content for creating logo based on user selection
function createLogo(logo){
    const{text,textColor,logoColor,shape} = logo;

    let logoShape;
    switch (shape){
        case "Circle":
            logoShape = new Circle(text, textColor, logoColor);
            break;
        case "Triangle":
            logoShape = new Triangle(text, textColor, logoColor);
            break;
        case "Rectangle":
            logoShape = new Rectangle(text, textColor, logoColor);
            break;
        default:
            throw new Error ("Invalid shape.");

    }
    //console.log("logoShape: "+logoShape);

    return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

${logoShape.render()}

</svg>`;
    
}


module.exports = { createLogo };