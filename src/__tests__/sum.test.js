import { sum } from "../components/sum";

test("Sum should Perform the addition of the number",()=>{
const result = sum(2,4);

//Assertion
 
expect(result).toBe(6)

});

