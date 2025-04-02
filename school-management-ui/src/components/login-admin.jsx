import axios from "axios";
import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";


export function LoginAdmin(){

    let navigate= useNavigate();
    const formik = useFormik({
        initialValues:{
            passward:''
        },
        onSubmit:(admin)=>{
            axios.get('http://127.0.0.1:5050/get-admin')
            .then(response=>{
                var user= response.data.find(item=> item.UserId===admin.UserId)
                if(user){
                    if(user.Passward===admin.Passward){
                        navigate("/admin-dash");
                    }else{
                        alert(`Invalid Passward`)
                    }
                }else{
                    alert(`Invalid User Id`)
                }
            })
        }
    })
    return(
        <div className="bg-warning m-3 p-3 w-25">
            <h3>Admin Login</h3>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>User Id</dt>
                    <dd><input type="text" name="UserId" onChange={formik.handleChange} className="form-control" /></dd>
                    <dt>Passward</dt>
                    <dd><input type="passward" name="Passward" onChange={formik.handleChange} className="form-control" /></dd>
                </dl>
                <button className="btn btn-success w-50 my-2">Login</button>
                <div>
                <Link className="my-2">Back to Home</Link>
                </div>
            </form>
        </div>
    )
}