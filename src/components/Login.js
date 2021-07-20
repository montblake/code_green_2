import { useState } from 'react';


function Login() {

    const [ formData, setFormData ] = useState({
        name: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    // function handleSubmit(event){
    //     event.preventDefault;
    //     console.log(formData);
    // }

    return (
        <div>
            <h1>Login</h1>
            <form >
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <input type="submit" value="Log In" />
            </form>
        </div>
    )
   }
   
   export default Login;