// import React, { useState } from "react";
// import { ErrorMessage, Field, Form, Formik } from "formik";
// import dataSchema from "../../schemas/dataSchema";

// const AddProduct = () => {
//   const [inputVal, setInputVal] = useState("");
//   const [store, setStore] = useState([]);
//   const [image, setImage] = useState(null);

//   return (
//     <Formik
//       initialValues={{
//         name: "",
//         username: "",
//         email: "",
//         password: "",
//         number: "",
//         dateOfBirth: "",
//         country: "",
//         social: { facebook: "", twitter: "" },
//         gender: "",
//         skills: [],
//         tags: [],
//         description: "",
//         avatar: null,
//       }}
//       validationSchema={dataSchema}
//       onSubmit={async (values, { setSubmitting, resetForm }) => {
//         const formData = new FormData();
//         formData.append("name", values.name),
//           formData.append("username", values.username),
//           formData.append("email", values.email),
//           formData.append("password", values.password),
//           formData.append("number", values.number),
//           formData.append("dateOfBirth", values.dateOfBirth),
//           formData.append("country", values.country),
//           formData.append("social", JSON.stringify(values.social)),
//           formData.append("gender", values.gender),
//           formData.append("skills", JSON.stringify(values.skills)),
//           formData.append("tags", JSON.stringify(values.tags)),
//           formData.append("description", values.description);
//         // formData.append("avatar", values.avatar);
//         if (image) {
//           formData.append("avatar", image);
//         }

// try {
//   let response = await api.post(`/insertData`, formData);
//   console.log(response);
//   if (response.status === 201) {
//     alert("Data saved successfully!");
//     resetForm();
//     setImage(null);
//     setStore([]);
//   }
// } catch (error) {
//   console.log(error);
//   if (error.code === "ERR_BAD_REQUEST") {
//     alert(error.response.data.message);
//   } else {
//     console.log(error);
//   }
// } finally {
//   setSubmitting(false);
// }
//       }}
//     >
//       {({ setFieldValue, isSubmitting }) => (
//         <Form className="bg-gray-200">
//           <div className="px-5 py-4">
//             <div className="text-xl font-bold bg-gray-300 py-2 px-2 rounded">
//               Add Products
//             </div>
//           </div>

//           <div className="grid grid-cols-3 gap-4 px-5 py-1">
//             <div className="flex flex-col">
//               <label htmlFor="name">Name</label>
//               <Field
//                 type="text"
//                 name="name"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full "
//                 placeholder="Enter your name..."
//               />
//               <ErrorMessage
//                 name="name"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="username">Username</label>
//               <Field
//                 type="text"
//                 name="username"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//                 placeholder="Enter your username..."
//               />
//               <ErrorMessage
//                 name="username"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="email">Email</label>
//               <Field
//                 type="text"
//                 name="email"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//                 placeholder="Enter your email..."
//               />
//               <ErrorMessage
//                 name="email"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="password">Password</label>
//               <Field
//                 type="password"
//                 name="password"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//                 placeholder="Enter your password..."
//               />
//               <ErrorMessage
//                 name="password"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="number">Number</label>
//               <Field
//                 type="number"
//                 name="number"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//                 placeholder="Enter your number..."
//               />
//               <ErrorMessage
//                 name="number"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="dateOfBirth">Date of birth</label>
//               <Field
//                 type="date"
//                 name="dateOfBirth"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//                 placeholder="Enter your number..."
//               />
//               <ErrorMessage
//                 name="dateOfBirth"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="country">Country</label>
//               <Field
//                 name="country"
//                 id="country"
//                 as="select"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//               >
//                 <option value="">Select a country</option>
//                 <option value="pakistan">Pakistan</option>
//                 <option value="bangladesh">Bangladesh</option>
//                 <option value="iran">Iran</option>
//                 <option value="china">China</option>
//               </Field>
//               <ErrorMessage
//                 name="country"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             {/* Object */}
//             <div className="flex flex-col">
//               <label htmlFor="social.facebook">Facebook URL</label>
//               <Field
//                 type="text"
//                 name="social.facebook"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//                 placeholder="Enter facebook URL..."
//               />
//               <ErrorMessage
//                 name="social.facebook"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="social.twitter">Twitter URL</label>
//               <Field
//                 type="text"
//                 name="social.twitter"
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-full"
//                 placeholder="Enter twitter URL..."
//               />
//               <ErrorMessage
//                 name="social.twitter"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="gender">Gender</label>
//               <div className="flex space-x-5 border border-gray-400 bg-white py-2 px-3 rounded-full">
//                 <div className="space-x-1 flex items-center justify-center">
//                   <label htmlFor="male">Male</label>
//                   <Field type="radio" value="male" id="male" name="gender" />
//                 </div>
//                 <div className="space-x-1 flex items-center justify-center">
//                   <label htmlFor="female">Female</label>
//                   <Field
//                     type="radio"
//                     value="female"
//                     id="female"
//                     name="gender"
//                   />
//                 </div>
//               </div>
//               <ErrorMessage
//                 name="gender"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="skills">Skills</label>
//               <div className="flex space-x-5 border border-gray-400 bg-white py-2 px-3 rounded-full">
//                 <div className="space-x-1 flex items-center justify-center">
//                   <label htmlFor="html">HTML</label>
//                   <Field type="checkbox" value="html" id="html" name="skills" />
//                 </div>
//                 <div className="space-x-1 flex items-center justify-center">
//                   <label htmlFor="css">CSS</label>
//                   <Field type="checkbox" value="css" id="css" name="skills" />
//                 </div>
//                 <div className="space-x-1 flex items-center justify-center">
//                   <label htmlFor="js">JavaScript</label>
//                   <Field type="checkbox" value="js" id="js" name="skills" />
//                 </div>
//               </div>
//               <ErrorMessage
//                 name="skills"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>
//           </div>

