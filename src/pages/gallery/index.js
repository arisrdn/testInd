// import { useQuery } from "react-query";
// import axios from "axios";
// import { CardTerry } from "../../components/cards/Card";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

// const Image = () => {
// 	const {
// 		data: imageData,
// 		error: imageError,
// 		loading: imageLoading,
// 		refetch: imageRefetch,
// 	} = useQuery("imageCache", async () => {
// 		const result = await axios.get(
// 			"https://jsonplaceholder.typicode.com/albums/1/photos"
// 		);
// 		return result?.data;
// 	});

// 	console.log(imageData);
// 	return (
// 		<>
// 			<div className="row ">
// 				<div className="my-2 col-12">
// 					<h2>image Restaurant</h2>
// 				</div>

// 				{imageLoading
// 					? // <imageLoading />
// 					  "loading data"
// 					: imageData?.map((data, index) => (
// 							// <CardTerry data={data} index={index} key={data.id} />
// 							<>
// 								{/* {data.url} */}
// 								{/* <Image src={data.url}></Image> */}
// 							</>
// 					  ))}

// 				{/* <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
// 					<Masonry>
// 						{imageData?.map((data, index) => (
// 							<CardTerry data={data} index={index} key={data.id} />
// 						))}
// 					</Masonry>
// 					<Masonry columnsCount={3} gutter="10px">
// 						{imageData?.map((image, i) => (
// 							<img
// 								key={i}
// 								src={image.url}
// 								style={{ width: "100%", display: "block" }}
// 							/>
// 						))}
// 					</Masonry>
// 				</ResponsiveMasonry> */}
// 			</div>
// 		</>
// 	);
// };

// export default Image;

import { useEffect, useState } from "react";
// import Masonry from "react-masonry-css";
import { Container, Row } from "react-bootstrap";
import { IconName } from "react-icons/io";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { CardZoe } from "../../components/cards/Card";

const images = [
	"https://picsum.photos/200/300?image=1050",
	//...
	"https://picsum.photos/300/300?image=206",
];
function MyComponent() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState();
	useEffect(() => {
		setLoading(true);
		fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			})
			.catch((err) => {
				setError(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	console.log(data);

	if (loading) {
		return <p>Data is loading...</p>;
	}

	if (error || !Array.isArray(data)) {
		return <p>There was an error loading your data!</p>;
	}

	return (
		<>
			<div className="container">
				<Row>
					<div class="grid row">
						{data.map((image, i) => (
							<CardZoe>sdsdsd</CardZoe>
						))}
					</div>
				</Row>
			</div>
		</>
	);
}

export default MyComponent;
