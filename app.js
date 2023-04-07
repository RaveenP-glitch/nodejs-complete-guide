// function greet(name){
//     console.log(`Hello ${name}`);
// }

// const timeoutId = setTimeout(greet, 2000, 'Raveen')
// // clearTimeout(timeoutId);

// setInterval(function run(){
//     console.log('Hello')
// }, 1000)



// setTimeout(function run(){
//     console.log('Hello');
//     setTimeout(run, 1000)
// }, 1000)

function greet(name){
    console.log(`Hello ${name}`);
}

function greetMe(greetFn){
    const name = 'Raveen'
    greetFn(name)
}

greetMe(greet)