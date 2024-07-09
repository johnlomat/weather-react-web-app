import axios from "axios";
import { publicIp } from "public-ip";

const BASE_API_URL = process.env.REACT_APP_OPENWEATHER_API;

class WeatherService {
  async getInitialCountryWeather() {
    return axios.get(`${BASE_API_URL}&q=${await publicIp()}`);
  }

  async getCurrentWeatherBulk() {
    const bulkRequests = [
      "Manila Philippines",
      "Cavite Philippines",
      "Laguna Philippines",
      "Batangas Philippines",
      "Quezon Province Philippines",
      "Baguio Philippines",
      "Batanes Philippines",
      "Pulilan Bulacan Philippines",
      "Albay Bicol Philippines",
      "Samar Philippines",
      "Cebu Philippines",
      "Leyte Philippines",
      "Davao Philippines",
      "Zamboanga Philippines",
      "Cagayan de Oro Philippines",
      "General Santos Philippines",
    ];

    let cities = [];

    const requestPromises = bulkRequests.map(async (bulkRequest) => {
      const response = await axios.get(`${BASE_API_URL}&q=${bulkRequest}`);
      cities.push(response.data);
    });

    await Promise.all(requestPromises);

    return cities;
  }
}

export default new WeatherService();
