// import { useEffect, useState } from "react";
// import axios from "axios";
// import Masonry from "react-responsive-masonry";
// import { FaSearch, faTwitter } from "react-icons/fa";

// const UseEffect = () => {
// 	const [posts, setPosts] = useState([]);
// 	const [search, setSearch] = useState("");

// 	const getPosts = () => {
// 		axios
// 			.get("https://jsonplaceholder.typicode.com/albums/1/photos")
// 			.then((response) => setPosts(response.data));
// 	};
// 	useEffect(() => {
// 		console.log("useEffect componentDidMount");
// 		getPosts();
// 	}, []); //fetching data dari API

// 	useEffect(() => {
// 		if (search === "") {
// 			getPosts();
// 		}

// 		const filteredPosts = posts.filter((post) => {
// 			return post.title.includes(search);
// 		});

// 		setPosts(filteredPosts);
// 	}, [search]);

// 	return (
// 		<div className="container mt-5">
// 			<div class="form-group has-search">
// 				<span class=" form-control-feedback">
// 					<FaSearch />
// 				</span>
// 				<input
// 					type="text"
// 					className="form-control"
// 					onChange={(e) => setSearch(e.target.value)}
// 					placeholder="Input your search keywords here..."
// 				/>
// 			</div>
// 			<div className="container">
// 				{/* <div className="row"> */}
// 				<Masonry columnsCount={3} gutter={4}>
// 					{posts.map((post, index) => (
// 						<div className="col">
// 							{/* <div class="hovereffect">
// 								<img
// 									class="img-responsive"
// 									src={post.thumbnailUrl}
// 									alt=""
// 									style={{ width: "100%" }}
// 								/>
// 								<div class="overlay">
// 									<h2>{post.title}</h2>
// 									<p class="icon-links">
// 										<a href="#">
// 											<span class="fa fa-twitter">
// 												{" "}
// 												<faTwitter />
// 											</span>
// 										</a>
// 										<a href="#">
// 											<span class="fa fa-facebook"></span>
// 										</a>
// 										<a href="#">
// 											<span class="fa fa-instagram"></span>
// 										</a>
// 									</p>
// 								</div>
// 							</div> */}
// 							<div class="">
// 								<div class="effect effect-three col3-block-height">
// 									<img
// 										src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
// 										class="img-fluid"
// 									/>
// 									<div class="tab-text">
// 										<h2>Artistic</h2>
// 										<p>
// 											{" "}
// 											<a href="#">
// 												<i class="fa fa-facebook-official"></i>
// 											</a>{" "}
// 											<a href="#">
// 												<i class="fa fa-twitter-square"></i>
// 											</a>{" "}
// 											<a href="#">
// 												<i class="fa fa-youtube-square"></i>
// 											</a>
// 										</p>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					))}
// 				</Masonry>
// 				<section
// 					class="wrapper-full tab-container effectTab-header"
// 					id="style_3"
// 				>
// 					<div class="wrapper tab-item">
// 						<div class="custom-row">
// 							<div class="wrapper " align="center">
// 								<h1 class="ti title">
// 									<input
// 										type="text"
// 										className="form-control"
// 										onChange={(e) => setSearch(e.target.value)}
// 										placeholder="Search..."
// 									/>
// 								</h1>
// 							</div>
// 							<div class="column-12 tab column-xs-12">
// 								<div class="custom-row">
// 									<div class="column-4 column-md-6 column-xs-12 column-sm-6 box-tab">
// 										<div class="effect effect-three col3-block-height">
// 											<img
// 												src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
// 												class="img-fluid"
// 											/>
// 											<div class="tab-text">
// 												<h2>Artistic</h2>
// 												<p>
// 													{" "}
// 													<a href="#">
// 														<i class="fa fa-facebook-official"></i>
// 													</a>{" "}
// 													<a href="#">
// 														<i class="fa fa-twitter-square"></i>
// 													</a>{" "}
// 													<a href="#">
// 														<i class="fa fa-youtube-square"></i>
// 													</a>
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 									<div class="column-4 column-md-6 column-sm-6 hide-xs box-tab">
// 										<div class="effect effect-three col3-block-height">
// 											<img
// 												src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
// 												class="img-fluid"
// 											/>
// 											<div class="tab-text">
// 												<h2>Realistic</h2>
// 												<p>
// 													{" "}
// 													<a href="#">
// 														<i class="fa fa-facebook-official"></i>
// 													</a>{" "}
// 													<a href="#">
// 														<i class="fa fa-twitter-square"></i>
// 													</a>{" "}
// 													<a href="#">
// 														<i class="fa fa-youtube-square"></i>
// 													</a>
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 									<div class="column-4 hide-xs hide-sm hide-md box-tab">
// 										<div class="effect effect-three col3-block-height">
// 											<img
// 												src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
// 												class="img-fluid"
// 											/>
// 											<div class="tab-text">
// 												<h2>Difficult</h2>
// 												<p>
// 													{" "}
// 													<a href="#">
// 														<i class="fa fa-facebook-official"></i>
// 													</a>{" "}
// 													<a href="#">
// 														<i class="fa fa-twitter-square"></i>
// 													</a>{" "}
// 													<a href="#">
// 														<i class="fa fa-youtube-square"></i>
// 													</a>
// 												</p>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</section>
// 			</div>
// 		</div>
// 	);
// };

// export default UseEffect;
