import readlineSync from 'readline-sync';

console.log("Welcome to the Brain Games!")

const name = readlineSync.question("May I have your name?")
console.log(`Hello, ${name}`)

console.log(`Answer "yes" if the number is even, otherwise answer "no".`)

const brain_even = () =>
{
    let winCount = 0
    while (winCount < 3)
    {
        const number = Math.floor(Math.random() + Math.floor(Math.random() * 100));
        const numberIsEven = number % 2 === 0;
        console.log(`Question: ${number}`)
        const playerAnswer =readlineSync.question()
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
            console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.Let's try again, ${name}!`)
            break
        }
        if(winCount === 3)
            console.log(`Congratulations, ${name}!`)
    }
}

brain_even();