//           {/* Array */}
//           <div className="grid grid-cols-3 gap-4 px-5 py-1">
//             <div className="flex flex-col">
//               <label htmlFor="tags">Select Tags</label>
//               <div className="flex relative">
//                 <input
//                   type="text"
//                   name="tags"
//                   className="border border-gray-400 bg-white w-full py-2 px-3 rounded-full"
//                   placeholder="Enter tags..."
//                   value={inputVal}
//                   onChange={(e) => setInputVal(e.target.value)}
//                 />
//                 <div
//                   className="absolute right-0 bg-blue-700 text-white py-2 rounded-r-full border border-blue-700 px-3 font-semibold cursor-pointer hover:bg-blue-800"
//                   onClick={() => {
//                     if (!inputVal) return alert("Please enter tags...");
//                     if (store.includes(inputVal))
//                       return alert("can't enter same tags");
//                     const updated = [...store, inputVal];
//                     setStore(updated);
//                     setFieldValue("tags", updated);
//                     setInputVal("");
//                   }}
//                 >
//                   Add
//                 </div>
//               </div>
//               <ErrorMessage
//                 name="tags"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//               <div className="flex flex-wrap space-x-2">
//                 {store.map((item, index) => (
//                   <div key={index} className="py-2">
//                     <div className="border border-gray-400 rounded-full py-1 px-2">
//                       {item}{" "}
//                       <span
//                         className="cursor-pointer"
//                         onClick={() => {
//                           const updatedStore = store.filter(
//                             (val) => val !== item
//                           );
//                           setStore(updatedStore);
//                           setFieldValue("tags", updatedStore);
//                         }}
//                       >
//                         ❎
//                       </span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="input flex flex-col">
//               <label htmlFor="description">Description</label>
//               <Field
//                 type="text"
//                 name="description"
//                 as="textarea"
//                 rows={4}
//                 className="border border-gray-400 bg-white py-2 px-3 rounded-xl"
//                 placeholder="Leave your valuable comments..."
//               />
//               <ErrorMessage
//                 name="description"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//             </div>

//             <div className="flex flex-col">
//               <label htmlFor="tags">Upload avatar</label>
//               <div className="flex space-x-5 border border-gray-400 bg-white py-2 px-3 rounded-full">
//                 <input
//                   type="file"
//                   name="avatar"
//                   as="file"
//                   accept="image/*"
//                   onChange={(e) => {
//                     const file = e.target.files[0];
//                     setFieldValue("avatar", file);
//                     setImage(file);
//                   }}
//                 />
//               </div>
//               <ErrorMessage
//                 name="avatar"
//                 component="div"
//                 className="text-red-700 text-sm mt-1"
//               />
//               preview:
//               {image && (
//                 <img
//                   className="w-[90px] h-[90px] object-cover border mt-1 rounded-full"
//                   src={URL.createObjectURL(image)}
//                 />
//               )}
//             </div>
//           </div>

