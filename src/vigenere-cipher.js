class VigenereCipheringMachine {
    constructor(reverse) {
        this.reverse = reverse;
      }
    
      encrypt(message, key) {
        if(!message ||
          !key) throw new Error();
    
        
        let alphabet = [];
        for (let i = 65; i < 91; i++) {
          alphabet.push( String.fromCharCode(i) );
        }
    
        
        let m = message.toUpperCase().split('');
        let k = key.toUpperCase().split('');
    
        
        let result = [];
        let j = 0;
    
        for (let i = 0; i < m.length; i++) {          
          if(alphabet.indexOf(m[i]) === -1) {
            result.push(m[i]);
            continue;
          }
    
          let sum = alphabet.indexOf(m[i]) + alphabet.indexOf(k[j]);
          let findIndex = 0;
          
          if (alphabet.length - 1 - sum < 0) {
            findIndex = Math.abs(alphabet.length - 1 - sum) - 1;
          } else {
            findIndex = sum;
          }
          
          result.push(alphabet[findIndex]);
          
          j++;
          if (j === k.length) j = 0;
        }
    
        return (this.reverse === false) ? result.reverse().join('') : result.join('');
      }
    
      decrypt(message, key) {
        if(!message ||
           !key) throw new Error();
        
        
        let alphabet = [];
        for (let i = 65; i < 91; i++) {
          alphabet.push( String.fromCharCode(i) );
        }
    
        
        let m = message.toUpperCase().split('');
        let k = key.toUpperCase().split('');
    
        
        let result = [];
        let j = 0;
    
        for (let i = 0; i < m.length; i++) {          
          if(alphabet.indexOf(m[i]) === -1) {
            result.push(m[i]);
            continue;
          }
    
          let mI = alphabet.indexOf(m[i]);
          let kI = alphabet.indexOf(k[j]);
        
          let findIndex = 1 + (mI > kI) ? mI - kI : kI - mI;
          if(findIndex < 0) {
            findIndex = alphabet.length + findIndex;
          }
          
          result.push(alphabet[findIndex]);
          
          j++;
          if (j === k.length) j = 0;
        }
    
        return (this.reverse === false) ? result.reverse().join('') : result.join('');
      }
    }
    
module.exports = VigenereCipheringMachine;
