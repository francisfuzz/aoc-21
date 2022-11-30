const fs = require('fs')
const depths = fs.readFileSync('./inputs.txt', 'utf8').split("\n")

let countOfMeasurements = 0

// We start at 1, since we skip the first one anyway.
for (let i = 1; i < depths.length; i++) {
  const previousDepth = depths[i-1]
  const currentDepth = depths[i]

  // If the current depth increases from previous,
  // increment the counter.
  if (currentDepth - previousDepth > 0) {
    countOfMeasurements += 1
  }
}

console.log(countOfMeasurements)
