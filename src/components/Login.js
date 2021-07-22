import { useState } from 'react';


function Login(props) {

    const [ formData, setFormData ] = useState({
        name: "",
        password: "",
    });

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault();
        props.handleLogin(formData);
        setFormData({...formData, name:"", password: ""})
    }

    return (
        <div className="logincontainer">
             <img src="img/CodeGreenLogoSVG.svg" className="headerlogo" alt="Code_Green Logo" />
            <h1 className="loginformlabel">sign in</h1>
            <form onSubmit={handleSubmit} className="loginform">
                <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"/>
                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="password"/>
                <input type="submit" value="sign in" className="signinbutton" />
            </form>
        </div>
    )
   }
   
   export default Login;