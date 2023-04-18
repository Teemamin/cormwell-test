import { renderWithProviders } from "../utils/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import { Landing } from "../pages";


test("renders landing page to logged in user", async () => {
    // arrange 
  const initialUser = {
       _id: "6438441ceb3080e604610e90",
       username: "suri",
       email: "test@test.com",
       __v: 0
   }

     const { getByTestId} = renderWithProviders(<Router><Landing /></Router>, {
       preloadedState: {
           userState:{user:initialUser} 
       }
     })
   
   const userProfileEmail = getByTestId('email')
   const userProfileUsername = getByTestId('username')
   // assert
   expect(userProfileEmail).toBeInTheDocument();
   expect(userProfileUsername).toBeInTheDocument();
 });

