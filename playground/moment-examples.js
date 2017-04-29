let moment = require("moment")

let now = new moment()

let timeStamp = now.unix()
let currentMoment = moment.unix(timeStamp)
console.log(currentMoment.format("MMMM Do, Y @ hh:mm A"))