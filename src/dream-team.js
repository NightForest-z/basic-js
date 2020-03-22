
module.exports = function createDreamTeam(members) {
   
    if(!Array.isArray(members)) {
      return false;
    }
 
    let membersFirstLetters = members.filter(member => (typeof member == "string")).map(member => member.trim().toUpperCase().charAt(0));
    membersFirstLetters.sort();
       
     let res = membersFirstLetters.join('');
     return res;
  };