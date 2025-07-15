 function twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === target) {
                    return [i, j]; 
                }
            }
        }
 }
 let nums=[3,5,6,2,1]
 console.log(twoSum(nums,4));