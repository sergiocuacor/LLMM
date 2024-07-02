function twoSum(nums, target) {
    const map = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const numeroNecesario = target - nums[i];
        
        if (map.has(numeroNecesario)) {
            return [map.get(numeroNecesario), i];
        }
        
        map.set(nums[i], i);
    }
    
    throw new Error("No two sum solution");
}


function testTwoSum() {
    const nums = [2, 7, 11, 15];
    const target = 9;

    try {
        const result = twoSum(nums, target);
        console.log(`Índices: ${result[0]}, ${result[1]}`);
    } catch (error) {
        console.log(error.message);
    }
}

testTwoSum();