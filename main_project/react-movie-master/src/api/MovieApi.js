import API_KEY from "../utils/apiKey";
import AxiosClient from "./AxiosClient";
export default class MovieApi {
  static async getTrending({ currentSegmented }) {
    let data = [];
    try {
      const response = await AxiosClient.get(
        `/trending/all/${currentSegmented}?api_key=${API_KEY}`
      );
      data = response.results;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
  static async getTopRated() {
    let data = [];
    try {
      const response = await AxiosClient.get(
        `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      );
      data = response.results;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
  static async getPopular() {
    let data = [];
    try {
      const response = await AxiosClient.get(
        `/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      );
      data = response.results;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
  static async getFilmDetail({ id }) {
    let data = [];
    try {
      const response = await AxiosClient.get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US`
      );
      data = response;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
  static async getSimilar({ id }) {
    let data = [];
    try {
      const response = await AxiosClient.get(
        `/movie/${id}/similar?api_key=${API_KEY}&language=en-US&page=1`
      );
      data = response.results;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
  static async getDataBySearch({ value }) {
    let data = [];
    try {
      const response = await AxiosClient.get(
        `/search/multi?api_key=${API_KEY}&query=${value}&language=en-US&page=1&include_adult=false`
      );
      data = response.results;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
}
