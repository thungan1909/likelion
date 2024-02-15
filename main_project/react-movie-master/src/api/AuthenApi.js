import API_KEY from "../utils/apiKey";
import AxiosClient from "./AxiosClient";
export default class AuthenApi {
  static async CreateRequestToken() {
    let data;
    //    let token;
    try {
      const response = await AxiosClient.get(
        `/authentication/token/new?api_key=${API_KEY}`
      );

      data = response.request_token;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
  static async CreateSession({ approvedToken }) {
    let data;
    try {
      const response = await AxiosClient.post(
        `/authentication/session/new?api_key=${API_KEY}&request_token=${approvedToken}`
      );
      data = response.session_id;
    } catch (error) {
      // throw new Error(error.message);
      throw new Error(error.status_message);
    }
    return data;
  }
  static async DeleteSession({ sessionId }) {
    let data;

    try {
      const response = await AxiosClient.delete(
        `/authentication/session?api_key=${API_KEY}&session_id=${sessionId}`
      );
      data = response;
    } catch (error) {
      throw new Error(error.status_message);
    }
    return data;
  }
}
