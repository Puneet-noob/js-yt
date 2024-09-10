const accountId = 24433
let accountEmail = "aaa@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

//accountId = 23 //not allowed
console.log(accountId);

accountEmail = "bbb@gmail.com"
accountPassword = "9887"
accountCity = "IXR"

/*
ALWAYS use LET
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountPassword, accountCity, accountId, accountState])