import readlineSync from 'readline-sync';
import * as funcs from './funcs.js';

const name = funcs.welcome()
console.log(`Find the greatest common divisor of given numbers.`)

const brain_gcd = () =>
{
    let winCount = 0

    while(winCount < 3)
    {
        const number1 = funcs.getRandomNumber()
        const number2 = funcs.getRandomNumber()
        let greatestCommonDivisor = ""

        for( let i = 0; i <= Math.min(number1,number2); i++)
        {
            if(number1 % i === 0 & number2 % i === 0)
                greatestCommonDivisor = i
        }
        console.log(greatestCommonDivisor)
        console.log(`Question: ${number1} ${number2}`)
        const playerAnswer = readlineSync.question()
        console.log(`Your answer: ${playerAnswer}`)

        if(greatestCommonDivisor == playerAnswer)
        {
            console.log("Correct!")
            winCount++
        }
        else
        {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${greatestCommonDivisor}'.\nLet's try again, ${name}!`)
            break
        }
        if(winCount === 3)
            console.log(`Congratulations, ${name}!`)
    }

}
brain_gcd()