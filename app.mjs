
import translate from 'node-google-translate-skidz';
import readline from 'readline'

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question('Source Language: ', sl => {
	rl.question('Target Language: ', tl => {
		rl.question('Your Text: \n', text => {
			translate({
				text: text,
				source: sl,
				target: tl
			}, result => {
				console.log(`Result:\n${result.translation}`);
			});
			rl.close();
		});
	});
});