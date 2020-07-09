acctData = [
 {
 "acctNum": "AAA - 1234",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 5231",
 "user": "Bob"
 },
 {
 "acctNum": "AAA - 9921",
 "user": "Alice"
 },
 {
 "acctNum": "AAA - 8191",
 "user": "Alice"
 }
];
balance = {
 "AAA - 1234": 4593.22,
 "AAA - 9921": 0,
 "AAA - 5231": 232142.5,
 "AAA - 8191": 4344
};
accNum = [];

function getAccNumber(data, user, sortBy, sortByDirection) {
  if (user) {
    data.filter(index => {
      if (user && index.user === 'Bob') {
        accNum.push(index.acctNum);
      } else if (user && index.user === 'Charlie') {
        accNum.push(index.acctNum);
      } else {
        accNum.push(index.accNum);
      }
    });
    return accNum;
  }
}

console.log(getAccNumber(acctData, 'Bob')); // Return Account numbers having user Bob
console.log(getAccNumber(acctData, 'Charlie')); // Return Account numbers having user Charlie
console.log(getAccNumber(acctData, '', 'acctNum')); 
