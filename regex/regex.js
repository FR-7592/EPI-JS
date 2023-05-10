function loginEasy(str){
    let reg = /[a-z]+\.[a-z-]+$/;
    return reg.test(str);
}

function loginMedium(str){
    let reg = /[a-z]+[1-9]*\.[a-z-]+$/;
    return reg.test(str);
}

function loginHard(str){
    let reg_1 = /[a-z]+[1-9]*\.[a-z]+$/;
    let reg = /[a-z]+_[a-z0-9-]$/;
    return reg.test(str) || reg_1.test(str);
}

function isDate(str){
    let reg = /(3[01]|[0-2][0-9])\/(0*[1-9]|1[0-2])\/[0-9]+$/;
    if (reg.test(str)){
        return true;
    }
    let reg_2 = /^[1-9]\/(0*[1-9]|1[0-2])\/[0-9]+$/;
    return reg_2.test(str);
}

module.exports = {
loginEasy,
loginMedium,
loginHard,
isDate,
}
