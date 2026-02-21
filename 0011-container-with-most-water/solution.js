/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
    let maxWater = 0;
    
    while (left < right) {
        // Calculate current area
        const width = right - left;
        const minHeight = Math.min(height[left], height[right]);
        const currentArea = width * minHeight;
        
        // Update max if needed
        maxWater = Math.max(currentArea, maxWater);   
        
        // Move the pointer pointing to the shorter line
        if(height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        
    }
    return maxWater;
};