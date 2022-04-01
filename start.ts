import PromptSync from 'prompt-sync';

const prompt = PromptSync({
    sigint: true
});

(function() {
    const peopleInput = prompt('How many people do you need to serve? ');
    const peopleNum = parseInt(peopleInput);

    // TODO: add your code below

    return 0;
})();

// ----------------------------------------------
// *** DO NOT CHANGE ANYTHING BELOW THIS LINE ***

/**
 * Returns the singular or plural form of a word, based on number
 *
 * Requires: singular is the singular form of the word.
 *           plural is the plural form of the word.
 *           number determines how many things there are; must be >= 0.
 * Modifies: Nothing.
 * Effects:  Returns return the singular form of the word if number == 1.
 *           Otherwise, returns the plural form.
 * Examples:
 *           // prints "foo bag"
 *           console.log(`foo ${pluralize("bag", "bags", 1)}`);
 *
 *           // prints "bar pounds"
 *           console.log(`bar ${pluralize("pound", "pounds", 3)}`);
 */
function pluralize(singular: string, plural: string, number: number): string {
    if (number == 1) {
        return singular;
    }
    return plural;
}
