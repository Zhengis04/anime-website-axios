import axios from "axios";
export default class PostService {
	static async getAll(animeId, title, score, episodes, imageUlr) {
		const response = await axios.get("https://api.jikan.moe/v4/top/anime");
		return response;
	}
	static async getAnimeById(animeId) {
		const response = await axios.get(
			`https://api.jikan.moe/v4/anime/${animeId}`
		);
		return response;
	}
}
