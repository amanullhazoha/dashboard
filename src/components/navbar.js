const Navbar = () => {
    return (
        <nav id="navigation">
            <img src="img/nav-bg.jpg" class="nav-bg" alt="logo" />
            <ul>
                <li>
                        <a href="_">
                        <div class="icon"><i class="fas fa-desktop"></i></div>
                        <div class="icon-title"><h2>Websblogs</h2></div>
                    </a>
                </li>

                <li>
                    <a href="_">
                        <div class="icon"><i class="fas fa-desktop"></i></div>
                        <div class="icon-title">Dashboard</div>
                    </a>
                </li>

                <li>
                    <a href="_">
                        <div class="icon"><i class="fas fa-users"></i></div>
                        <div class="icon-title">Customers</div>
                    </a>
                </li>

                <li>
                    <a href="_">
                        <div class="icon"><i class="fas fa-file-powerpoint"></i></div>
                        <div class="icon-title">Projects</div>
                    </a>
                </li>

                <li>
                    <a href="_">
                        <div class="icon"><i class="fas fa-file-powerpoint"></i></div>
                        <div class="icon-title">Orders</div>
                    </a>
                </li>

                <li>
                    <a href="_">
                        <div class="icon"><i class="fas fa-file-invoice-dollar"></i></div>
                        <div class="icon-title">Income</div>
                    </a>
                </li>

                <li>
                    <a href="_">
                        <div class="icon"><i class="fas fa-user"></i></div>
                        <div class="icon-title">Account</div>
                    </a>
                </li>

                <li>
                    <a href="_">
                        <div class="icon"><i class="fas fa-sign-out-alt"></i></div>
                        <div class="icon-title">Logout</div>
                    </a>
                </li>

            </ul>
        </nav>
    );
}
 
export default Navbar;