

function getNumberFields(inputObject)
{
    let resultArray = [];
    if(inputObject == null)
    {
	return resultArray;
    }
    for (let key in inputObject)
    {
	if(typeof inputObject[key] === 'number')
	{
	    resultArray.push(key);
	}
    }
    return resultArray;
}
//console.log(getNumberFields(obj),obj);
function fullyUppercase(s)
{
    for(let i = 0; i<s.length;i++)
    {
	if((s[i] >= 'a' && s[i] <='z'))
	{
	    return false;
	}
    }
    return true;
}
function incrementCounters(inputObject)
{
    let resultArray = [];
    if(inputObject == null)
    {
	return ;
    }
    const r = new RegExp("counter", "id");
    for (let key in inputObject)
    {
	if(r.exec(key) && typeof inputObject[key] === 'number')
	{
	    inputObject[key] = inputObject[key] +1;
	}
    }
}
function deleteUppercaseProperties(inputObject)
{
    let resultArray = [];
    if(inputObject == null)
    {
	return ;
    }
    for (let key in inputObject)
    {
	if(typeof inputObject[key] === 'object' )
	{
	    deleteUppercaseProperties(inputObject[key]);
	}
	if(fullyUppercase(key))
	{
	    delete inputObject[key];
	    
	}
    }

}
/*
obj = { A: 5, bCounTer: 2 , notACounter: 'String', FULLY : 26, COUNTER : 75};
incrementCounters(obj);
console.log(obj);
deleteUppercaseProperties(obj);
console.log(obj);

let b = { 
    a : 25 ,
    Ob : 
    { 
	A25:2,
	Ba:5
    }
}
deleteUppercaseProperties(b);
console.log(b);
*/
module.exports = {
    getNumberFields,
    incrementCounters,
    deleteUppercaseProperties,
}
