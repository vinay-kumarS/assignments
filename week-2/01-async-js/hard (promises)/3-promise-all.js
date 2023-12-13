/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */
function wait1(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("one second")
        } , t * 1000);
    });
}

function wait2(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("two second")
        } , t * 1000);
    });
}

function wait3(t) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("three second")
        } , t * 1000);
    });
}

async function calculateTime(t1 , t2 , t3) {
    let d1 = new Date();
    let start = d1.getTime();
    const p1 = wait1(t1);
    const p2 = wait2(t2);
    const p3 = wait3(t3);
    
    let end;
    await Promise.all([p1 , p2 , p3]).then(function(values){
        d1 = new Date();
        end = d1.getTime();
    });
    
    return (end - start);
    
}

module.exports = calculateTime;
