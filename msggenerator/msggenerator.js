const randomNum = num => {return Math.floor(Math.random() * num)};
//console.log(randomWord(5))

const randomOptions = [['bed','pocket','hand', 'house', 'cat', 'dog', 'toes', 'cactus', 'suitcase', 'shoes', 'office', 'car', 'bellybutton'],
                     ['button', 'toe', 'eyes', 'nose', 'toes', 'knob', 'switches','hands', 'legs', 'feet', 'potatoes', 'teeth', 'volcanoes', 'tomatoes'],
                     ['eliminate','sit', 'kill', 'laugh', 'eat', 'yawn', 'grab','jump', 'escape', 'kiss','cry','kick','drink', 'run', 'sleep', 'boogie', 'flap'],
                    ['scary', 'amazing', 'cool', 'stinky', 'gross', 'funny', 'silly', 'powerful', 'weak', 'goofy', 'interesting', 'weird', 'odd', 'strange']]


const madLib = randomArray => {
    completedLib = ['Random words are surrounded by asterisks:']
    for (let i = 0; i < 4; i++)
    {if (i === 0)
        {completedLib.push(`Today, every student has a computer small enough to fit into their *${randomArray[i][randomNum(randomArray[i].length)]}*.`)}
        else if (i === 1)
        {completedLib.push(`It can solve any math problem by simply pushing the computer's little *${randomArray[i][randomNum(randomArray[i].length)]}*.`)}
        else if (i === 2)
        {completedLib.push(`Computers can add, multiply, divide, and *${randomArray[i][randomNum(randomArray[i].length)]}*.`)}
        else if (i === 3)
        {completedLib.push(`Aren't these little computers *${randomArray[i][randomNum(randomArray[i].length)]}*!`)}
    }
    console.log(completedLib.join(' '));
}


madLib(randomOptions);
