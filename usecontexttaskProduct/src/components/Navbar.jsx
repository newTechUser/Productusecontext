import './Navbar.css'
import { Link } from 'react-router-dom';
import { SwitchCount } from '../SwitchCount';

function Navbar() {

  return (
    <div  className="nav">
        <div className="end">
            <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>
                <Link style={{color:'white',textDecoration:'none'}} to='/'>Products</Link>
            </p>
            <p style={{fontSize:"15px",fontWeight:"bold",paddingLeft:"40px",cursor:'pointer'}}>
                <Link style={{color:'white',textDecoration:'none'}} to='/About'>Favorite Products</Link>
                <sup>
                  <SwitchCount/>
                </sup>
            </p>
        </div>
    </div>
  )
}

export default Navbar