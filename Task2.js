const solution = (nums) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) return true;
        map[nums[i]] = true;
    }
    return false;
}
console.log(solution([1, 2, 3]))