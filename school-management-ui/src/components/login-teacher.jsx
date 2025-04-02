

export function LoginTeacher(){
    return(
        <div className="bg-warning p-3 m-3 w-25">
            <h3>Teacher Login</h3>
            <form>
                <dl>
                    <dt>First Name</dt>
                    <dd><input type="text" name="first-name"  className="form-control"/></dd>
                    <dt>Last Name</dt>
                    <dd><input type="text" name="last-name" className="form-control" /></dd>
                    <dt>Subject</dt>
                    <dd><input type="text" name="subject" className="form-control" /></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" name="mobile" className="form-control" /></dd>
                </dl>
                <button className="btn btn-success w-50">Login</button>
            </form>
        </div>
    )
}