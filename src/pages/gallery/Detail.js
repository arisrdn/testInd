import { useEffect, useState } from "react";
import axios from "axios";
import Masonry from "react-responsive-masonry";
import { FaSearch, faTwitter } from "react-icons/fa";

const UseEffect = () => {
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
		<div className="container mt-5">
			<div class="form-group has-search">
				<span class=" form-control-feedback">
					<FaSearch />
				</span>
				<input
					type="text"
					className="form-control"
					onChange={(e) => setSearch(e.target.value)}
					placeholder="Input your search keywords here..."
				/>
			</div>
			<div className="container">
				{/* <div className="row"> */}
				<Masonry columnsCount={3} gutter={4}>
					{posts.map((post, index) => (
						<div className="col">
							<div class="hovereffect">
								<img
									class="img-responsive"
									src={post.thumbnailUrl}
									alt=""
									style={{ width: "100%" }}
								/>
								<div class="overlay">
									<h2>{post.title}</h2>
									<p class="icon-links">
										<a href="#">
											<span class="fa fa-twitter">
												{" "}
												<faTwitter />
											</span>
										</a>
										<a href="#">
											<span class="fa fa-facebook"></span>
										</a>
										<a href="#">
											<span class="fa fa-instagram"></span>
										</a>
									</p>
								</div>
							</div>
						</div>
					))}
				</Masonry>
				{/* {posts.map((post, index) => (
						<div className="col-md-4">
							<figure class="effect-zoe">
								<img src={post.url} alt="img25" />
								<figcaption>
									<p class="icon-links">
										<a href="#">{/* <IoIosHeart></IoIosHeart> */}
				{/* </a>
										<a href="#">
											<span class="icon-eye"></span>
										</a>
										<a href="#">
											<span class="icon-paper-clip"></span>
										</a>
									</p>
									<p class="description">{post.title}</p>
								</figcaption>
							</figure>
						</div> */}
				{/* ))} */} */}
				{/* </div> */}
			</div>
		</div>
	);
};

export default UseEffect;
