const { Circle, Triangle, Rectangle} = require('./shapes.js');

function createLogo(logo){
    const{logoText,textColor,logoColor,shape} = logo;

    let logoShape;
    switch (shape){
        case "Circle":
            logoShape = new Circle(logoText, textColor, logoColor);
            break;
        case "Triangle":
            logoShape = new Triangle(logoText, textColor, logoColor);
            break;
        case "Rectanlge":
            logoShape = new Rectangle(logoText, textColor, logoColor);
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