
function dateCopy(d)
{
    return new Date(d.valueOf());
}

function arrayCopy(arr)
{
    let result = [];
    for( let x of  arr)
    {
	result.push(deepCopy(x));
    }
    return result;
}
function objectCopy(obj)
{
    let res = {} ;
    for (var item in obj)
    {
	res[item] = deepCopy(obj[item]);
    }
    return res;
}
function deepCopy(x)
{
    if(x === null)
    {
	return null;
    }
    if(typeof x === 'object')
    {
	if(x instanceof Date)
	{
	    return dateCopy(x);
	}
	if(x instanceof Array)
	{
	    return arrayCopy(x);
	}
	return objectCopy(x);

    }
    if(typeof x === 'string')
    {
	let res = "" +x;
	return x;
    }
    return x;
}
/*
let a = {array :[3,5,7], name: "Str"};
let b= { obj : a, size : 10};
let cpy = deepCopy(b);
b.obj.array[2]++;
b.size*=14;
console.log(cpy , b);
*/
/*
let obj1 = { a: 1, b: "1", c: [1, 2, 3], p:5 };
let obj2 = { a: 2, b: "2", c: [4, 5, 6], q:"K" };
let res = {...obj1,...obj2};
console.log(res);*/
module.exports = { deepCopy,dateCopy, }
