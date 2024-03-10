


export const validarCI = ci => {
    return (
        (parseInt(ci.slice(0, 2)) >= 0 && parseInt(ci.slice(0, 2)) <= 99) &&
        (parseInt(ci.slice(2, 4)) >= 0 && parseInt(ci.slice(2, 4)) <= 12) &&
        (parseInt(ci.slice(4, 6)) > 0 && parseInt(ci.slice(4, 6)) <= 31)
    );
}
