import { fireEvent } from "@testing-library/react"; 
import { CartItemProps } from "./CartItem"; 
import { renderWithRouter } from "../testHelpers";

jest.mock("./CartItem", () =>({
    CartItem: ({ product }: CartItemProps) =>{
        const { name, price, image } = product 
        return (
            <div>
                {name} {price} {image}
            </div>
        )
    }
}))

describe("Cart", () =>{
    describe("without products", () =>{
        const stubCartHook = () => ({
            products: [], 
            removeFromCart: () => {}, 
            totalPrice: () => 0
        })

        it("renders empty cart message", () =>{
            const { container } = renderWithRouter(() =>(
                <Cart useCartHook={stubCartHook}/>
            ))

            expect(container.innerHTML).toMatch(
                "Your cart is empty."
            )
        })

        describe("On Back to main page click", () =>{
            it("redirects to '/'", () =>{
                const {
                    getByText, 
                    history
                } = renderWithRouter(() => (
                    <Cart useCartHook={stubCartHook}/>
                ))

                fireEvent.click(getByText("Back to main page.")) 

                expect(history.location.pathname).toBe("/")
            })
        })

        describe("with products", () =>{
            // TODO: Later
        })
    })
})