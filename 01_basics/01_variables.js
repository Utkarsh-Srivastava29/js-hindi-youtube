const accountId=144553
let accountEmail="hitesh@google.com"
var accountPassword="12345"
accountCity="Jaipur"
let accountState;
// accountId=2 //not allowed
accountEmail="hc@hc.com"
accountPassword="21212121"
accountCity="Bengaluru"
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
//javascript din't know about the scope and that was it 
//{
//}
//this curly braces are called the scope and that is it about the above
/*
Prefer not to use var because of issue with block scope and functional scope
*/