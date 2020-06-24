export function formatAmount ( amount ) {
    let res = amount;
    if (res >= 1000 && res < 1000000) {
        res /= 1000;
        res = Math.round((res + Number.EPSILON) * 10) / 10;

        res += 'K';
    }

    return res;
}