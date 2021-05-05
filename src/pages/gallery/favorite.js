// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../../contexts/globalContext";

import Masonry from "./Masonry";
import Card from "../../components/cards/NewCad";

function App() {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");
	const [state, dispatch] = useContext(GlobalContext);

	const getPosts = () => {
		axios
			.get("https://jsonplaceholder.typicode.com/albums/1/photos")
			.then((response) => setPosts(response.data));
	};
	useEffect(() => {
		console.log("useEffect componentDidMount");
		getPosts();
	}, []); //fetching data dari API

	useEffect(() => {
		if (search === "") {
			getPosts();
		}

		const filteredPosts = posts.filter((post) => {
			return post.title.includes(search);
		});

		setPosts(filteredPosts);
	}, [search]);

	const addFav = (data) => {
		dispatch({
			type: "ADD_FAV",
			payload: data,
		});
	};
	const removeFav = (data) => {
		dispatch({
			type: "REMOVE_FAV",
			payload: data,
		});
	};
	console.log(state.imageFav);
	return (
		<>
			<input
				type="text"
				className="form-control"
				onChange={(e) => setSearch(e.target.value)}
				placeholder="Search..."
			/>
			<Masonry columns={4}>
				{posts.map((post, index) => (
					<Card
						key={index}
						data={post}
						addFav={addFav}
						removeFav={removeFav}
						imageFav={state.imageFav}
					/>
				))}
			</Masonry>
		</>
	);
}

export default App;
