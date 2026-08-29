let s ='MCMXCIV'
let nextValue = 1;
let result = 0;
function getNumber(romanNumeral){
    if (romanNumeral === 'I'){
    return 1;}
    if (romanNumeral === 'V'){
    return 5;}
    if (romanNumeral === 'X'){
    return 10;}
    if (romanNumeral === 'L'){
    return 50;}
    if (romanNumeral === 'C'){
    return 100;}
    if (romanNumeral === 'D'){
    return 500;}
    if (romanNumeral === 'M'){
    return 1000;}
}

for(let currentValue = 0;currentValue < s.length; currentValue ++){
    let firstDigit =(getNumber(s[currentValue]));
    let secondDigit =(getNumber(s[nextValue]));
if (secondDigit > firstDigit){
    result = result + secondDigit - firstDigit;
    nextValue += 2;
    currentValue ++;
}else {
    result = result + firstDigit;
    nextValue ++
}
}

console.log(result);
