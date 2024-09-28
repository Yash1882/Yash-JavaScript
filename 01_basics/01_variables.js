const accountId = 144553
let accountEmail = "yash@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState; // undefined
// accountId = 2 // not allowed


accountEmail = "yg@yg.com"
accountPassword = "21212121"
accountCity = "Bengaluru"


/*
 Prefer not to use var because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
