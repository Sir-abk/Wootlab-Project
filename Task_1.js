function evenOddSum(arr)
{
// Declaring the even and odd variables
    let even = 0;
    let odd = 0;
// looping through the provided arr in the parameter
    for (let i = 0; i < arr.length; i++)
    {
// checking if i is even 
        if (i % 2 === 0) 
        {even += arr[i];}
        else
//  checking if i is odd
        {odd += arr[i];}
    }
// returning the sum of the even and odd as an array 
    return [even, odd];
 
}
    let arr = [ 1, 2, 3, 4, 5, 6 ];
    console.log("Sum of even numbers"+evenOddSum()[0]);
    console.log("Sum of odd numbers"+evenOddSum()[1]);