export function isEmail(email) {
    if(!email){
        return false
    }
    if (email.length <= 0) {
        return false
    }
    if (!email.includes("@")) {
        return false
    }
    if (!email.includes(".")) {
        return false
    }
    return true
}
export function isText(name) {
    if(!name){
        return false
    }
    if(name.length<=0){
        return false
    }
    return true
}
export function isPhone(num){
    if(!num){
        return false
    }
    if(num.length<10){
        return false
    }
    return true
}

export function isAge(num){
    if(!num){
        return false
    }
    if(num<=0 || num>120){
        return false
    }
    return true
}