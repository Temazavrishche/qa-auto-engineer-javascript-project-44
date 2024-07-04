import readlineSync from 'readline-sync';
import * as funcs from './funcs.js';

const name = funcs.welcome()
console.log(`What is the result of the expression?`)

const brain_calc = () =>
    {
        let winCount = 0
        while (winCount < 3)
        {
            const number1 = funcs.getRandomNumber()
            const number2 = funcs.getRandomNumber()
            let mathSign = ""
            let correctAnswer = ""
            switch (funcs.getRandomNumber(3))
            {
                case 0:
                    mathSign = "-"
                    correctAnswer = number1 - number2
                    break
                case 1:
                    mathSign = "+"
                    correctAnswer = number1 + number2
                    break
                case 2:
                    mathSign = "*"
                    correctAnswer = number1 * number2
                    break
            }
            console.log(`Question: ${number1} ${mathSign} ${number2}`)
            const playerAnswer = readlineSync.question()
            if(playerAnswer == correctAnswer)
            {
                console.log("Correct!")
                winCount++
            }
            else
            {
                console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${name}!`)
                break
            }
            if(winCount === 3)
                console.log(`Congratulations, ${name}!`)
        }
    }
    brain_calc();