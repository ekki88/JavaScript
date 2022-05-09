

function add(a,b){
    return a+b;
}

function surprise (operator) {
    const result = operator(2,3);
    console.log(result);
}

surprise (add);
