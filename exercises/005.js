/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  // your code here
  let formattedData = [];
  //FROM THE WEB/RESEARCH
  //   for (let i = 0; i < array.length; i++) {
  //     // console.log(array[i]);
  //     let tempObj = Object.fromEntries(array[i]);
  //     // console.log(tempObj);
  //     formattedData.push(tempObj);
  //   }
  //FROM THE SOLUTIONS VIDEO
  for (let i = 0; i < array.length; i++) {
    let employeeArr = array[i];
    let employeeObj = {};
    for (let j = 0; j < employeeArr.length; j++) {
      let keyValueArray = employeeArr[j];
      let employeeKey = keyValueArray[0];
      let employeeValue = keyValueArray[1];
      employeeObj[employeeKey] = employeeValue;
    }
    formattedData.push(employeeObj);
    // console.log(formattedData);
  }
  return formattedData;
}
