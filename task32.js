// Nesting for loops

// We are going to use nested for loops within the function here to multiply all the nested arrays.

function multiplyArr(arr) {
  let product = 1; // initializing the product to 1 is essential for correctly calculating the product of the numbers in the multidimensional array. This variable will store the product of all the numbers in the array.
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

let product = multiplyArr([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]); // Function call here, passed in a multidimensional array as value. (Basically an array with arrays inside the array).

console.log(product);

/* Explanation from GPT:

Yes, initializing the product variable to a value of 1 is essential for correctly calculating the product of the numbers in the
 multidimensional array. Here's why:

When calculating the product of a list of numbers, the initial value matters. 
If you initialize product to 0, for example, then multiplying any number by 0 will always result in 0, 
and you won't get the correct product. By starting with a value of 1, 
you ensure that the multiplication starts with a neutral value that won't affect the final product.

Let's illustrate this with an example:

Suppose you initialize product to 0: 

Now, let's consider an array like [[1, 2], [3, 4], [5, 6, 7]]. When you start multiplying with a product value of 0, 
the result of the entire calculation will be 0, regardless of the actual values in the array:

product = 0 * 1 = 0
product = 0 * 2 = 0
product = 0 * 3 = 0

By initializing product to 1, you ensure that the first multiplication doesn't affect the result:

product = 1 * 1 = 1
product = 1 * 2 = 2
product = 2 * 3 = 6
...
So, initializing product to 1 is a crucial step to correctly calculate the product of the numbers in the array. 
It provides the correct starting point for the multiplication process.


 */
