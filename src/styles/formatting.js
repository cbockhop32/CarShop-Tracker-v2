
export function numberWithCommas(num) {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


export function isNum(num) {
    return /^\d+$/.test(num)
}
