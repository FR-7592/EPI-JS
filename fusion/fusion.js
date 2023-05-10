function merge_two(obj1,obj2)
{
    if(obj1 === null)
    {
	return obj2;
    }
    if(obj2 === null)
    {
	return obj1;
    }

    let res = {...obj1,...obj2};
    //console.log(res);
    for (let attribute in res)
    {
	if(obj1[attribute] && obj2[attribute])
	{
	    if(typeof obj1[attribute] !== typeof obj2[attribute] ||  (typeof obj1[attribute] === 'boolean'))
	    {
		res[attribute] = obj2[attribute];
	    }
	    else
	    {
		if(typeof obj1[attribute] !== 'object')
		{
		    res[attribute] = obj1[attribute] + obj2[attribute];
		}
		else
		{
		    if(obj1[attribute] instanceof Array && obj2[attribute] instanceof Array)
		    {
			res[attribute] = [...obj1[attribute],...obj2[attribute]];
		    }
		    else
		    {
			res[attribute] = merge_two( obj1[attribute] ,obj2[attribute]) ;
		    }
		}
	    }
	}

    }
    //console.log(res);
    return res;
}

function fusion(...objs)
{
    if(objs.length === 0)
    {
	return {};
    }
    return objs.reduce((p,c)=> {
	    return merge_two(p,c);
	    });
}

module.exports = {
    fusion,merge_two
}
