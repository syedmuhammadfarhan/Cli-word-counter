#! /usr/bin/env node
import showBanner from "node-banner";
import inquirer from "inquirer";
import chalk from "chalk";

await showBanner('Word Counter', chalk.italic('(DEVELOP BY FARHAN)\n'));

async function counter() {
    let textarr: string[];
    let textstr: string;
    await inquirer
        .prompt([
            {
                type: 'input',
                name: 'text',
                message: chalk.bgBlueBright('Enter Text to Count Words:'),

            }
        ])
        .then((value) => {
            textarr = value.text.split(' ');
            textstr = textarr.join('');
            if (value.text === '') {
                console.log(`\n---------------------------------------------------`);
                console.log(chalk.green(`\nNumber of Words in Given text = ${chalk.yellow(textarr.length = 0)}`));
                console.log(chalk.green(`Number of Characters in Given text = ${chalk.yellow(textstr.length)}\n`));
                console.log(`---------------------------------------------------`);
            } else {

                let arrNotEmpty = textarr.filter((e) => e);
                console.log(`\n---------------------------------------------------`);
                console.log(chalk.green(`\nNumber of Words in Given text = ${chalk.yellow(arrNotEmpty.length)}`));
                console.log(chalk.green(`Number of Characters in Given text = ${chalk.yellow(textstr.length)}\n`));
                console.log(`---------------------------------------------------`);
            }
        })
}; // counter function ending

async function toContinue() {
    do {
        await counter();
        var again = await inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'repeat',
                    message: 'Do you want to perform another Word Count (y/n):'
                }
            ]);
        console.log('');

    }
    while (again.repeat === 'y' || again.repeat === 'Y' || again.repeat === 'yes' || again.repeat === 'Yes');
};
toContinue();