import { apiUrl } from "./config.json"
import httpService from "./httpService";


export function getGenres() {

    return httpService.get(apiUrl + "/genres");
}
