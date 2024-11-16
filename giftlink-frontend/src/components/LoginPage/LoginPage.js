import React, {useState} from 'react'

const LoginPage = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const handleLogin = async () => {
    console.log("Inside handleLogin");
}
return(
<div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input
        id="email"
        type="text"
        className="form-control"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <label htmlFor="password" className="form-label">Password</label>
    <input
        id="password"
        type="password"
        className="form-control"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <button className="btn btn-primary w-100 mb-3" onClick={handleLogin}>Login</button>
</div>
)
}

export default LoginPage