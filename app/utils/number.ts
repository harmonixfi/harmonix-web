export const toFixedNumber = (value: number, digit = 2) => floorToNDecimals(value || 0, digit);

export const withCommas = (input: number | string = '') => {
    if (!input && input !== 0) return String(input);

    const [integerPart, decimalPart] = String(input).split('.');

    const formattedInteger = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    return decimalPart ? `${formattedInteger}.${decimalPart}` : formattedInteger;
};

export const floorToNDecimals = (num: number, decimals: number) => {
    const factor = Math.pow(10, decimals > 4 ? 4 : decimals);
    return Math.floor(num * factor) / factor;
};