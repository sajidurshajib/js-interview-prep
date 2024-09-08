function makeFunc() {
    // lecxical scopping
    const name = 'Sajidur';

    function displayName() {
        console.log(name);
    }

    return displayName;
}

const myFunc = makeFunc();

myFunc();

function makeAdder(x) {
    return function (y) {
        return x + y;
    };
}

const add = makeAdder(5);
console.log(add(2));
