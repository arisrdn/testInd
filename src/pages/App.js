import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/style.css";

import Routing from "./Router";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { GlobalContextProvider } from "../contexts/globalContext";

const client = new QueryClient();

function App() {
	return (
		<>
			<GlobalContextProvider>
				<QueryClientProvider client={client}>
					<Router>
						<Routing />
					</Router>
				</QueryClientProvider>
			</GlobalContextProvider>
		</>
	);
}

export default App;
