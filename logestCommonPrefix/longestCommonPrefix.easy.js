/*
*
 * @param {string[]} strs
 * @return {string}
 *
 * @description {Write a function to find the longest common prefix string amongst an array of strings.
                If there is no common prefix, return an empty string "".}
 * 
 * Example 1 
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 * 
 *
 * Example 2
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 *
 */

const longestCommonPrefix = function (strs) {
    const objPrefixCounter = {};
    for (let i = 0; i < strs.length; i++) {
        for (let j = 1; j <= strs[i].length; j++) {
            let prefix = strs[i].slice(0, j);
            if (!objPrefixCounter[prefix]) {
                objPrefixCounter[prefix] = 1;
            } else {
                objPrefixCounter[prefix]++;
            }
        }
    }
    // console.log(objPrefixCounter);
    const values = Object.values(objPrefixCounter);
    const keys = Object.keys(objPrefixCounter);
    const maxValue = Math.max(...values);
    if (maxValue < 2) {
        return "";
    }
    const keysMax = keys.filter((key, index) => values[index] === maxValue);
    const longest = keysMax.reduce((a, b) => a.length > b.length ? a : b);
    return longest;
};

longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"]);

module.exports = longestCommonPrefix;