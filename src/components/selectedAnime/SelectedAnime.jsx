import React from "react";
import "./SelectedAnime.css";
const SelectedAnime = ({ anime, onBack }) => {
	return (
		<div className="anime-details-container">
			<button onClick={onBack}>Назад</button>
			<h2>{anime.title}</h2>
			<img
				src={anime.images.jpg.image_url}
				alt={anime.title}
			/>
			<p>
				<strong>Описание:</strong> {anime.synopsis}
			</p>
			<p>
				<strong>Тип:</strong> {anime.type}
			</p>
			<p>
				<strong>Эпизоды:</strong> {anime.episodes}
			</p>
			<p>
				<strong>Оценка:</strong> {anime.score}
			</p>
			<p>
				<strong>Дата выхода:</strong> {anime.aired.string}
			</p>
		</div>
	);
};

export default SelectedAnime;
