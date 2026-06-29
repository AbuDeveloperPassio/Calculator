function Navbar(props) {
    return (
        <div className="navbar-section">
            <nav>
                <h1>Dynamic Image Gallery</h1>
                {/* ✅ Use props.toggleDarkMode and props.darkMode */}
                <button onClick={props.toggleDarkMode} className="navbar-button">
                    {props.darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
                </button>
            </nav>
        </div>
    );
}

export default Navbar;