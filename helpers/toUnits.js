const NO_DECIMALS = 0; // CSS pixels! For heigher density devices must be larger than 0.

export default (size, unit) => {
    return size.toFixed(NO_DECIMALS).toString().concat("", unit);
};