// import axios from "axios";
// import { Formik, useFormik } from "formik";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";




// export function SignUp(){

//     const[formData , setFormData]= useState("")

// function handlSumitData(){
//     console.log('data sumit')
// }

// function handleChange(){

// }
// // let navigate = useNavigate();
// //     const formik = useFormik({
// //         initialValues:{
// //             Name:"",
// //             Age:"",
// //             gender:"",
// //             Mobile:""

// //         },
// //         onSubmit:(login)=>{
// //             console.log("sumit data")
// //             axios.get('http://127.0.0.1:5050/get-login')
// //             .then(response=>{
// //                 console.log(response)
// //              var user= response.data.find(item=> item.Name===login.Name);
// //              if(user){
// //                 navigate("/stulogin-dashboard");

// //              }else{
// //                 alert("Invalid UserName");
// //              }

// //              navigate("/login-dash");

// //         });
// //     }
//      };
//     return(
//         <div className="bg-warning p-3 m-3 w-25">
//             <h3>Student Login</h3>
//             <form onSubmit={handlSumitData}>
//                 <dl>
//                     <dt>Name</dt>
//                     <dd><input type="text" name="name" onChange={handleChange}  className="form-control"/></dd>
//                     <dt>Age</dt>
//                     <dd><input type="text" name="age" onChange={handleChange} className="form-control" /></dd>
//                     <dt>Gender</dt>
//                     <dd><input type="text" name="email" onChange={handleChange} className="form-control" /></dd>
//                     <dt>Mobile</dt>
//                     <dd><input type="text" name="mobile" onChange={handleChange} className="form-control" /></dd>
//                 </dl>
//                 <button className="btn btn-success w-50 " type="submit">SignUp</button>
//                 </form>
//         </div>
//     )


import axios from "axios";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            name: "",
            age: "",
            gender: "",
            contact: ""
        },
        onSubmit: async (values) => {
            console.log("Submitting data...", values);
            try {
                const response = await axios.post("http://127.0.0.1:5050/get-login");
                console.log(response.data);

                const user = response.data.find((item) => item.name === values.name);
                if (user) {
                    navigate("/stulogin-dashboard");
                } else {
                    alert("Invalid Username");
                }
            } catch (error) {
                console.error("Error fetching login data:", error);
            }
        },
    });

    return (
        <div className="bg-warning p-3 m-3 w-25">
            <h3>Student Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>Name</dt>
                    <dd><input type="text" name="Name"  onChange={formik.handleChange} value={formik.values.Name}  className="form-control"/>
                     </dd> 
                     <dt>Age</dt>
                     <dd> <input  type="text" name="Age"  onChange={formik.handleChange}  value={formik.values.Age} className="form-control"/>
                     </dd>
                     <dt>Gender</dt>
                     <dd> <input  type="text"  name="Gender"  onChange={formik.handleChange}  value={formik.values.Gender} className="form-control" />
                    </dd>
                    <dt>Contact</dt>
                     <dd> <input type="text"  name="Contact" onChange={formik.handleChange} value={formik.values.Contact}  className="form-control"/>
                    </dd>
                </dl>
                <button className="btn btn-success w-50" type="submit">Sign Up</button>
            </form>
        </div>
    );
}
