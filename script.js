const btn = document.querySelector('button');
const section = document.querySelector('section');

let chars = 'ABCDEFGH0123456789';
let codesNubmer = 1000;
let charsNumber = 10;

const generateCodes = function(){
  
  for (let i = 0; i< codesNubmer; i++){
    let code = '';
    for (let i = 0; i<charsNumber; i++){
      let index = Math.floor(Math.random() * chars.length);
      code += chars[index];
    }
    const div = document.createElement('div');
    div.textContent = code;
    section.appendChild(div)
  }
  
}


btn.addEventListener('click', generateCodes)