//           <div className="px-10 py-1 mt-3">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="border w-full bg-blue-700 text-white hover:bg-blue-800 font-semibold p-2 rounded-full cursor-pointer"
//             >
//               {isSubmitting ? "Submitting" : "Submit"}
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default AddProduct;

//================================================================================

// import React from "react";
// import axios from "axios";
// import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
// import * as Yup from "yup";

// const AddProduct = () => {
//   const initialValues = {
//     name: "",
//     price: "",
//     description: [{ title: "", paragraph: "" }],
//     stickerSize: [{ size: "", price: "" }],
//     brand: { title: "", heading: "", paragraph: "" },
//     image: null,
//     brandImage: null,
//   };

//   const validationSchema = Yup.object().shape({
//     name: Yup.string().required("Product name is required"),
//     price: Yup.number().required("Price is required").positive(),
//     description: Yup.array().of(
//       Yup.object().shape({
//         title: Yup.string().required("Title is required"),
//         paragraph: Yup.string().required("Paragraph is required"),
//       })
//     ),
//     stickerSize: Yup.array().of(
//       Yup.object().shape({
//         size: Yup.string().required("Size is required"),
//         price: Yup.number().required("Price is required").positive(),
//       })
//     ),
//     brand: Yup.object().shape({
//       title: Yup.string().required("Brand title is required"),
//       heading: Yup.string().required("Brand heading is required"),
//       paragraph: Yup.string().required("Brand paragraph is required"),
//     }),
//     image: Yup.mixed().required("Main image is required"),
//     brandImage: Yup.mixed().required("Brand image is required"),
//   });

//   const handleSubmit = async (values, { setSubmitting }) => {
//     const formData = new FormData();
//     formData.append("name", values.name);
//     formData.append("price", values.price);
//     formData.append("image", values.image);
//     formData.append("brandImage", values.brandImage);
//     formData.append("brand.title", values.brand.title);
//     formData.append("brand.heading", values.brand.heading);
//     formData.append("brand.paragraph", values.brand.paragraph);
//     formData.append("description", JSON.stringify(values.description));
//     formData.append("stickerSize", JSON.stringify(values.stickerSize));

//     try {
//       const res = await axios.post("/api/product/insert", formData);
//       console.log("Success:", res.data);
//     } catch (err) {
//       console.error("Error:", err.response?.data || err.message);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Formik
//       initialValues={initialValues}
//       validationSchema={validationSchema}
//       onSubmit={handleSubmit}
//     >
//       {({ values, setFieldValue, isSubmitting }) => (
//         <Form className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-8">
//           <h2 className="text-2xl font-bold text-gray-800">Add Product</h2>

//           {/* Name & Price */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Product Name
//               </label>
//               <Field
//                 name="name"
//                 type="text"
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               />
//               <ErrorMessage
//                 name="name"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Price
//               </label>
//               <Field
//                 name="price"
//                 type="number"
//                 className="mt-1 block w-full border border-gray-300 rounded-md p-2"
//               />
//               <ErrorMessage
//                 name="price"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>
//           </div>

//           {/* Description */}
//           <div>
//             <label className="block text-lg font-semibold text-gray-700 mb-2">
//               Description
//             </label>
//             <FieldArray name="description">
//               {({ push, remove }) => (
//                 <>
//                   {values.description.map((_, idx) => (
//                     <div
//                       key={idx}
//                       className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
//                     >
//                       <div>
//                         <Field
//                           name={`description.${idx}.title`}
//                           placeholder="Title"
//                           className="border border-gray-300 rounded-md p-2 w-full"
//                         />
//                         <ErrorMessage
//                           name={`description.${idx}.title`}
//                           component="p"
//                           className="text-red-500 text-sm mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Field
//                           as="textarea"
//                           name={`description.${idx}.paragraph`}
//                           placeholder="Paragraph"
//                           className="border border-gray-300 rounded-md p-2 w-full"
//                         />
//                         <ErrorMessage
//                           name={`description.${idx}.paragraph`}
//                           component="p"
//                           className="text-red-500 text-sm mt-1"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => push({ title: "", paragraph: "" })}
//                     className="text-sm text-blue-600"
//                   >
//                     + Add more description
//                   </button>
//                 </>
//               )}
//             </FieldArray>
//           </div>

