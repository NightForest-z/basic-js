module.exports = function getSeason(date) {
  if (!date) { return 'Unable to determine the time of year!'; }

  try { date.getTime(); } catch(e) { throw new Error(e); }
   
  var someMonth = date.getMonth();
 
    
  if ( (someMonth>=0 & someMonth<2) || someMonth==11) {
    return 'winter'}
      
   else if ((someMonth>1)&(someMonth<5)) 
   return 'spring';
   else if ((someMonth>4)&(someMonth<8)) 
   return 'summer';
   else if ((someMonth>7)&(someMonth<11)) 
   return 'autumn';
   
    }