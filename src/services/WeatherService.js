import axios from "axios";
import { publicIpv4 } from "public-ip";

const BASE_API_URL = process.env.REACT_APP_OPENWEATHER_API;

export const getInitialCountryWeather = async () => {
  return axios.get(`${BASE_API_URL}&q=${await publicIpv4()}`);
};

export const getCurrentWeatherBulk = async () => {
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

  try {
    const requestPromises = bulkRequests.map(async (bulkRequest) => {
      const response = await axios.get(`${BASE_API_URL}&q=${bulkRequest}`);

      if (response.data.current && Object.keys(response.data.current).length !== 0) {
        cities.push(response.data);
      }
    });

    await Promise.all(requestPromises);
  } catch (error) {
    console.error("Error fetching bulk weather data:", error);
    // Handle error as needed
  }

  return cities;
};
