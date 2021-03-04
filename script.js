const messages = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
}

const randNumGenerator = num => {
    return Math.floor(Math.random() * num)
}

let customMessage = []

for (let key in messages) {
    let index = randNumGenerator(messages[key].length)


    switch(key){
        case 'signInfo':
            customMessage.push(`Your sign right now is a ${messages[key][index]}.`)
            break
        case 'fortuneOutput':
            customMessage.push(`You are having "${messages[key][index]}".`)
            break
        case 'advice':
            customMessage.push(`My advice for you is: "${messages[key][index]}".`)
            break
        default:
            customMessage.push(`Not enough information.`)
    }
}

const finishedText = text => {
    const formatting = customMessage.join('\n')
    console.log(formatting)
}

finishedText(customMessage)