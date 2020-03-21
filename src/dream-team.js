module.exports = function createDreamTeam(members) {
  let team = [];
  if(Array.isArray(members)){
    members.forEach(function (a){
      if(typeof a === 'string'){
      let aMembers = a.trim().split('');
      team.push(aMembers[0].toUpperCase());
      }
    });
  return team.sort().join("");
  } else {
    return false;
  }
}
