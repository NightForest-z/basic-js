module.exports = function repeater(str, options) {
    let repeatObject = {
        repeatTimes: 1,
        separator: '+',
        addition: '',
        additionRepeatTimes: 1,
        additionSeparator: '|'
    };

    if(typeof str !== 'string') {
        str = str + '';
      }
  
      if(!options.repeatTimes)
        options.repeatTimes = repeatObject.repeatTimes;
  
      if(!options.separator)
        options.separator = repeatObject.separator; 
  
      if(options.hasOwnProperty('addition')) {
  
        if(typeof options.addition !== 'string') {
          options.addition = options.addition + '';
        }
  
        if(!options.additionRepeatTimes)
          options.additionRepeatTimes = repeatObject.additionRepeatTimes;
  
        if(!options.additionSeparator)
          options.additionSeparator = repeatObject.additionSeparator;
  
      } else {
          options.addition = repeatObject.addition;
      }

let result = "";
    
    for(let i = 0; i < options.repeatTimes; i++) {
      
      result += str;
      
      if(options.addition != '') {
        
        for(let a = 0; a < options.additionRepeatTimes; a++) {
          result += options.addition;
          
          if (a !== options.additionRepeatTimes - 1) {
            result += options.additionSeparator;
          }
        }
        
      }
      
      if (i !== options.repeatTimes - 1) {
        result += options.separator;
      }
      
    }
    
    return result;
};
  