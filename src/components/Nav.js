import { Link } from 'react-router-dom';


function Nav() {
 return (
     <nav>
         <Link to="/link1">
             <div>Topic 1</div>
         </Link>
         <Link to="/link1">
             <div>Topic 2</div>
         </Link>
         <Link to="/link1">
             <div>Topic 3</div>
         </Link>
     </nav>
 )
}

export default Nav;