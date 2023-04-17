import { screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MainNav } from "../components";
import { renderWithProviders } from "../utils/test-utils";



describe('MainNav Component', ()=>{

    test("renders Login in and Register buttons for unauthenticated user", () => {
        // arrange      
        
        renderWithProviders(<Router><MainNav /></Router>)    
    
      const loginLink = screen.getByRole("link", { name: "Login" });
      const registerLink = screen.getByRole("link", { name: "Register" });
        // assert
      expect(loginLink).toBeInTheDocument();
      expect(registerLink).toBeInTheDocument();
    });

    test("renders profile and logout buttons for authenticated user", async () => {
         // arrange 
       const initialUser = {
            _id: "6438441ceb3080e604610e90",
            username: "suri",
            email: "test@test.com",
            __v: 0
        }

          const { getByText} = renderWithProviders(<Router><MainNav /></Router>, {
            preloadedState: {
                userState:{user:initialUser} 
            }
          })
        
        const profileLink = getByText(/Profile/i);
        const logoutBtn = getByText(/logout/i);
        // assert
        expect(profileLink).toBeInTheDocument();
        expect(logoutBtn).toBeInTheDocument();
      });

    
})
