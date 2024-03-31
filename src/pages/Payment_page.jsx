import React from 'react'
import "./Payment_page.css"
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
function Payment_page() {
  const initialValues = {
    amount:"",
    remarks:"",
  };
	const validationSchema = Yup.object({
		amount: Yup.number().required("Amount is required"),
	})
	const handleSubmit = (values) => {
		console.log(values);
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
							<div>
								<p>Donation Amount</p>
								<Field name="amount" type="number" />
								<ErrorMessage name="amount" component={"div"} className="error" />
							</div>
							<div>
								<p>Any remarks</p>
								<Field name="remarks" type="text" />
							</div>
							<div className="flex w-full justify-end">
								<button
									className="border-2 border-black w-[20%] py-2"
									type="submit"
								>
									Pay Now
								</button>
							</div>
						</Form>
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default Payment_page