//           {/* Sticker Sizes */}
//           <div>
//             <label className="block text-lg font-semibold text-gray-700 mb-2">
//               Sticker Sizes
//             </label>
//             <FieldArray name="stickerSize">
//               {({ push, remove }) => (
//                 <>
//                   {values.stickerSize.map((_, idx) => (
//                     <div key={idx} className="grid grid-cols-2 gap-4 mb-4">
//                       <div>
//                         <Field
//                           name={`stickerSize.${idx}.size`}
//                           placeholder="Size"
//                           className="border border-gray-300 rounded-md p-2 w-full"
//                         />
//                         <ErrorMessage
//                           name={`stickerSize.${idx}.size`}
//                           component="p"
//                           className="text-red-500 text-sm mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Field
//                           name={`stickerSize.${idx}.price`}
//                           type="number"
//                           placeholder="Price"
//                           className="border border-gray-300 rounded-md p-2 w-full"
//                         />
//                         <ErrorMessage
//                           name={`stickerSize.${idx}.price`}
//                           component="p"
//                           className="text-red-500 text-sm mt-1"
//                         />
//                       </div>
//                     </div>
//                   ))}
//                   <button
//                     type="button"
//                     onClick={() => push({ size: "", price: "" })}
//                     className="text-sm text-blue-600"
//                   >
//                     + Add more sticker sizes
//                   </button>
//                 </>
//               )}
//             </FieldArray>
//           </div>

//           {/* Brand Info */}
//           <div className="space-y-4">
//             <label className="block text-lg font-semibold text-gray-700">
//               Brand Info
//             </label>
//             <div>
//               <Field
//                 name="brand.title"
//                 placeholder="Brand Title"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//               <ErrorMessage
//                 name="brand.title"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>
//             <div>
//               <Field
//                 name="brand.heading"
//                 placeholder="Heading"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//               <ErrorMessage
//                 name="brand.heading"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>
//             <div>
//               <Field
//                 as="textarea"
//                 name="brand.paragraph"
//                 placeholder="Paragraph"
//                 className="w-full border border-gray-300 rounded-md p-2"
//               />
//               <ErrorMessage
//                 name="brand.paragraph"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>
//           </div>

//           {/* File Uploads */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Main Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   setFieldValue("image", e.currentTarget.files[0])
//                 }
//                 className="mt-1 block w-full"
//               />
//               <ErrorMessage
//                 name="image"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-gray-700">
//                 Brand Image
//               </label>
//               <input
//                 type="file"
//                 accept="image/*"
//                 onChange={(e) =>
//                   setFieldValue("brandImage", e.currentTarget.files[0])
//                 }
//                 className="mt-1 block w-full"
//               />
//               <ErrorMessage
//                 name="brandImage"
//                 component="p"
//                 className="text-red-500 text-sm mt-1"
//               />
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="pt-4">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium"
//             >
//               Submit Product
//             </button>
//           </div>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default AddProduct;

// ===============================================================================

// with api integration.

import React from "react";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { addProduct } from "../../api/internal";

