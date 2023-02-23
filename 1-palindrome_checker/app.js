function palindrome(str) {
	const word = str
		.toLowerCase()
		.replaceAll('(', '')
		.replaceAll(')', '')
		.replaceAll('.', '')
		.replaceAll('-', '')
		.replaceAll('_', '')
		.replaceAll(', ', '')
		.split(' ')
		.join('');

	const reversed = word.split('').reverse().join('');

	return reversed === word;
}

palindrome('eye');
