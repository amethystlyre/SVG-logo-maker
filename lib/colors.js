const validateColor = require("validate-color");

//A helper function to validate user's color name/hex exists
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

module.exports = {checkColor};