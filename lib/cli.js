//Import required modules and classes
const inquirer = require('inquirer');
const escape = require('escape-html');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./logo');
const { checkColor } = require('./colors');

//Construct commandline prompts
class CLI {
    constructor() {
        this.logoName = '';
        this.logoProperties;
    }

    run() {
        return inquirer
          .prompt([
            //Request and validate logo text from user
            {
                type: 'input',
                name: 'logoText',
                message: 'Please enter up to 3 characters for logo text:',
                validate: (input) => {return input.length >0 && input.length <=3 ? true : 'Logo text should be between 1 to 3 characters long.' }
            },
            //Request and validate logo color from user
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a name or hexadecimal number for text color:',
                validate: (input) => { return checkColor(input) ? true : 'Color name/value is invalid, please check spelling.'}
            },
            //Request user to select logo shape
            {
                type: 'list',
                name: 'shape',
                message: 'Please chose a shape for your logo:',
                choices: ["Circle","Triangle","Rectangle"]
            },
            //Request and validate log color from user
            {
                type: 'input',
                name: 'logoColor',
                message: 'Please enter a name or hexadecimal number for logo background color:',
                validate: (input) => { return checkColor(input) ? true : 'Color name/value is invalid, please check spelling.'}
            },
          ])
          .then(({logoText,textColor,logoColor,shape})=>{
            //Escape special characters for SVG file
            let text = escape(logoText);
            this.logoProperties = {text,textColor,logoColor,shape};
            //console.log(this.logoProperties);
            //Generate logo and save to SVG file in output folder
            return writeFile(
                join(__dirname, '..', 'output', `logo_${text}_${shape}.svg`),
                createLogo(this.logoProperties)
              );
          })
          .then(
            //prompt user that logo has been generated
            ()=> console.log('Generated logo.svg'))
          .catch((err)=>{
            //alert error if logo failed to generate
            console.log(err);
            console.log('Oops. Something went wrong.');
          })
    }

}

module.exports = {CLI};