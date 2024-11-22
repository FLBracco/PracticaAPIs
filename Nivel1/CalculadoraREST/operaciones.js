function suma(a, b){
    return parseInt(a) + parseInt(b);
}

function resta(a, b){
    return parseInt(a) - parseInt(b);
}

function multi(a, b){
    return parseInt(a) * parseInt(b)
}

function div(a, b){
    const divisor = parseInt(b);
    if(divisor === 0){
        throw new Error('No se puede dividir en cero');
    }
    return parseInt(a) / divisor;
}

export {
    suma,
    resta,
    multi,
    div
}