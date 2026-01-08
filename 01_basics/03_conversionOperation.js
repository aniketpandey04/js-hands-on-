let score="33abc"

console.log(typeof score) // string
console.log(typeof (score)) // string

let valueInNumber= Number(score)

console.log(valueInNumber) // NaN
console.log(typeof valueInNumber) // number

// NaN = Not a Number  

console.log("=================================")

let viratScore=null

console.log(typeof viratScore) // object
console.log(typeof (viratScore)) // object

let valueIsNumber= Number(viratScore)

console.log(valueIsNumber) //0
console.log(typeof valueIsNumber) // number 

/* convert:

   1) 33 = 33
   2) "33abd" = NaN
   3) null = 0
   4) undefined = NaN
   5) true = 1
   6) false = 0 
   7) " " = false(in boolean)
   8)"aniket"= true (in boolean)
   9) 1= true (in boolean)
   10) 0= false (in boolean) 
   11) 33= "33" (in string and also typeof string)
   12) null = "null" (in string and also typeof string)
   13) undefined = "undefined" (in string and also typeof string)  
   14) true = "true" (in string and also typeof string)
   15) false = "false" (in string and also typeof string)
    
*/