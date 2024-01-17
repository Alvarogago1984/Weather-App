import { useCurrentWeather } from '../services/useCurrentWeather';

export const useDateUtils = () => {
  const { weatherData } = useCurrentWeather();

  const daysOfWeek = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];

  const month = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  const currentDate = new Date();
  const monthNumber = currentDate.getMonth();
  const dayName = daysOfWeek[currentDate.getDay()];
  const dayNameSort = dayName.slice(0, 3);
  const dayDate = currentDate.getDate();
  const monthDate = month[monthNumber].slice(0, 3);
  const temperature = (
    weatherData ? Math.floor(weatherData?.main.temp) : 0
  );


  return {
    dayDate,
    monthDate,
    temperature,
    dayNameSort,
  };
};
