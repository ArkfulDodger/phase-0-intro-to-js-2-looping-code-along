function writeCards(names, event) {
    const messages = [];

    for (let i = 0; i < names.length; i++) {
        const name = names[i];
        messages.push(`Thank you, ${name}, for the wonderful ${event} gift!`);
    }

    return messages;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}