// Code your solutions in this file
const people = ["Ada", "Brendan", "Ali"];
const reason = "birthday";

function writeCards(people, reason) {
	let message = [];
	for (let i = 0; i < people.length; i++) {
		message[i] = `Thank you, ${people[i]}, for the wonderful ${reason} gift!`;
	}
	return message;
}
writeCards(people, reason);

function countDown(number) {
	let i = number;
	while (i >= 0) {
		console.log(i);
		i--;
	}
}
countDown(10);
