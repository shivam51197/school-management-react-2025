

export function RegisterStudent(){
    return(
        <div className="bg-warning p-3 m-3 w-25">
            <h3>Student Register Form</h3>
            <form>
                <dl>
                    <dt>First Name</dt>
                    <dd><input type="text" name="first-name" className="form-control" /></dd>
                    <dt>Last Name</dt>
                    <dd><input type="text" name="last-name" className="form-control" /></dd>
                    <dt>Roll Number</dt>
                    <dd><input type="number" name="roll-number" className="form-control" /></dd>
                    <dt>Email</dt>
                    <dd><input type="email" name="email-address" className="form-control"  /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="number" name="mobile" className="form-control" /></dd>
                </dl>
                <button className="btn btn-success w-5-">Register</button>
            </form>
        </div>
    )
}