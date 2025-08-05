const accountID = 144553
let accountEmail = "kanishka@gmail.com"
var accountPassword = "12345"
accountCity = "panipat"
let accountState;

//accountID= 2  //not allowed to change value of any variable written with const keyword
console.log(accountID);


//prefer not to use var because of issue in block scope and functional scope


accountEmail="hr@gmail.com"
accountPassword="21212121"
accountCity="jaipur"
console.log(accountPassword);
console.log(accountCity)
console.log(accountEmail)
console.table([accountID, accountPassword, accountEmail,accountCity,accountState])




