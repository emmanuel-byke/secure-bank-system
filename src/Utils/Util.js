

export function capitalize(str) {
    return str.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

export function combineUserNames(users) {
    if(!users) return ''
    let result = '';
    for(let i=0; i<users.length; i++) {
        if( i>0 && i < users.length ) {
            result+=', '
        }
        result += `${capitalize(users[i].firstname[0])}. ${capitalize(users[i].lastname)}`
    }

    return result;
}