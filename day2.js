const fs = require('fs')
const inputs = fs.readFileSync('./day2-inputs.txt', 'utf8').split("\n")

let horizontalPosition = 0
let depth = 0

for (let i = 0; i < inputs.length; i++) {
  const [direction, amt] = inputs[i].split(' ')
  const amount = parseInt(amt)

  switch (direction) {
    case 'forward':
      horizontalPosition += amount
      break
    case 'down':
      depth += amount
      break
    case 'up':
      depth -= amount
      break
    default:
      throw new Error('lol, what are you doing')
  }
}

const answer = horizontalPosition * depth

console.log(answer)
