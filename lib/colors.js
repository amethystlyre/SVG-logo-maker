const validateColor = require("validate-color");


function checkColor(color){
    if (!color){
        return false;
    }
    else if (color.includes('#')){
        let colorHex = color.trim();
        return validateColor.validateHTMLColorHex(colorHex);
    }
    else {
        let colorName = color.trim();
        return validateColor.validateHTMLColorName(colorName);
    }

}

console.log(checkColor("FFFAB4"));
module.exports = {checkColor};