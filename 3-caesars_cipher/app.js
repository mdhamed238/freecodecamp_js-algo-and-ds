function rot13(str) {
	const alphabet = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];

	let decoded = '';

	for (let char of str) {
		if (alphabet.indexOf(char) < 0) {
			decoded += char;
			continue;
		}

		const idx = alphabet.indexOf(char);
		const value = alphabet[(idx + 13) % 26];
		decoded += value;
	}

	return decoded;
}

console.log(rot13('SERR PBQR PNZC'));

/*
    
    A <-> N
    B <-> O
  */
