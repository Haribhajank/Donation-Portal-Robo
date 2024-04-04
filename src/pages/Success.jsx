import React from "react";
import { useSearchParams } from "react-router-dom";
import "./Donation_page.css";

const Success = () => {
	const searchQuery = useSearchParams()[0];

	const referenceNum = searchQuery.get("reference");

	return (
		<div className="h-screen w-screen">
			<div className="h-[10vh] z-50">
				<nav className="navbar">
					<div className="navbar-left">Robotics IITG</div>
					<div className="navbar-right">
						<button className="contact-button">Contact Us</button>
					</div>
				</nav>
			</div>
			<div className="donation_form h-[90vh] ">
				<div className="donation_form_header mb-10">
					<p>Personal Information</p>
					<p>Payment</p>
					<p>Confirmation</p>
				</div>
				<div className="donation_form__entry grow w-full flex flex-col items-center gap-y-8">
					<div>Thank You!</div>
					<div>Your reference number is {referenceNum}</div>
					<div>
						<img src="src/assets/Group 2.png" alt="" />
					</div>
					<div>
						We have got your donation, we really appreciate for this and we are
						grateful for your support.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Success;
