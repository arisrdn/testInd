import "./card.css";
import { IoIosHeart } from "react-icons/io";
export const CardTerry = (props) => {
	return (
		<div>
			<figure class="effect-terry">
				<img
					src="https://tympanus.net/Development/HoverEffectIdeas/img/16.jpg"
					alt="img16"
				/>
				<figcaption>
					<h2>
						Noisy <span>Terry</span>
					</h2>
					<p>
						<a href="#">
							<i class="fa fa-fw fa-download"></i>
						</a>
						<a href="#">
							<i class="fa fa-fw fa-heart"></i>
						</a>
						<a href="#">
							<i class="fa fa-fw fa-share"></i>
						</a>
						<a href="#">
							<i class="fa fa-fw fa-tags"></i>
						</a>
					</p>
				</figcaption>
			</figure>
		</div>
	);
};

export const CardZoe = (props) => {
	return (
		<>
			<div className="col-md-3 mx-3">
				<figure class="effect-zoe">
					<img
						src="https://tympanus.net/Development/HoverEffectIdeas/img/25.jpg"
						alt="img25"
					/>
					<figcaption>
						<p class="icon-links">
							<a href="#">
								<IoIosHeart></IoIosHeart>
							</a>
							<a href="#">
								<span class="icon-eye"></span>
							</a>
							<a href="#">
								<span class="icon-paper-clip"></span>
							</a>
						</p>
						<p class="description">
							Zoe never had the patience of her sisters. She deliberately
							punched the bear in his face.
						</p>
					</figcaption>
				</figure>
			</div>
		</>
	);
};
