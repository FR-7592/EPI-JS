const {  loginEasy,loginMedium,loginHard,isDate } = require("./regex");

console.log("=======RESULTATS=======");

console.log("loginEasy part:");
console.log(`"xavier.login": ${loginEasy("xavier.login")}`);// true
console.log(`"xavier login": ${loginEasy("xavier login")}`);

console.log("loginMedium part:");
console.log(`"xavier1.login": ${loginMedium("xavier1.login")}`);// true
console.log(`"xavier.login1": ${loginMedium("xavier.login1")}`);
console.log(`"xavier.login": ${loginMedium("xavier.login")}`);// true
console.log(`"xavier login": ${loginMedium("xavier login")}`);

console.log("loginHard part:");
console.log(`"login_5": ${loginHard("login_x")}`); // true
console.log(`"x_login": ${loginHard("x_login")}`);
console.log(`"xavier1.login": ${loginHard("xavier1.login")}`);// true
console.log(`"xavier.login1": ${loginHard("xavier.login1")}`);
console.log(`"xavier.login": ${loginHard("xavier.login")}`);// true
console.log(`"xavier login": ${loginHard("xavier login")}`);


console.log("isDate part:");
console.log(`"32/12/2012" is it a date? ${isDate("32/12/2012")}`);// true
console.log(`"24/1/2024" is it a date? ${isDate("24/1/2024")}`);
console.log(`"8/2/170" is it a date? ${isDate("8/2/170")}`);// true
console.log(`"12/04/40321" is it a date? ${isDate("12/04/40321")}`);// true
