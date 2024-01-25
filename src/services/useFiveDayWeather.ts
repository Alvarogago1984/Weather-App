import { useState, useEffect, useContext } from 'react';
import { CurrentWeatherContext } from '../context/CurrentWeatherContext';

interface WeatherFiveDay {
  city: {
    id: number;
  };
  list: {
    clouds: {
      all: number;
    };
    dt: number;
    dt_txt: string;
    main: {
      feels_like: number;
      grnd_level: number;
      humidity: number;
      pressure: number;
      sea_level: number;
      temp: number;
      temp_kf: number;
      temp_max: number;
      temp_min: number;
    };
    pop: number;
    rain?: {
      '3h': number;
    };
    sys: {
      pod: string;
    };
    visibility: number;
    weather: Array<{
      description: string;
      icon: string;
      id: number;
      main: string;
    }>;
    wind: {
      deg: number;
      gust: number;
      speed: number;
    };
  }[];
  cityLocal: string;
}
interface WeatherFiveDayResponse {
  weatherFiveData: WeatherFiveDay | null;
}

export const useFiveDayWeather = (): WeatherFiveDayResponse => {
  const [weatherFiveData, setWeatherFiveData] = useState<WeatherFiveDay | null>(
    null,
  );
  const { lonLatValue = null } = useContext(CurrentWeatherContext) || {};

  useEffect(() => {
    const fetchFiveDay = async () => {
      try {
        const latitude = lonLatValue?.lat;
        const longitude = lonLatValue?.lon;
        const url =
          latitude && longitude
            ? `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=840fdbbddab09b30463280b8c2a850ed&lang=es&units=metric`
            : `https://api.openweathermap.org/data/2.5/forecast?q=${'Huelva'}&appid=840fdbbddab09b30463280b8c2a850ed&lang=es&units=metric`;

        const response = await fetch(url);
        const data = await response.json();
        setWeatherFiveData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchFiveDay();
  }, [lonLatValue]);
  return { weatherFiveData };
};
