import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
import axios from "axios";

const getWeather = async (city) => {
  const token = await getKeyValue(TOKEN_DICTIONARY.token);
  if (!token) {
    throw new Error("API key not set, set it with -t [API_KEY]");
  }

  const cityData = await axios.get("https://api.openweathermap.org/geo/1.0/direct?", {
    params: {
      q: city,
      appid: token,
      units: "metric",
    },
  });

  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather?", {
    params: {
      lat: cityData.data[0].lat,
      lon: cityData.data[0].lon,
      appid: token,
      units: "metric",
    },
  });

  return data;
};

export { getWeather };
