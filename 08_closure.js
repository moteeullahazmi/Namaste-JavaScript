// USE OF CLOSURE
// -- Module Design Pattern
// -- Currying
// -- Function like once
// -- memoize
// -- maintaining state in async world
// -- setTimeouts
// -- Iterators
// and many more


//  CLOSURE -: function along with lexical scope bundle together form a closure.

function x(){
    var a =6;
    function y(){
        console.log(a)
    }

    return y;
}

var z = x();
console.log(z())