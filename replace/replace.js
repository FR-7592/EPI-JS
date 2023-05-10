function replacer(match, p1, p2, p3){
	return [p3,p1,p2].join("-");
}

function replace(str){
	let reg = /([0-9][0-9])\/([0-9][0-9])\/([0-9][0-9][0-9][0-9])/g;
	return str.replace(reg, replacer);
}


module.exports = {
	replace,
}
