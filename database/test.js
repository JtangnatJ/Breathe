// const date = Date().split(' ');
const date = new Date();
const year = date.getFullYear();
const month = `0${date.getMonth()}`;
const day = `0${date.getDate()}`;
const dateString = `${year}${month.slice(-2)}${day.slice(-2)}`;
const dateNum = parseInt(dateString);
console.log(date, year, month, day, dateString, dateNum);