import { useDateUtilFiveDay } from '../lib/useDateUtilFiveDay';
import { formatDate } from './formatDate';

export const useDayWeek = () => {
  const { datesFilter } = useDateUtilFiveDay();

  const dayOfWeek = (number: number) => {
    return formatDate(datesFilter?.[number]?.dt_txt || '');
  };

  const iconImg = (number: number) => {
    return datesFilter?.[number].weather.map((weathe) => weathe.icon);
  };

  const temperatureCelsiusMax = (number: number):number => {
    return datesFilter ? Math.round(datesFilter?.[number].main.temp_max) : 0;
  };

  const temperatureCelsiusMin = (number: number):number => {
    return datesFilter ? Math.round(datesFilter?.[number].main.temp_min) : 0;
  };

  const temperatureFahrenheitMaxMin = (temperature: number):number => {
    return Math.round((temperature * 9) / 5 + 32);
  };
  
  const formatMaxTemperature = (number: number, isFahrenheit:boolean):number | string => {
    return isFahrenheit
      ? temperatureCelsiusMax(number) + 'ºC'
      : temperatureFahrenheitMaxMin(temperatureCelsiusMax(number)) + 'ºF';
  };

  const formatMinTemperature = (number: number, isFahrenheit:boolean):number | string => {
    return isFahrenheit
      ? temperatureCelsiusMin(number) + 'ºC'
      : temperatureFahrenheitMaxMin(temperatureCelsiusMin(number)) + 'ºF';
  };

  return {
    dayOfWeek,
    formatMaxTemperature,
    formatMinTemperature,
    iconImg,
  };
};
