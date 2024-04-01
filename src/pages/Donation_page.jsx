// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Donation_page.css";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

function Donation_page() {
	const initialValues = {
		donationType: "open",
		name: "",
		relation: "",
		designation: "",
		email: "",
		number: "",
	};
	const validationSchema = Yup.object({
		name: Yup.string().required("Name is required"),
		email: Yup.string()
			.email("Invalid email address"),
	});
	const navigate = useNavigate();


  const handleSubmit = async (values, { setSubmitting }) => {
    console.log("Form Submitted",values);
    try {
      // Disable the submit button while form is submitting
      setSubmitting(true);
  
      // Make POST request to server's '/donations' route
      const response = await fetch('https://donation-portal-robo-backend.onrender.com/donations', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error('Failed to submit form data');
      }
  
      // Navigate to the next page
      navigate('/payment');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      // Re-enable the submit button after form submission is complete
      setSubmitting(false);
    }
  };
  
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
				<div className="donation_form_header">
					<p>Personal Information</p>
					<p>Payment</p>
					<p>Confirmation</p>
				</div>
				<div className="donation_form__entry grow">
					<Formik
						initialValues={initialValues}
						validationSchema={validationSchema}
						onSubmit={handleSubmit}
					>
						<Form className="flex w-full flex-col h-full gap-y-8">
							<div className="flex gap-[2%]">
								<div>01</div>
								<div>
									<p>Want to keep the donation open or anonymous?</p>
									<div className="flex flex-wrap gap-10 my-2">
										<label
											className="form_radio_label cursor-pointer"
											htmlFor="open"
										>
											<Field
												name="donationType"
												type="radio"
												value="open"
												id="open"
											/>
											<span className="radio_text">Open</span>
										</label>
										<label
											className="form_radio_label cursor-pointer"
											htmlFor="anonymous"
										>
											<Field
												name="donationType"
												type="radio"
												value="anonymous"
												id="anonymous"
											/>
											<span className="radio_text">Anonymous</span>
										</label>
									</div>
								</div>
							</div>
							<div className="flex gap-[2%]">
								<div>02</div>
								<div>
									<p>What is your name?</p>
									<Field name="name" className="" type="text" />
									<ErrorMessage
										name="name"
										component={"div"}
										className="error"
									/>
								</div>
							</div>
							<div className="flex gap-[2%]">
								<div>03</div>
								<div>
									<p>Relation with IITG or Robotics club</p>
									<Field name="relation" className="" type="text" />
								</div>
							</div>
							<div className="flex gap-[2%]">
								<div>04</div>
								<div>
									<p>Current designation</p>
									<Field name="designation" className="" type="text" />
								</div>
							</div>
							<div className="flex justify-between">
								<div className="flex gap-[5%]">
									<div>05</div>
									<div>
										<p>Email</p>
										<Field name="email" className="" type="email" />
									</div>
								</div>
								<div className="flex gap-[5%]">
									<div>06</div>
									<div className="min-w-fit">
										<p>Phone Number</p>
										<Field name="number" className="" type="number" />
										<ErrorMessage
											name="number"
											component={"div"}
											className="error"
										/>
									</div>
								</div>
							</div>
							<div className="flex w-full justify-end">
								<button
									className="border-2 border-black w-[20%] py-2"
									type="submit"
								>
									Next
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default Donation_page;
