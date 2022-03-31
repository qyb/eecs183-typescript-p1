import PromptSync from 'prompt-sync';

const prompt = PromptSync({
    sigint: true
});

function main(): number {

    const peopleInput = prompt('How many people do you need to serve? ');
    const peopleNum = parseInt(peopleInput);

    var focacciaNum: number;

    if (peopleNum % 4 === 0) {
        focacciaNum = peopleNum / 4;
    } else {
        focacciaNum = Math.ceil(peopleNum / 4);
    }

    console.log(`\n\
\n\
You need to make: ${focacciaNum} ${pluralize("loaf", "loafs", focacciaNum)} of focaccia\n`);

    console.log('\
Shopping List for Focaccia Bread\n\
--------------------------------');

    const flour = 5 * focacciaNum;      // cups
    const yeast = 1.75 * focacciaNum;   // teaspoons
    const salt = 1.875 * focacciaNum;   // teaspoons
    const oliveOil = 2 * focacciaNum;   // tablespoons
    const water = 2 * focacciaNum;      // cups

    const flourBag = Math.ceil(flour / 20);                     // 20 cups in 5 pounds, 5 pound bag of flour
    const yeastPackage = Math.ceil(yeast / 2.25);               // 2.25 teaspoons per package
    const saltCanister = Math.ceil(salt / 6);                   // 5 grams per teaspoon, 30 gram canister of salt
    const oliveOilBottle = Math.ceil(oliveOil * 14.8 / 500);    // 14.8 millilitres per tablespoon, 500 milliliter bottle of olive oil

    // const cost = 2.69 * flourBag + 0.4 * yeastPackage + 0.49 * saltCanister + 6.39 * oliveOilBottle;
    const cost = (269 * flourBag + 40 * yeastPackage + 49 * saltCanister + 639 * oliveOilBottle) / 100; // JS floating-point problem

    function outputLine(n: number, unit: string, ingredient: string) {
        // pluralize 函数显然更严谨一些，但是这里似乎简单的加个 's' 也能凑合用
        console.log(`${n} ${unit}${n > 1 ? 's':''} of ${ingredient}`);
    }

    outputLine(flourBag, 'bag', 'flour');
    outputLine(yeastPackage, 'package', 'yeast');
    outputLine(saltCanister, 'canister', 'salt');
    outputLine(oliveOilBottle, 'bottle', 'olive oil');

    console.log(`\n\
Total expected cost of ingredients: $${cost}\n\
\n\
Have a great party!`);

    return 0;
}

// ----------------------------------------------
// *** DO NOT CHANGE ANYTHING BELOW THIS LINE ***

main();

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
