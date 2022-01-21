function additivePersistence(n) {
    let result = 0;
    while (n > 9) {
	let str = n.toString();
	n = 0;
	for (let i = 0; i < str.length; i++) {
	    n += parseInt(str[i]);
	}
	result++;
    }
    return result;
}

function multiplicativePersistence(n) {
    let result = 0;
    while (n > 9) {
	let str = n.toString();
	n = 1;
	for (let i = 0; i < str.length; i++) {
	    n *= parseInt(str[i]);
	}
	result++;
    }
    return result;
}
