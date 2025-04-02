import { Link } from "react-router-dom";


export function HomeSchool(){
    return(
        <div className="bg-secondary justify-content-between d-flex p-3 mt-3">
        <Link className='btn btn-warning'to='/login-admin'>Admin Login</Link>
        <Link className="btn btn-danger" to='/login-teacher'>Teacher Login</Link>
        <Link className="btn btn-success" to='/register-student'>Student Register</Link>
        <Link className="btn btn-warning" to='/Login'>Login</Link>
        <nav class="navbar bg-light p-3">
    
        <a href="#" class="navbar-brand">
            <i class="bi bi-house-door-fill"></i> Home
        </a>
        </nav>

        </div>
    )
}