import readlineSync from 'readline-sync';
import * as funcs from './funcs.js';

const name = funcs.welcome()
console.log(`Answer "yes" if given number is prime. Otherwise answer "no".`)

const brain_prime = () =>
{
    let winCount = 0
    while (winCount < 3)
    {
        const number = funcs.getRandomNumber()
        let numberIsPrime = true
        for(let i = 2; i < number; i++)
        {
            if(number % i === 0)
                numberIsPrime = false
        }
        console.log(`Question: ${number}`)
        const playerAnswer = readlineSync.question()
        if((numberIsPrime === true & playerAnswer === "yes") || (numberIsPrime === false & playerAnswer === "no"))
        {
            console.log("Correct!")
            winCount++
        }
        else
        {
            let correctAnswer = ""
            if(numberIsPrime === true)
                correctAnswer = "yes"
            else correctAnswer = "no"
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
            break
        }
        if(winCount === 3)
            console.log(`Congratulations, ${name}!`)
    }
}

brain_prime();