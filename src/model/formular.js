function validateEmail(tmpEmail) {
    if (tmpEmail.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )) {
        return {valido: false, message: ''};
    } else {
        return {valido: true, message: 'Zadajte platný e-mail'};
    }
};

export {validateEmail};