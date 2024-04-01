import React from "react";
import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import Donation_page from "./pages/Donation_page";
import Payment_page from "./pages/Payment_page";
import Success from "./pages/Success";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Landing_page />,
		},
		{
			path: "/donation",
			element: <Donation_page />,
		},
		{
			path:"/payment",
			element:<Payment_page />
		},
		{
			path:"/paymentsuccess",
			element:<Success />
		}
	]);
	return <RouterProvider router={router} />;
}

export default App;
