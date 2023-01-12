// Your code here
//map()-reduce()-forEach
 function createEmployeeRecord(employee){
    return {
    firstName: employee[0] ,
    familyName: employee[1] ,
    title: employee[2],
    payPerHour: employee[3],
    timeInEvents: [],
    timeOutEvents: []
}
 }


 function createEmployeeRecords(arrays) {
    return arrays.map(employee => createEmployeeRecord(employee))
 }

 function createTimeInEvent( employeeRecord , dateStampIn) {
   const dateAndHour = dateStampIn.split(' ')
   const timeInObj = {
    type: 'TimeIn',
    date: dateAndHour[0],
    hour: parseInt(dateAndHour[1])
    }

employeeRecord.timeInEvents.push(timeInObj)
    return employeeRecord
    // console.log('datestamp',dateAndHour)
    // console.log('record',employeeRecord)
   
 }



 function createTimeOutEvent(employeeRecord,dateStampOut){
    let dateAndHour = dateStampOut.split(' ')
    const timeOutObj = {
    type: 'TimeOut',
    hour: parseInt(dateAndHour[1]) ,
    date: dateAndHour[0]
}
    employeeRecord.timeOutEvents.push(timeOutObj)
        return employeeRecord
// console.log('datestamp',dateAndHour)
//     console.log('record',employeeRecord)
 }

 function hoursWorkedOnDate(employeeRecord,date) {
    let timeIn = employeeRecord.timeInEvents.find(e => e.date === date)
    let timeOut = employeeRecord.timeOutEvents.find(e => e.date === date)
    let hours = (timeOut.hour-timeIn.hour)/100
 // console.log(hours)
        return hours
 }

 function wagesEarnedOnDate(employeeRecord,date){
    let timeIn = employeeRecord.timeInEvents.find(e => e.date === date)
    let timeOut = employeeRecord.timeOutEvents.find(e => e.date === date)
    let hours = (timeOut.hour-timeIn.hour)/100
    let hourlyPay = employeeRecord.payPerHour
    return hours * hourlyPay
// console.log(employeeRecord)
 }

function allWagesFor(employeeRecord) {
    let dates = employeeRecord.timeInEvents.map(e => e.date)
    // console.log(dates)
    const allWages = dates.reduce((accumulator, currentValue) => accumulator + wagesEarnedOnDate(employeeRecord,currentValue), 0 );
    return allWages
}

function calculatePayroll(employeeRecords){
const totalPay = employeeRecords.reduce((total,employeeRecord) => total + allWagesFor(employeeRecord),0)
return totalPay
}



// const array1 = [time1, time2, time3, time4];
// accumulator is the value after the currentvalue is added
// current value is the current index of the array
//   (accumulator, currentValue) => accumulator + currentValue,
//   (0, time1) => 0 + time1
//   (time1 + 0 , time2) => (time1 + 0) + time2
// so the accumalator is the total after adding the current time in the array


// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     0
//   );

// the reduce method  
// const array1 = [1, 2, 3, 4];
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );
// console.log(sumWithInitial);
// // expected output: 10