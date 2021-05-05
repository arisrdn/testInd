import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
	carts: [],
	currentRestaurant: null,
	modal: false,
	comments: [],
	imageFav: [
		{
			albumId: 1,
			id: 2,
			title: "reprehenderit est deserunt velit ipsam",
			url: "https://via.placeholder.com/600/771796",
			thumbnailUrl: "https://via.placeholder.com/150/771796",
		},
	],
	tags: [],
};

export const reducer = (state, { type, payload }) => {
	console.log("keranjang contect", state);
	switch (type) {
		case "ADD_FAV":
			return {
				...state,
				imageFav: [
					...state.imageFav,
					{
						...payload,
					},
				],
			};
		case "REMOVE_FAV":
			const filteredCarts = state.imageFav.filter(
				(cart) => cart.id !== payload.id
			);

			return {
				...state,
				imageFav: filteredCarts,
			};
		default:
			throw new Error();
	}
};

export const GlobalContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			<GlobalContext.Provider value={[state, dispatch]}>
				{children}
			</GlobalContext.Provider>
		</>
	);
};
