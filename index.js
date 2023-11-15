// This is an implementation of insertion sort

function insertionSort(arr) {
    // Loop through the array starting at the second index
    for(let index = 1; index < arr.length; index++) {
        // Your position will initally be your index
        let position = index;
        // Store the item at that position temporarily
        let tempValue = arr[position];

        // For as long as position is greater than zero and
        // the item at the index below the current index is
        // below greater than the temporary value we stored
        while(position > 0 && arr[position - 1] > tempValue) {
            // Swap them
            arr[position] = arr[position - 1];
            // Shift your position
            position = position - 1;
        }
        // Store your temp value in its new spot
        arr[position] = tempValue;
    }
    return arr; 
}