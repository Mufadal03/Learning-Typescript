//tuple restrict you to break the order 
let database: [number, string, boolean] = [10, 'muffi', false]
// if we write in different order [number , boolean , string] or [string,boolean,number] ---> throws ERROR

//UNION 
let store: string | number = 1
// store=false  ---> Type boolean ---> Error
// store can be string or number other type will throw error

let unionArr: (string | number)[] = ["1", 12]
/// this is how we can use string or number mix in our unionArr

