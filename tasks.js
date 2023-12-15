// tasks.js

const moment = require('moment');

const isTaskOverdue = (taskDueDate) => {
  const currentDate = moment().format('YYYY-MM-DD');
  return moment(taskDueDate).isBefore(currentDate);
};

module.exports = {
  isTaskOverdue,
};
