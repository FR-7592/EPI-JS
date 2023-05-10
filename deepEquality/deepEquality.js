
function  arrayEquality(var1,var2)
{
    if(var1.length !== var1.length)
    {
	return false;
    }
    let index = 0;
    while( index < var1.length)
    {
	if(!deepEquality(var1[index], var2[index]))
	{
	    return false;
	}
	index++;
    }
    return true;
}
function objectEquality(var1,var2)
{
    for (let key in var1)
    {
	if(!deepEquality(var1[key], var2[key]))
	{
	    return false;
	}
    }
    return true;
}

function deepEquality(var1, var2)
{
    if(typeof var1 !== typeof var2)
    {
	return false;
    }
    if(typeof var1 === 'object')
    {
	if(var1 instanceof Array)
	{
	    return arrayEquality(var1,var2);
	}
	return objectEquality(var1,var2);
    }
    return var1===var2;
}

module.exports = {
    deepEquality,
}
