// function that will return a default statement and param can
//be overridden
function saturdayFun(activity = "roller-skate"){
   return `This Saturday, I want to ${activity}!`
}
console.log((saturdayFun("hike")))

//Creating a function expression with anonymouse expression
const mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`
}

    mondayWork()

    // (function (thingToAdd) {
    //     return [function () {return 3 + thingToAdd;},
    //       function () {return 3;},];})(2); 

    // function(2){
    //     return [3+2,3]
    // }
    //=> [5,3]       

    //1. function that returns a function
    //
function wrapAdjective(wrap = "*"){
    console.log("hello")
    return function(innerParam = "special") {
        return `You are ${wrap}${innerParam}${wrap}!`
    }
}