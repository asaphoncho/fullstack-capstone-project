import React, {useState} from 'react'

function RegisterPage(){
 const [firstName, setFirstName] = useState("")
 const [lastName, setLastName] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 
 const handleRegister = async () => {
    console.log("register handled")
 }
 
return(
    <div className="container mt-5">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="register-card p-4 border rounded">
                    <h2 className="text-center mb-4 font-weight-bold">Register</h2>              
                    <div className="mb-4">
                        <label htmlFor="firstName" className="form label">FirstName</label>
                        <input
                        id="firstName"
                        type="text"
                        className="form-control"
                        placeholder="Enter your firstName"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="form label">LastName</label>
                        <input
                        id="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Enter your Last Name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="email" className="form label">Email</label>
                        <input
                        id="email"
                        type="email"
                        className="form-control"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <label htmlFor="password" className="form label">Password</label>
                        <input
                        id="password"
                        type="password"
                        className="form-control"
                        placeholder="Enter your password"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        />
                        <button className="btn btn-primary w-100 mb-3" onClick={handleRegister}>Register</button>
                    </div>
                    <p className="mt-4 text-center">
                        Already a member? <a href="/app/login" className="text-primary">Login</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
 )
}


export default RegisterPage