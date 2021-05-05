// ─────────────────────────────────────────────────────────────────────────────
// import
// ─────────────────────────────────────────────────────────────────────────────

import { useEffect, useState } from "react";
import axios from "axios";
// import "./styles.css";

import Masonry from "./Masonry";
import Card from "../../components/cards/NewCad";

// ─────────────────────────────────────────────────────────────────────────────
// data
// ─────────────────────────────────────────────────────────────────────────────

const data = [
	"🍎Apple",
	"🍞Bread",
	"🍰Cake",
	"🍩Donut",
	"🥚Egg",
	"🍟Fries",
	"🍇Grapes",
	"🍯Honey",
	"🍦Icecream",
	"🌶Jalapeño",
	"🥝Kiwi",
	"🍋Lemon",
];

// ─────────────────────────────────────────────────────────────────────────────
// component
// ─────────────────────────────────────────────────────────────────────────────

function App() {
	const [posts, setPosts] = useState([]);
	const [search, setSearch] = useState("");

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
					<Card key={index} title={post.title} img={post.url} />
				))}
			</Masonry>
		</>
	);
}

export default App;
