import CartWidget from "./CartWidget";
import "./NavBar.css";

function NavBar() {
    return (
        <header className="header">
            <p>Home</p>
            <p>Nosotros</p>
            <p>Tienda</p>
            <CartWidget />
        </header>
    )
}


export default NavBar