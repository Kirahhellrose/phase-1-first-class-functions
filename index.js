//Returns a Function
function receivesAFunction(a){
return (a());
}

//Returns A Named Function
function returnsANamedFunction(){
    function theLab() {return ""}
    return theLab;
}

//Return An Anonymous Function
function returnsAnAnonymousFunction(){
    return function(){}
}