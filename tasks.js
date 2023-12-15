// tasks.js

const moment = require('moment');

// previous version of isTaskOverdue for testing
const IsTaskOverdue = (taskDueDate) => {
    const currentDateFormatted = moment().format('MM-DD-YYYY');
    const currentDateParsed = moment(currentDateFormatted, 'MM-DD-YYYY').format('MM-DD-YYYY');
    
    // Check if the task is overdue
    return moment(taskDueDate, 'MM-DD-YYYY').isBefore(currentDateParsed);
};

module.exports = {
  isTaskOverdue,
};
