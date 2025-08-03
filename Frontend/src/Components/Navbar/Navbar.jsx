import "./Navbar.css"
import logo from "../../assets/logo.jpg"

const Navbar = () => {
  return (
    <nav className="container">
        <img src={logo} alt="" className="logo"/>
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Programs</li>
            <li>Donate</li>
            <li><button className="btn">Join Us</button></li>

        </ul>

    </nav>
  )
}

export default Navbar