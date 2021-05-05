import React, { useEffect, useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import Gallery from "./gallery/index";
import Detail from "./gallery/Detail";
import Navbar from "../components/header/Navbar";

export default function MasterRoute() {
	return (
		<>
			<Navbar />
			<Switch>
				<Route exact path="/" component={Detail} />

				{/* <Route exact path="/register" component={Register} /> */}
			</Switch>
		</>
	);
}
