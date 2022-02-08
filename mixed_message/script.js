function generateRandomNumber(num) {

    return Math.floor(Math.random() * num)
}

const behaviourPattern = {
    Day: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    character_trait: [' have a good memory; you are soft spoken, but you are also very whimsical',
        ' love to spend time with your family, relatives and close friends',
        ` are most likely to be involved in a skill-based occupation, and you are very business minded.`,
        ' are very active, lively and have a vivacious demeanor. You have warrior-like qualities',
        ' are quite witty and have a mind curved specially for business.'
    ],
    luckyNumber: [5, 3, 2, 1, 4, 7, 21, 17, 9]



}
drawMachine = []
for (let selector in behaviourPattern) {
    let selected = generateRandomNumber(behaviourPattern[selector].length)


    switch (selector) {
        case 'Day':
            drawMachine.push(`If you were born on a "${behaviourPattern[selector][selected]}".`)
            break
        case 'character_trait':
            drawMachine.push(`You: "${behaviourPattern[selector][selected]}".`)
            break
        case 'luckyNumber':
            drawMachine.push(`Your lucky number for this week is: "${behaviourPattern[selector][selected]}".`)
            break
        default:
            drawMachine.push('Try again ')
    }
}

const choosen = drawMachine.join('\n')


console.log(choosen);