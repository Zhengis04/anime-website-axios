import React, { useState, useEffect } from "react";
import { useFetching } from "./hooks/useFetching";
import PostService from "./api/PostService";
import PostAnime from "./components/postAnime/PostAnime";
import SelectedAnime from "./components/selectedAnime/SelectedAnime";
function App() {
	const [animelist, setAnimeList] = useState([]);
	const [selectedAnime, setSelectedAnime] = useState(null);
	const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
		const response = await PostService.getAll();
		setAnimeList(response.data.data);
	});
	useEffect(() => {
		fetchPosts();
	}, []);
	const selectAnime = async (animeId) => {
		const response = await PostService.getAnimeById(animeId);
		setSelectedAnime(response.data.data);
	};
	return (
		<div>
			{isPostLoading && <h2>Загрузка...</h2>}
			{postError && <h2>Ошибка: {postError}</h2>}
			{!selectedAnime ? (
				<div>
					<h1 style={{ textAlign: "center" }}>Список аниме</h1>
					<PostAnime
						animelist={animelist}
						onSelectAnime={selectAnime}
					/>
				</div>
			) : (
				<SelectedAnime
					anime={selectedAnime}
					onBack={() => setSelectedAnime(null)}
				/>
			)}
		</div>
	);
}

export default App;
