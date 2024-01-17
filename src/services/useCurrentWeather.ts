import { useEffect, useState } from 'react';

interface WeatherData {
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  main: {
    temp: number
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  name: string;
}
interface UseCurrentWeatherData {
  weatherData: WeatherData | null;

}
export const useCurrentWeather = (): UseCurrentWeatherData => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  

  useEffect(() => {
    const fetchWeather = async () => {
    
      try {
        const url =
          'https://api.openweathermap.org/data/2.5/weather?q=Huelva&appid=840fdbbddab09b30463280b8c2a850ed&lang=es&units=metric';

        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
      
    };

    fetchWeather();
  }, []);

  return  {weatherData};
};
