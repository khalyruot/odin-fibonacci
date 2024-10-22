function fibs(arrIndex) {
    const fibs_array = [0, 1]; 
    

    // Generate Fibonacci numbers up to the length of arrIndex
    for (let i = 2; i < arrIndex; i++) {
       const a = fibs_array[i-2];
       const b = fibs_array[i-1];
       fibs_array.push(b+a);
    }

    console.log(fibs_array);
    return fibs_array[arrIndex-1]; // Return the Fibonacci number at the given index
}

// Example usage
console.log("fibs: "+ fibs(8)); // This will return the 5th Fibonacci number
//[0, 1, 1, 2, 3, 5, 8, 13]

