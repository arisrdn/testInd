import { Navbar, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useContext } from "react";

const NavbarL = () => {
	return (
		<nav>
			<nav class="navbar navbar-dark bg-dark navbar-expand-sm">
				<a class="navbar-brand" href="#">
					<img
						src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/logo_white.png"
						width="30"
						height="30"
						alt="logo"
					/>
					BootstrapBay
				</a>
				<form class="form-inline">
					<input
						class="form-control mr-2"
						type="search"
						placeholder="Search"
						aria-label="Search"
					/>
				</form>
			</nav>
		</nav>
	);
};

export default NavbarL;
