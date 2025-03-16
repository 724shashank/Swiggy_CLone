import { render,screen } from "@testing-library/react"
import RestaurantCard,{PromotedCard} from "../components/ResCard"
import MockData from "../mocks/ResCardMock.json"
import "@testing-library/jest-dom"

it("Should render Restaurent Component with props data",()=>{
render(<PromotedCard resData={MockData} />); //Ignoring the CSS file 
const result = screen.getByText("Promoted")
expect(result).toBeInTheDocument();
})

it("Should render Restaurent Component with props data",()=>{
    render(<RestaurantCard resData={MockData} />); //Ignoring the CSS file 
    const result = screen.getByText("McDonald's")
    expect(result).toBeInTheDocument();
    })


