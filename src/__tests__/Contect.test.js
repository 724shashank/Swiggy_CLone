import { render,screen } from "@testing-library/react"
import Contact from "../components/Contact"
import "@testing-library/jest-dom"

describe("Test Cases grouped for Contact-Us page",()=>{

    test("Contact Us Should Load Properly",()=>{
        render(<Contact />);
        
        const heading = screen.getByRole("heading")
        
        expect(heading).toBeInTheDocument();
        
        });
        
        test("The Component should load the 2 input tags",()=>{
        
            render(<Contact />);
            //Querrying
            const input = screen.getAllByRole("textbox")
            //console.log(input.length);
            expect(input.length).toBe(2);
        
        })
        
        test("The Component should load input tag by placeHolder name ",()=>{
        
            render(<Contact />);
            //Querrying
            const input = screen.getAllByPlaceholderText("name")
            //console.log(input.length);
            expect(input.length).toBe(1);
        
        })

})


