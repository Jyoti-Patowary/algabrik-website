"use client"

import { useFormik } from "formik";
import * as Yup from "yup";
import { CustomHeader, CustomSubtitle } from "../CustomHeader";
import { motion } from 'framer-motion';

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  email: Yup.string().email("Invalid email address").required("Email is required"),
  company: Yup.string().required("Company name is required"),
  message: Yup.string().required("Message is required"),
});

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      company: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form data:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <section className="container md:w-[1160px] mx-auto mt-32 md:mb-28 p-8 flex flex-col md:flex-row font-plus-jakarta justify-center items-start gap-[98px]">
      <div className="flex flex-col text-center md:text-left gap-[20px] md:w-[568px]">
        <CustomHeader
          className="md:text-[56px] font-bold flex flex-col gap-0"
          text={
            <>
              <span>We’d love to show </span>
              <span>you around!</span>
            </>
          }
        />
        <CustomSubtitle
          className=""
          text="Whether you’re looking to streamline your loan processes, enhance borrower experiences, or explore our AI-powered, cloud-native solutions, our team is here to help. Connect with us to start your journey toward a smarter, more efficient lending ecosystem."
        />
      </div>
      <div>
      <div className="container relative opacity-[30%] z-[-1]">
      <motion.div
        className="absolute -top-9 left-1 md:left-[96px] bg-gradient-to-tr from-[#66B3B0] to-[#149994] rounded-full md:w-[461.73px] md:h-[439.68px] blur-[80px]"
        animate={{
          rotate: 360, // Rotate 360 degrees
        }}
        transition={{
          duration: 20, // Adjust speed here
          repeat: Infinity, // Infinite loop
          ease: "linear", // Continuous rotation
        }}
      />
      <motion.div
        className="absolute top-20 md:left-[20px] bg-gradient-to-tl from-[#1C8DEA] to-[#195BD7] rounded-full md:w-[196.91px] md:h-[280.03px] blur-[100px] -z-10"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-56 bg-[#BE95FF] rounded-full md:w-[526.24px] md:h-[539.68px] blur-[100px] z-[-1]"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
      <form
        onSubmit={formik.handleSubmit}
        className="w-[362px] md:w-[518px]  h-[716px] md:h-[512px] bg-white/90 backdrop-blur-sm rounded-[24px] p-8"
      >
        <div className="flex flex-col gap-[24px]">
          <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-[#5D5A88] text-[14px] font-bold">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Carter"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border rounded-[8px] p-2"
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 text-sm">{formik.errors.name}</p>
              )}
            </div>
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-[#5D5A88] text-[14px] font-bold">Phone</label>
              <input
                type="text"
                name="phone"
                placeholder="(123) 456 - 7890"
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border rounded-[8px] p-2"
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 text-sm">{formik.errors.phone}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-[24px]">
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-[#5D5A88] text-[14px] font-bold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@email.com"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border rounded-[8px] p-2"
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm">{formik.errors.email}</p>
              )}
            </div>
            <div className="flex flex-col gap-[12px] w-full">
              <label className="text-[#5D5A88] text-[14px] font-bold">Company</label>
              <input
                type="text"
                name="company"
                placeholder="Facebook"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="border rounded-[8px] p-2"
              />
              {formik.touched.company && formik.errors.company && (
                <p className="text-red-500 text-sm">{formik.errors.company}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-[12px]">
            <label className="text-[#5D5A88] text-[14px] font-bold">Message</label>
            <textarea
              name="message"
              placeholder="Please type your message here..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="border rounded-[8px] p-2 h-[142px] shadow-[0px_0px_32px_0px_rgba(0, 0, 0, 0.08)]"
            />
            {formik.touched.message && formik.errors.message && (
              <p className="text-red-500 text-sm">{formik.errors.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#1C8DEA] w-full text-white md:text-[16px] font-bold rounded-[31px] p-4"
          >
            Get in touch
          </button>
        </div>
      </form>
      </div>
    </section>
  );
}
