function welcomeMessage(name, greedTime) {
    greedTime(name);
}
//we can pass variable to a function
const myName = 'Tom hanks';

//we can pass array to a function
// const myName = ['Tom hanks', 'tom Brady', 'tom cruise'];

//we cann pass object to a function
// const myName = { name1: 'Tom hanks', name2: 'tom Brady', name3: 'tom cruise' };

//we can pass function to a function. the function which we pass to a function is called callbackfunction.
function greedMorning(name) {
    console.log('Good morning', name);
}
function greedNoon(name) {
    console.log('Good noon', name);
}
function greedEvening(name) {
    console.log('Good evening', name);
}

welcomeMessage('Tom hank', greedMorning);
welcomeMessage('Tom brady', greedNoon);
welcomeMessage('Tom curise', greedEvening);