const Navbar = () => { // stateless functional component
    return (  
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <div>
                <a href="/">Home</a>
                </div>
                <div>
                <a href="/create">New Blog</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;