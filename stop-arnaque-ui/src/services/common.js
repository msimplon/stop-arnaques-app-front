const validateEmailError = function (email) {
    const pattern = /^\w+([\.-]?\w+)*@/;
    if (
        pattern.test(email) &&
        (email.endsWith("@gmail.com") ||
            email.endsWith("@hotmail.com"))
    ) {
        return true;
    }
}

export {
    validateEmailError
}