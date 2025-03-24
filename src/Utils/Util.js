

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

export function chooseUserName(user) {
    return user?.first_name||user?.last_name? `${user?.first_name??''} ${user?.last_name??''}` : user?.username
}

export function relativeTime(dateTimeStr) {
    const date = new Date(dateTimeStr);
    const now = new Date();
    const diffMs = now - date;
    const isPast = diffMs >= 0;
    const diffSeconds = Math.floor(Math.abs(diffMs) / 1000);

    const thresholds = [
        { max: 60, divisor: 1, past: () => "a few seconds ago", future: () => "in a few seconds" },
        { max: 3600, divisor: 60, past: n => `${n} minute${n === 1 ? '' : 's'} ago`, future: n => `in ${n} minute${n === 1 ? '' : 's'}` },
        { max: 86400, divisor: 3600, past: n => `${n} hour${n === 1 ? '' : 's'} ago`, future: n => `in ${n} hour${n === 1 ? '' : 's'}` },
        { max: 2592000, divisor: 86400, past: n => n === 1 ? "yesterday" : `${n} days ago`, future: n => n === 1 ? "tomorrow" : `in ${n} days` },
        { max: 31536000, divisor: 2592000, past: n => `${n} month${n === 1 ? '' : 's'} ago`, future: n => `in ${n} month${n === 1 ? '' : 's'}` },
        { max: Infinity, divisor: 31536000, past: n => `about ${n} year${n === 1 ? '' : 's'} ago`, future: n => `in about ${n} year${n === 1 ? '' : 's'}` }
    ];

    for (const { max, divisor, past, future } of thresholds) {
        if (diffSeconds < max) {
            const n = Math.floor(diffSeconds / divisor);
            return isPast ? past(n) : future(n);
        }
    }
}


