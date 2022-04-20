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
    for (let i = 0; i < sArr.length; i += 2) {
        if ((sArr[i] === '(' && sArr[i+1] === ')') || (sArr[i] === '{' && sArr[i+1] === '}') || (sArr[i] === '[' && sArr[i+1] === ']')) {
            continue;
        } else {
            return false;
        }
    }
    return true;
};

module.exports = isValid;
