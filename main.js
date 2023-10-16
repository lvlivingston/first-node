// console.log('SEI Rocks');

// const fs = require('fs');

// fs.writeFile(
//     './hello.txt',
//     'Hello!',
//     function() {
//         console.log('done creating file');
//     }
// );

// require function returns whatever module.exports holds / references
// const daysOfWeek = require('./days-of-week');
// console.log(daysOfWeek);

// const daysOfWeek = require('./days-of-week')[1];
// console.log(daysOfWeek);

const daysOfWeek = require('./days-of-week');
const day = daysOfWeek.getWeekday(5);

// console.log(daysOfWeek);
// console.log(day);

// node won't see exports, bc node only knows about module.exports
// console.log(module.exports === exports);

console.log(global);

