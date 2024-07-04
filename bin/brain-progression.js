import readlineSync from 'readline-sync';
import * as funcs from './funcs.js';

const name = funcs.welcome()
console.log(`What number is missing in the progression?`)

const brain_progression = () =>
{
    let winCount = 0
    while(winCount < 3)
    {
        const stepNumber = funcs.getRandomNumber()
        let lengthOfProgression = funcs.getRandomNumber(15)

        while(lengthOfProgression < 5)
            lengthOfProgression = funcs.getRandomNumber(15)

        const posOfMissingNum = funcs.getRandomNumber(lengthOfProgression)
        const startPos = stepNumber * funcs.getRandomNumber(15)

        let progression = ""
        for (let i = 0; i <= lengthOfProgression ; i++)
        {
            if(i == posOfMissingNum)
                progression += ".. "
            else progression += startPos + stepNumber * i + " ";
        }
        console.log(`Question: ${progression}`)
        const playerAnswer = readlineSync.question()

        if(playerAnswer == stepNumber)
        {
            console.log("Correct!")
            winCount++
        }
        else
        {
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${stepNumber}'.\nLet's try again, ${name}!`)
            break
        }
        if(winCount === 3)
            console.log(`Congratulations, ${name}!`)
    }
}

brain_progression()