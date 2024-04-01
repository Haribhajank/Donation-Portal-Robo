import React from 'react'
import "./Payment_page.css"
import * as Yup from 'yup';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import axios from "axios";

function Payment_page() {
	const checkoutHandler = async(values) => {
		// console.log(values.amount);
		const amount = values.amount

		const {data :{ key } } = await axios.get("http://localhost:4000/api/getkey")


		const { data:{order} } = await axios.post("http://localhost:4000/api/checkout", {
			amount
		})
		
		const options = {
            key,
            amount: order.amount,
            currency: "INR",
            name: "IITG Robotics Club",
            description: "Funding for Robotics Club",
            image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iitg.ac.in%2Fstud%2Fgymkhana%2Ftechnical%2Fhome%2FRoboticsHome.html&psig=AOvVaw0fAzW82hATDLbG1Z3THgBj&ust=1712035415833000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKDdxIWjoIUDFQAAAAAdAAAAABAE",
            order_id: order.id,
            callback_url: "http://localhost:4000/api/paymentverification",
            prefill: {
                name: "Ayush Mothiya",
                email: "ayush@gmail.com",
                contact: "9879546210"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#121212"
            }
        };
        const razor = new window.Razorpay(options);
        razor.open();
	}

	const initialValues = {
    amount:"",
    remarks:"",
    };
	const validationSchema = Yup.object({
		amount: Yup.number().required("Amount is required"),
	})

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
						onSubmit={checkoutHandler}
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