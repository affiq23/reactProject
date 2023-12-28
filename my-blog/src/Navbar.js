const Navbar = () => { // stateless functional component
    return (  
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white", 
                    backgroundColor: "green",
                    borderRadius: "8px"
                }}>New Blog</a>
                </div>
        </nav>
    );
}
 
export default Navbar;