const AddProduct = () => {
  const initialValues = {
    name: "",
    price: "",
    description: [{ title: "", paragraph: "" }],
    stickerSize: [{ size: "", price: "" }],
    brand: { title: "", heading: "", paragraph: "" },
    image: null,
    brandImage: null,
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .max(30, "Name must be 30 characters or less")
      .required("Product name is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be positive"),
    description: Yup.array().of(
      Yup.object().shape({
        title: Yup.string().required("Title is required"),
        paragraph: Yup.string().required("Paragraph is required"),
      })
    ),
    stickerSize: Yup.array().of(
      Yup.object().shape({
        size: Yup.string().required("Size is required"),
        price: Yup.number().required("Price is required").positive(),
      })
    ),
    brand: Yup.object().shape({
      title: Yup.string().required("Brand title is required"),
      heading: Yup.string().required("Brand heading is required"),
      paragraph: Yup.string().required("Brand paragraph is required"),
    }),
    image: Yup.mixed().required("Main image is required"),
    brandImage: Yup.mixed().required("Brand image is required"),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();

    // Append simple fields
    formData.append("name", values.name);
    formData.append("price", values.price);

    // Append nested brand object properties
    formData.append("brand[title]", values.brand.title);
    formData.append("brand[heading]", values.brand.heading);
    formData.append("brand[paragraph]", values.brand.paragraph);

    // Stringify arrays of objects
    formData.append("description", JSON.stringify(values.description));
    formData.append("stickerSize", JSON.stringify(values.stickerSize));

    // Append file objects
    if (values.image) {
      formData.append("image", values.image);
    }
    if (values.brandImage) {
      formData.append("brandImage", values.brandImage);
    }

    // *** ADD THIS FOR DEBUGGING ***
    console.log("Verifying FormData contents:");
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      const response = await addProduct(formData);
      console.log("Product created successfully:", response.data);
      // resetForm(); // You can uncomment this to clear the form on success
    } catch (error) {
      console.error(
        "Error creating product:",
        error.response?.data || error.message
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="max-w-5xl mx-auto bg-white shadow-xl rounded-xl p-8 space-y-8">
          <h2 className="text-2xl font-bold text-gray-800">Add Product</h2>

          {/* Name & Price */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <Field
                name="name"
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="name"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <Field
                name="price"
                type="number"
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="price"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Description
            </label>
            <FieldArray name="description">
              {({ push, remove }) => (
                <>
                  {values.description.map((_, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4"
                    >
                      <div>
                        <Field
                          name={`description.${idx}.title`}
                          placeholder="Title"
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <ErrorMessage
                          name={`description.${idx}.title`}
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <Field
                          as="textarea"
                          name={`description.${idx}.paragraph`}
                          placeholder="Paragraph"
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <ErrorMessage
                          name={`description.${idx}.paragraph`}
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => push({ title: "", paragraph: "" })}
                    className="text-sm text-blue-600"
                  >
                    + Add more description
                  </button>
                </>
              )}
            </FieldArray>
          </div>

          {/* Sticker Sizes */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Sticker Sizes
            </label>
            <FieldArray name="stickerSize">
              {({ push, remove }) => (
                <>
                  {values.stickerSize.map((_, idx) => (
                    <div key={idx} className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <Field
                          name={`stickerSize.${idx}.size`}
                          placeholder="Size"
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <ErrorMessage
                          name={`stickerSize.${idx}.size`}
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                      <div>
                        <Field
                          name={`stickerSize.${idx}.price`}
                          type="number"
                          placeholder="Price"
                          className="border border-gray-300 rounded-md p-2 w-full"
                        />
                        <ErrorMessage
                          name={`stickerSize.${idx}.price`}
                          component="p"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => push({ size: "", price: "" })}
                    className="text-sm text-blue-600"
                  >
                    + Add more sticker sizes
                  </button>
                </>
              )}
            </FieldArray>
          </div>

          {/* Brand Info */}
          <div className="space-y-4">
            <label className="block text-lg font-semibold text-gray-700">
              Brand Info
            </label>
            <div>
              <Field
                name="brand.title"
                placeholder="Brand Title"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="brand.title"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <Field
                name="brand.heading"
                placeholder="Heading"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="brand.heading"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <Field
                as="textarea"
                name="brand.paragraph"
                placeholder="Paragraph"
                className="w-full border border-gray-300 rounded-md p-2"
              />
              <ErrorMessage
                name="brand.paragraph"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* File Uploads */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Main Image
              </label>
              <input
                id="image"
                name="image"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("image", event.target.files[0]);
                }}
                className="mt-1 block w-full"
              />
              <ErrorMessage
                name="image"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Brand Image
              </label>
              <input
                id="brandImage"
                name="brandImage"
                type="file"
                accept="image/*"
                onChange={(event) => {
                  setFieldValue("brandImage", event.target.files[0]);
                }}
                className="mt-1 block w-full"
              />
              <ErrorMessage
                name="brandImage"
                component="p"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium"
            >
              {isSubmitting ? "Submitting..." : "Submit Product"}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddProduct;

// ==================================================================================
