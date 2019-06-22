var user = {};
user.name = "John";
user.surname = "Mike";
user.name = "Peter";
delete user.name;

var fruit = {
apple: 20,
pear: 20,
peach: 10
};

var count = 0;
for(var value in fruit){
  count = count + fruit[value];
}
console.log(count);
