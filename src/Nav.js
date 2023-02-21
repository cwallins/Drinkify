import React from "react";
import { Link } from "react-router-dom";

export default function Nav(props) {
	return (
		<div>
			<header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
				<Link
					onClick={() => {
						props.onChange();
					}}
					to="/"
					className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
					<b>
						<span id="logo" className="fs-4">
							Drinkify
						</span>
					</b>
					<span id="drink" className="material-symbols-outlined">
						local_bar
					</span>
					<br></br>
				</Link>
				<ul className="nav nav-pills">
					<b>
						<li className="nav-item">
							<Link
								onClick={() => {
									props.onChange();
								}}
								to="/mydrinks"
								id="links"
								className="nav-link">
								My Drinks
							</Link>
						</li>
					</b>
					<b>
						<li className="nav-item">
							<Link
								onClick={() => {
									props.onChange();
								}}
								to="/about"
								id="links"
								className="nav-link">
								About Drinkify
							</Link>
						</li>
					</b>
				</ul>
			</header>
		</div>
	);
}
