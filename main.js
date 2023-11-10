function sum(a) {

    return function(b) {
        return a + b;
    };

}

alert( sum(1)(2) );
alert( sum(2)(3) );
alert( sum(10)(10) );