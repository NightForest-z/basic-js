module.exports = function transform(arr) {
    if(!(arr instanceof Array)) {
        throw new Error('invalid input');
      }
    
    var res = []
    var previosControlSequence = undefined;
    for(let i = 0; i < arr.length; i++) {
   
        if(arr[i] === '--double-next' || arr[i] === '--discard-next') {
          previosControlSequence = arr[i];
        } else if(arr[i] === '--discard-prev') {
          if(res.length > 0) {
            res.splice(-1,1);
          }
        } else if(arr[i] === '--double-prev') {
          if(i > 0) {
            res.push(arr[i - 1]);
          }
        } else {
          if(previosControlSequence === undefined) {
            res.push(arr[i]);
          } else if(previosControlSequence === '--double-next') {
            res.push(arr[i]);
            res.push(arr[i]);
          } else if(previosControlSequence === '--discard-next') {
            // skip curr value
          }
          previosControlSequence = undefined;
         } 
    
    }
    return res;
  }