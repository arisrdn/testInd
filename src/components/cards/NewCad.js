import { useState } from "react";
import styled from "styled-components";
import "./card.css";
import {
	IoMdOpen,
	IoMdStar,
	IoMdStarOutline,
	IoIosStar,
	IoIosStarOutline,
} from "react-icons/io";

Card.Wrapper = styled.section`
	background-color: rgba(var(--blue), 0.05);
	box-shadow: inset 0 0 0 1px rgba(var(--blue), 0.05);
	border-radius: 0.25rem;
	overflow: hidden;
	position: relative;
`;

Card.Image = styled.img`
	height: ${({ height }) => height}px;
	width: 100%;
	background-color: rgba(var(--blue), 0.1);
`;

Card.Title = styled.section`
	margin: 0;
	font-size: 1rem;
	color: black;
	padding: 3px;
	text-align: center;
	display: flex;
	justify-content: center;
`;

Card.Description = styled.p`
	padding: 0 1rem 1rem;
`;

export default function Card({ data, addFav, imageFav, removeFav }) {
	const { title, url, id } = data;
	const height = Math.ceil((Math.random() * 200 + 100) / 10) * 10;
	const exists = imageFav.find((p) => p.id === id);

	return (
		<>
			<div className="card-h">
				<Card.Wrapper>
					{/*
					<Card.Image height={height} src={url} />
					<div class="feature-card-tilte">
						<div class="text-truncate">{title}</div>
					</div>
					<div class="feature-card-deatails">
						<Card.Title>{title}</Card.Title>
						<Card.Title>
							{exists ? (
								<>
									<IoIosStar
										onClick={() => {
											removeFav(data);
										}}
										style={{
											color: "yellow",
											fontSize: "50px",
											cursor: "pointer",
										}}
									/>
								</>
							) : (
								<>
									<IoIosStarOutline
										onClick={() => {
											addFav(data);
										}}
										style={{
											color: "yellow",
											fontSize: "50px",
											cursor: "pointer",
										}}
									/>
								</>
							)}
						</Card.Title>
					</div> */}

					<Card.Image height={height} src={url} />
					<div className="top-button">
						{exists ? (
							<>
								<IoIosStar
									onClick={() => {
										removeFav(data);
									}}
									style={{
										color: "yellow",
										fontSize: "50px",
										cursor: "pointer",
									}}
								/>
							</>
						) : (
							<>
								<IoIosStarOutline
									onClick={() => {
										addFav(data);
									}}
									style={{
										color: "yellow",
										fontSize: "50px",
										cursor: "pointer",
									}}
								/>
							</>
						)}
					</div>
					<div class="feature-card-tilte">
						<div class="text-truncate">{title}</div>
					</div>
					<div class="feature-card-deatails">
						<Card.Title>{title}</Card.Title>
						<Card.Title></Card.Title>
					</div>
				</Card.Wrapper>
			</div>
		</>
	);
}
