/*
*
 * @param {string} s
 * @return {boolean}
 * 
 * @description Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
 */
const isValid = function (s) {
    const sArr = s.split('');
    const objBracketsCounter = {
        "{}": 0,
        "[]": 0,
        "()": 0,
    }
    for (let i = 0; i < sArr.length; i += 1) {
        if (sArr[i] === "{"){
            objBracketsCounter["{}"]++;
        } else
        if (sArr[i] === "}"){
            objBracketsCounter["{}"]--;
        } else
        if (sArr[i] === "("){
            objBracketsCounter["()"]++;
        } else
        if (sArr[i] === ")"){
            objBracketsCounter["()"]--;
        } else
        if (sArr[i] === "["){
            objBracketsCounter["[]"]++;
        } else
        if (sArr[i] === "]"){
            objBracketsCounter["[]"]--;
        } else {
            return "The input does not comply with the rules";
        }

        if (Object.values(objBracketsCounter).some(x => x < 0)) {
            return false;
        }
    }
    console.log(objBracketsCounter);
    if (Object.values(objBracketsCounter).every(x => x === 0)){
        return true;
    } else {
        return false;
    }
};

module.exports = isValid;
