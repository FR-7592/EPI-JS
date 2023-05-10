"use strict";

const { InvalidUsernameError, InvalidPasswordError, InvalidYearOfBirthError } = require("./accountError");


function is_ok(c)
{
    return (c>='0' && c<='9')||(c>='A' && c<='Z') || (c>='a' && c<='z') || (c==='-') || (c==='_');  
}
//console.log(is_ok('7'));

function check_username(username)
{
    if(typeof username !== "string")
    {
	throw new InvalidUsernameError("Argument is not a string");
	;
    }
    if(username.length === 0)
    {
	throw new InvalidUsernameError("Empty string");

    }
    let index  =0 ;
    while (index<username.length)
    {
	if(!is_ok(username[index]))
	{
	    throw new InvalidUsernameError("Forbidden character detected");
	}
	index++;
    }

}
function check_password(password)
{
    if(typeof password !== "string")
    {
	throw new InvalidPasswordError("Argument is not a string");
    }
    if( (password.length < 8) || (password.length > 100) )
    {
	throw new InvalidPasswordError("Invalid length");
    }
    let index =0;
    let lower_count = 0;
    let upper_count = 0;
    let number_count = 0;
    while(index < password.length)
    {
	let c = password[index];
	if(c>='A' && c<='Z')
	{
	    upper_count++;
	}
	if(c>='0' && c<='9')
	{
	    number_count++;
	}
	if(c>='a' && c<='z')
	{
	    lower_count++;
	}


	index++;
    }
    if(lower_count === 0)
    {
	throw new InvalidPasswordError("Missing lower character");
    }
    if(upper_count === 0)
    {
	throw new InvalidPasswordError("Missing upper character");
    }
    if(number_count === 0)
    {
	throw new InvalidPasswordError("Missing number character");
    }


}

function check_yearOfBirth(yearOfBirth)
{
    if(typeof yearOfBirth !== 'number')
    {
	throw new InvalidYearOfBirthError("Wrong type for year of birth");
    }
    if(yearOfBirth<=1800 || yearOfBirth >2022 )
    {
	throw new InvalidYearOfBirthError("Year of Birth must be strictly greater than 1800 and lower or equal to 2022");
    }
}
class Account {
    constructor(username,password,yearOfBirth)
    {

	check_username(username);
	check_password(password);
	check_yearOfBirth(yearOfBirth);
	this.username = username;
	this.password = password;
	this.yearOfBirth = yearOfBirth;
    }
}

//let a1 = new Account("Hello","BastienH1",1783);
//new Account("login_x", "myPassword123", 1990);
//new Account("", "myPassword123", 1990);
module.exports = {
    Account
}
