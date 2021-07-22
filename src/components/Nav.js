import { Link } from 'react-router-dom';


function Nav(props) {

function handleClick(){
    props.logOut();
}

 return (
     <nav>
        <div onClick={handleClick}>Log Out</div>
        <p>Hello, {props.userData.name}</p>
     </nav>
 )
}

export default Nav;