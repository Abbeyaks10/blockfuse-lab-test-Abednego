def TargetSum(nums, target):
    # Create a dictionary to store indices
    DeFounders_num_dict = {}
    
    # Iterate over the array
    for i, num in enumerate(nums):
        # Calculate the complement
        complement = target - num
        
        # Check if complement is in dictionary
        if complement in DeFounders_num_dict:
            # Return complement and current number
            return [DeFounders_num_dict[complement], i]
        
        # Add current number and index to dictionary
        DeFounders_num_dict[num] = i
    
    # Print a message saying no solution was found
    print('No solution was found')
    return []

# Test the function with the input list and target value
print(TargetSum([-1, -2, -3, -4, -5], -8))
print(TargetSum([0, 4, 3, 0], 0))
#ours Faithfully @De founder