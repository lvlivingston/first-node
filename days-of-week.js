// console.log(module);
// console.log(module.exports);

// module.exports = 'SEI Rocks!';
// module.exports = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']

//like defining interface
module.exports = {
    weekdays,
    getWeekday
};

// module.exports.weekdays = weekdays;

// module.exports.getWeekday = function(dayNo) {
//     if (dayNo < 0 || dayNo > 6) dayNo = 0;
//     return weekdays[dayNo];
// };

function getWeekday(dayNo) {
    if (dayNo < 0 || dayNo > 6) dayNo = 0;
    return weekdays[dayNo];
}