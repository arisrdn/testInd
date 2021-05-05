import React from "react";
import styled from "styled-components";
import "./card.css";

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

Card.Title = styled.p`
	margin: 0;
	font-size: 1rem;
	color: black;
	padding: 0.5rem 1rem 0;
`;

Card.Description = styled.p`
	padding: 0 1rem 1rem;
`;

export default function Card({ title, img }) {
	const height = Math.ceil((Math.random() * 200 + 100) / 10) * 10;

	return (
		<>
			<div className="card-h">
				<Card.Wrapper>
					<Card.Image height={height} src={img} />
					<div class="feature-card-tilte">
						<div class="text-truncate">{title}</div>
					</div>
					<div class="feature-card-deatails">
						<Card.Title>{title}</Card.Title>
					</div>
				</Card.Wrapper>
			</div>
		</>
	);
}
