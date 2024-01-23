import { useFiveDayWeather } from '../services/useFiveDayWeather';

export const useDateUtilFiveDay = () => {
  const { weatherFiveData } = useFiveDayWeather();
 
  const datesFilter = weatherFiveData?.list.filter((a) =>
    a.dt_txt.endsWith('09:00:00'),
  );

  return { datesFilter };
};
