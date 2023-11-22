function pow (num, degree) {
    if (degree === 0) {return 1};
    if (degree === 1) {return num};
    return num *= pow(num, --degree)
};

console.log(pow(2,8));