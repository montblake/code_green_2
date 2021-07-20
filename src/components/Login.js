import { useState } from 'react';


function Login() {

    const [ formData, setFormData ] = useState({
        name: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password"/>
                <input type="submit" value="Log In" />
            </form>
        </div>
    )
   }
   
   export default Login;