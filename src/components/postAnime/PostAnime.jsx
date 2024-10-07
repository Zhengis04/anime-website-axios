import React from "react";
import "./PostAnime.css";

const PostAnime = ({ animelist, onSelectAnime }) => {
	return (
		<div className="anime_list_container">
			{animelist.map((anime) => (
				<div
					className="anime_item"
					key={anime.mal_id}
					onClick={() => onSelectAnime(anime.mal_id)}>
					<h3>{anime.title}</h3>
					<p>Эпизоды: {anime.episodes}</p>
					<p>Оценка: {anime.score}</p>
					<img
						src={anime.images.jpg.image_url}
						alt={anime.title}
					/>
				</div>
			))}
		</div>
	);
};

export default PostAnime;
