import React from "react";
import "./App.css";
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom";
import Landing_page from "./pages/Landing_page";
import Donation_page from "./pages/Donation_page";

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
	]);
	return <RouterProvider router={router} />;
}

export default App;
