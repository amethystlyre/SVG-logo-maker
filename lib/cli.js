const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createLogo } = require('./logo');

class CLI {
    constructor() {
        this.logoName = '';
        this.logoProperties;
    }

    run() {
        return inquirer
          .prompt([
            {
                type: 'input',
                name: 'logoText',
                message: 'Please enter 3 characters for logo text:',
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Please enter a name or hexadecimal number for text color:',
            },
            {
                type: 'input',
                name: 'logoColor',
                message: 'Please enter a name or hexadecimal number for logo background color:',
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Please chose a shape for your logo:',
                choices: ["Circle","Triangle","Rectangle"]
            },
          ])
          .then(({logoText,textColor,logoColor,shape})=>{
            this.logoProperties = {logoText,textColor,logoColor,shape};
            console.log("this.logoProps: "+this.logoProperties);
            return writeFile(
                join(__dirname, '..', 'output', `logo_${logoText}_${shape}_${logoColor}.svg`),
                createLogo(this.logoProperties)
              );
          })
          .then(()=> console.log('Created logo SVG file'))
          .catch((err)=>{
            console.log(err);
            console.log('Oops. Something went wrong.');
          })
    }




}

module.exports = CLI;