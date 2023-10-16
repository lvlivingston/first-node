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

// const daysOfWeek = require('./days-of-week');
// const day = daysOfWeek.getWeekday(5);

// console.log(daysOfWeek);
// console.log(day);

// node won't see exports, bc node only knows about module.exports
// console.log(module.exports === exports);

// console.log(global);

// const random = require('./random');
// for (let i = 0; i < 10; i++) {
//   console.log( random(1, 2) );
// }

// const random = require('./random');
// for (let i = 0; i < 10; i++) {
//   console.log( random(100, 200) );
// }

const circle = require('./circle');
 console.log( circle.area(50) );  // 7853.98...
 console.log( circle.circumference(75) );  // 471.23...
