module.exports = function countCats(backyard) {
  let count = 0;
  for (let i = 0; i < backyard.length; i++) {
    backyard[i].forEach(function(a){
      if(a=="^^"){
        count++;
      }
    });
  }
  return count;
}

