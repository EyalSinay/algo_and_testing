/*
*
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
 * @description {Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]}
 */

const twoSum = function (nums, target) {
    const arrSum = [];
    for (let index1 = 0; index1 < nums.length; index1++) {
        const index2 = nums.findIndex((num, ind) => num + nums[index1] === target && ind !== index1);
        if (index2 > -1) {
            return [index1, index2];
        }
    }
    return "Not found";
};


module.exports = twoSum;