process.stdin.setEncoding('utf-8');

process.stdin.on('readable', function() {
// metoda .read() ma za zadanie odczytać co użytkownik podał na wejściu
	var input = process.stdin.read(); // !!! odczytuje !!!

	if (input !== null) {  // jeśli input nie jest równy zero!!1
		var instruction = input.toString().trim(); 
		// Instrukcja switch 
		switch(instruction) {
			case '/ver':
				process.stdout.write('Node version:\n')
				console.log(process.version);
				break;
			case '/lang':
				process.stdout.write('System language details:\n')
				console.log(process.env.LANG);
				break;
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});