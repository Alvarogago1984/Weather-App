import { useEffect, useState, Dispatch } from 'react';
export interface WeatherData {
  base: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lat: number;
    lon: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    grnd_level: number;
    humidity: number;
    pressure: number;
    sea_level: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  }[];
  wind: {
    deg: number;
    gust: number;
    speed: number;
  };
}
export interface LongLatValueProps {
  lat: number;
  lon: number;
  stateCountry: string;
  name:string;
}
export interface UseCurrentWeatherData {
  weatherData?: WeatherData | null;
  city: string;
  setCity: Dispatch<React.SetStateAction<string>>;
  cityLocal?: string;
  setCityLocal: Dispatch<React.SetStateAction<string>>;
  setLonLatValue: Dispatch<React.SetStateAction<LongLatValueProps | undefined>>;
  lonLatValue: LongLatValueProps | undefined;
}

export const useCurrentWeather = (): UseCurrentWeatherData => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [city, setCity] = useState<string>('');
  const [cityLocal, setCityLocal] = useState<string>(city);
  const [lonLatValue, setLonLatValue] = useState<LongLatValueProps>();

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const latitude = lonLatValue?.lat;
        const longitude = lonLatValue?.lon;
        const url =
          latitude && longitude
            ? `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=840fdbbddab09b30463280b8c2a850ed&lang=es&units=metric`
            : `https://api.openweathermap.org/data/2.5/weather?q=${'Huelva'}&appid=840fdbbddab09b30463280b8c2a850ed&lang=es&units=metric`;
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, [lonLatValue]);

  return {
    weatherData,
    city,
    setCity,
    cityLocal,
    setCityLocal,
    setLonLatValue,
    lonLatValue
  };
};
