function isDisarium(n) {
    let str = n.toString();
    let m = 0;
    for (let i = 0; i < str.length; i++) {
	m += Math.pow(parseInt(str[i]), i+1);
    }
    return m == n;
}
