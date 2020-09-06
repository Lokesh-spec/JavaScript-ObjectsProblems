function canAlternate(s) {
  let data = s.split("");
  let zeros = 0;
  let ones = 0;
  for (let i in data) {
    if (parseInt(i) === 0) {
      zeros++;
    } else {
      ones++;
    }
  }
  if (zeros % 2 === 0 && ones % 2 === 1) {
    return true;
  } else if (zeros % 2 === 1 && ones % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(canAlternate("0001111")); // ➞ true
console.log(canAlternate("01001")); // ➞ true
console.log(canAlternate("010001")); // ➞ false
console.log(canAlternate("1111")); // ➞ false