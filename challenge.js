/* 
    Dada la siguiente problemática: ¿puede un número X formarse 
    usando la suma de 2 elementos de un array?

    Ejemplo 1
    Input: nums = [1,4,3,9], requiredSum = 8
    Output: False

    Ejemplo 2
    Input: nums = [1,2,4,4], requiredSum = 8
    Output: True   

    Desarrolle (en pseudo código o su lenguaje de preferencia):
*/




/*  1. Un algoritmo que resuelva el problema asumiendo que la máquina 
    en donde va a correrse el programa tiene recursos infinitos, 
    que el tiempo de ejecución no importa y que lo más
    importante es realizar el desarrollo en el menor tiempo posible. */

function expectsBooleanOutput(nums, requiredSum) {
    try {
        for (let i = 0; i < nums.length; i++) {
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] === requiredSum) return true;
            }
        }
        return false;
    } catch (e) {
        console.error(e)
    }
};


// console.log(expectsBooleanOutput([1,4,3,9], 8));                       // false
// console.log(expectsBooleanOutput([1,2,4,4], 8));                       // true
// console.log(expectsBooleanOutput([10,10,10,10,10,5,10,4,10], 10));     // false
// console.log(expectsBooleanOutput([10,10,5,10,5,10], 10));              // true
// console.log(expectsBooleanOutput([1, 1, 1, 1], 1));                    // false
// console.log(expectsBooleanOutput([1, 1, 2, 1], 2));                    // true
// console.log(expectsBooleanOutput([4, 0, 0, 4], 8));                    // true
// console.log(expectsBooleanOutput([4, 4, 4, 4], 16));                   // false
// console.log(expectsBooleanOutput());                                   // error(undefined)









/*  2. Un algoritmo que resuelva el problema asumiendo que 
    los recursos son un bien preciado, que el tiempo de ejecución 
    Si importa y que el tiempo de desarrollo no es importante. */

const expectsABoolean = (nums = [], requiredSum) => {

    try {
        !Array.isArray(nums) && nums.length || typeof requiredSum !== 'number'
        ? false : undefined
    
        return nums.some((element, index) => nums.slice(index + 1).includes(requiredSum - element));
        
    } catch (e) {
        console.error(e)
    }
}


/* console.log(expectsABoolean([1,4,3,9], 8))                             // false
console.log(expectsABoolean([1,2,4,4], 8))                             // true
console.log(expectsABoolean([1,2,4,4,64,8,5,31,6,61,2,14],17))         // false
console.log(expectsABoolean([1,2,4,4,64,8,5,31,6,61,2,14],19))         // true
console.log(expectsABoolean([1,3],4))                                  // true
console.log(expectsABoolean([],4))                                     // false
console.log(expectsABoolean([1,3]))                                    // false
//console.log(expectsABoolean(5,[1,3]))                                  // error */