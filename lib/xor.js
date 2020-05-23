export default (a, b) => {
    return ((a || b) && (!a || !b)) ? true : false;
};