import readlineSync from 'readline-sync';
import * as funcs from './funcs.js';

const name = funcs.welcome()
console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

const brain_even = () =>
{
    let winCount = 0
    while (winCount < 3)
    {
        const number = funcs.getRandomNumber()
        const numberIsEven = number % 2 === 0;
        console.log(`Question: ${number}`)
        const playerAnswer = readlineSync.question()
        if((numberIsEven === true & playerAnswer === "yes") || (numberIsEven === false & playerAnswer === "no"))
        {
            console.log("Correct!")
            winCount++
        }
        else
        {
            let correctAnswer = ""
            if(numberIsEven === true)
                correctAnswer = "yes"
            else correctAnswer = "no"
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
            break
        }
        if(winCount === 3)
            console.log(`Congratulations, ${name}!`)
    }
}

brain_even();