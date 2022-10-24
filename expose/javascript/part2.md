1. What will happen at line 12 and why? If the code causes an error, explain why.
   "i" is visible after loop since var has no block scope. Thus line 12 excutes normally and print out 3.

2. What will happen at line 13 and why? If the code causes an error, explain why. 
   "discountedPrice" is visible after loop since var has no block scope. Thus line 13 excutes normally and print out 150. 

3. What will happen at line 13 and why? If the code causes an error, explain why.
   "finalPrice" is visible after loop since var has no block scope. Thus line 13 excutes normally and print out 150. 

4. What will this function return? Give a brief explanation why. If the code causes
   an error, explain why.
   The function returns the array discounted = [50,100,150] since there are no error executions prior to the return line, the function can return the discounted array. 

5. What will happen at line 12 and why?  If the code causes an error, explain why. 
    It is an error. Because let has code block so after the loop, the code line 12 won’t see the i, since i is a part of loop, i becomes undefined. 

6. What will happen at line 13 and why? If the code causes an error, explain why.
   It is an error. Because let has code block so after the loop, the code line 12 won’t see the discountedPrice, since discountedPrice is defined inside the loop scope, discountedPrice becomes undefined. 

7. What will happen at line 14 and why? If the code causes an error, explain why.
   It will print out 0, the initial value of finalPrice. Because line 14 is after the loop, where finalPrice is updated accordingly and let has code blocks thus any changes are made inside the loop stayed inside the loop. 

8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
   The function returns the array discounted = [50,100,150]. Because the discounted is defined before the loop so even after the loop finishes it is defined and any updates inside the loop still be stored to discounted. 

9. What will happen at line 11 and why? If the code causes an error, explain why.
    It is an error. Because let has code block so after the loop, the code line 11 won’t see the i, since i is a part of loop, i becomes undefined.

10. What will happen at line 12 and why? If the code causes an error, explain why.
    It will print out 3, the length of the prices array which is defined at the start of the function.

11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
    The function will return an empty discounted array because it is defined as a constant variable using const at the beginning of the function. 

12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. A. ‘3’ + 2 -> '32' 
        Explanation: 2 is converted to string and thus concatenated to string '3'

    B. ‘3’ - 2 -> 1
        Explanation: using substraction mark makes '3' is converted to a number thus 3 - 2 = 1

    C. 3 + null -> 3
        Explanation: null is converted to 0 thus 3 + 0 = 3

    D. ‘3’ + null -> '3null'
        Explanation: because the first operand '3' is a string, null got converted to a string also thus '3' is concatenated with string null and we have the result '3null'

    E. true + 3 -> 4
        Explanation: true is converted to 1 as a number thus 1 + 3 = 4

    F. false + null -> 0
        Explanation: false and null are converted to 0 as number,
        thus 0 + 0 = 0

    G. '3' + undefined -> '3undefined'
        Explanation: because the first operand '3' is a string, undefined got converted to a string also thus '3' is concatenated with string undefined and we have the result '3undefined'

    H. '3' - undefined -> NaN
        Explanation: using substraction mark makes '3' is converted to a number and undefined is converted to NaN thus 3 - NaN = NaN 

14. A. ‘2’ > 1 -> true
        Explanation: 2 is converted to a number thus 2 > 1 is true. 

    B. ‘2’ < ‘12’ -> false
        Explanation: string '2' is after string '1' in the “lexicographical” order thus the above comparision gives false as the result

    C. 2 == ‘2’ -> true
        Explanation: string '2' becomes number 2 thus 2 == 2 is true 

    D. 2 === ‘2’ -> false
        Explanation: there is no type conversion here since we are using ===. Thus the two operands are different types which immediately gives false result

    E. true == 2 -> false
        Explanation: true is converted to number 1 and thus 1 == 2 is false 

    F. true === Boolean(2) -> true
        Explanation: Boolean() converts number 2 to true thus true == true is true

15.  == checks equality with type conversion thus  two variables have two different types, one will be converted to the other and then compare. While === checks the equality without type conversion thus 2 and '2' are two different types, it immediately returns false. 

16. part2-question16.js 
    
17.  The result is we have the newArr as [2,4,6]. Inside the function modifyArray that takes in two arguments, the array [1,2,3] and the function doSomething, the loop will executed. At line 4, callback will call the doSomething function that gives us the result 1*2=2 and then it is pushed to the newArr. The event continues untill the loop finishes we then have the final array newArr [2,4,6]. 

18. part2-question18.js 
    
19.  The program prints out 1 first and 4 next, 3 third and waits for 1 second, then finally prints 2. 
