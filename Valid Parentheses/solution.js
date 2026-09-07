/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}'
  };
    const stack = [];

  for (let i = 0; i < s.length; i++) {
    const character = s[i];

    if (character === '('|| (character === '[' || (character === '{'))){
        stack.push(character); 
    }else{
        if (stack.length === 0) {
            return false
        }
        const lastOpening = stack[stack.length-1];
        const expected = pairs[lastOpening];

        if (character !== expected){
        return false;
    } 
        stack.pop()
    }   }    if (stack.length !== 0){
            return false}
         return true;}
     
