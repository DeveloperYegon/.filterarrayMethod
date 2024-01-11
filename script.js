//Array method====  .filter()
            //Extracting numbers divesible by 2
const numbers=[1,2,3,4,5,6,7]

const evennumbers=numbers.filter(item=>item%2==0);
console.log(evennumbers);

            //Identifying the adults and children in an array of objects
const pple=[{name:"Gideon", age:21},{name:"Evans", age:18},{name:"Ezra", age:6}];

const over20=pple.filter(item=>item.age > 18);
console.log(over20);

            //removing duplicate itemsin an array

const repeatedNumbers = [1, 2, 1, 4, 3, 3, 5, 5, 2, 3, 4, 3, 3];
const distinctNumbers = repeatedNumbers.filter((item, index, arr) => {
    return arr.indexOf(item) === index;
});
console.log(distinctNumbers);
