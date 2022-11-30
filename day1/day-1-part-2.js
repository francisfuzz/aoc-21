const fs = require('fs')
const depths = fs.readFileSync('./inputs.txt', 'utf8').split("\n").map(i => parseInt(i))

// Our code is perfect. <3
let counter = 0

for (let i = 3; i < depths.length; i++) {
  // Stop when there aren't enough measurements left to create a new three-measurement sum.
  const first = depths[i-3]
  const second = depths[i-2]
  const third = depths[i-1]
  const fourth = depths[i]

  // These are sums
  const previousWindow = [first, second, third].reduce((p, c) => p + c, 0)
  const currentWindow = [second, third, fourth].reduce((p, c) => p + c, 0)

  console.log({previousWindow, currentWindow})

  if (currentWindow > previousWindow) {
    counter += 1
  }
}

// Still perfect. <3
console.log(counter)
