const input = require("./resources/input")

let sum = 0

input.forEach((str) => {
  let num = 0

  num = str.match(/\d/g)

  console.log(num[num.length - 1])

  sum = sum + Number(num[0] + num[num.length - 1])

})

console.log(sum)