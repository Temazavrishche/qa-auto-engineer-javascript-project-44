import readlineSync from 'readline-sync';
export const getRandomNumber = (mult = 100) =>
{
    const number = Math.floor(Math.random() + Math.floor(Math.random() * mult));
    return number
}

export const welcome = () =>
    {
        console.log("Welcome to the Brain Games!")
        const name = readlineSync.question("May I have your name? ")
        console.log(`Hello, ${name}`)
        return name
    }