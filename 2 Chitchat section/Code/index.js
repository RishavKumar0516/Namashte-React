// Arrow function

// How does javascript knows about javascript engine?

// function keyword is given to us and it is recognized by javascript engine
// As program execute line by line, token by token letter by letter.

// function keyword excepts a function name, function body
// function name is given to us
// function body is given to us

// data-structure used for the storing memory is memory heap

// function x() {
//     const a = 10;
// }

// x();  //function execution context is created

// anonymous function

// var x = function () {
//     const a = 10;
// }

// in ES6

const fn = () => {
    const a = 10;
}

const obj = {
    fn: function () {
        console.log(this); //this will output the object itself. when this is used inside the anonymus function it points to the object itself
    },

    fn2: () => {
        console.log(this); //this will output the window object
    }

}

obj.fn(); //if function is the anonymus function then this will point to the object for which the function is called

obj.fn2(); //if function is the arrow function then this will point to the window object

function x() {   //this all will print the window object, as it doesn't matter where the function is called, it will matter how it is called.
    console.log(this);

    function y() {
        console.log(this);

        function z() {
            console.log(this);
        }
        z();
    }

    y();
}

x();
// x() or x.call(this) both are same and used alternatively