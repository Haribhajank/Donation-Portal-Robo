import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { useNavigate } from "react-router-dom";
import "./Landing_page.css";
function Landing_page() {
	const [currentYear, setCurrentYear] = useState("");
	const navigate = useNavigate();
	useEffect(() => {
		setCurrentYear(new Date().getFullYear());
	}, []);
	const handleClick = () => navigate("/donation");
	return (
		<div className="h-screen flex flex-col overflow-hidden">
			<div className="h-[10vh]">
				<nav className="navbar">
					<div className="navbar-left">Robotics IITG</div>
					<div className="navbar-center">Payment Portal</div>
					<div className="navbar-right">
						<button className="contact-button">Contact Us</button>
					</div>
				</nav>
			</div>
			<div className="landing__intro h-[90vh]  w-screen flex flex-col ">
				<div className="donation-portal">
					<div className="line1">Robotics Club</div>
					<div className="line2">Donation Portal</div>
				</div>

				<div className="main-content ">
					<div className="donate-box h-4/5 gap-3 m-10">
						<div className="main_content_year w-2/5">
							<div className="year text-left ">{currentYear}</div>
							<div className="w-full flex justify-center">
								<button className="donate-button" onClick={handleClick}>
									Donate Now
								</button>
							</div>
						</div>
						<div className="description text-right">
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
								suscipit, arcu eget convallis vehicula, metus turpis convallis
								odio, vel rutrum eros quam in libero.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Landing_page;
