const comparator = (a, b) => {
    const dayA = parseInt(a[0].substring(8, 10));
    const dayB = parseInt(b[0].substring(8, 10));
    return dayA - dayB;
}

export default comparator