function Nav(props) {

function handleClick(){
    props.logOut();
}

 return (
     <nav className="logoutbox">
          <div onClick={handleClick} className="logoutbutton">Log Out</div>
          <p className="hellogreeting">Hello, {props.userData.name}</p>
       
       
     </nav>
 )
}

export default Nav;