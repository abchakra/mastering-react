import { apiUrl } from "./config.json"
import httpService from "./httpService";


const apiEndPoint = apiUrl + "/movies/";

export function getMovies() {

    return httpService.get(apiEndPoint);

}

export function deleteMovie(id) {
    httpService.delete(apiEndPoint + id);

}

export function getMovie(id) {
    return httpService.get(apiEndPoint + id);
}

export function saveMovie(movie) {


    const body = { ...movie }
    delete body._id;
    if (movie._id) {
        return httpService.put(apiEndPoint + movie._id, body)
    }
    console.log(body)
    return httpService.post(apiEndPoint, body)

}

