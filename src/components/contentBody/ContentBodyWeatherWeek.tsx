import { useDayWeek } from '../../lib/useDayWeek';
import {
  WeatherWeek,
  DayWeek,
  DayOfWeek,
  DayWeekImg,
  DayWeekTempMaxMin,
  Max,
  Min,
} from '../../styles/ContentBodyWeatherWeekCss';

export const ContentBodyWeatherWeek = ({
  isFahrenheit,
}: {
  isFahrenheit: boolean;
}) => {
  // Extract weather data from custom hooks.
  const { dayOfWeek, iconImg, formatMaxTemperature, formatMinTemperature } =
    useDayWeek();

  return (
    <WeatherWeek>
      <DayWeek>
        <DayOfWeek>Tomorrow</DayOfWeek>
        <DayWeekImg
          src={`https://openweathermap.org/img/wn/${iconImg(0)}@2x.png`}
          alt="Weather Icon"
        />
        <DayWeekTempMaxMin>
          <Max>{formatMaxTemperature(0, isFahrenheit)}</Max>
          <Min>{formatMinTemperature(0, isFahrenheit)}</Min>
        </DayWeekTempMaxMin>
      </DayWeek>
      <DayWeek>
        <DayOfWeek>{dayOfWeek(1)}</DayOfWeek>
        <DayWeekImg
          src={`https://openweathermap.org/img/wn/${iconImg(1)}@2x.png`}
          alt="Weather Icon"
        />
        <DayWeekTempMaxMin>
          <Max>{formatMaxTemperature(1, isFahrenheit)}</Max>
          <Min>{formatMinTemperature(1, isFahrenheit)}</Min>
        </DayWeekTempMaxMin>
      </DayWeek>
      <DayWeek>
        <DayOfWeek>{dayOfWeek(2)}</DayOfWeek>
        <DayWeekImg
          src={`https://openweathermap.org/img/wn/${iconImg(2)}@2x.png`}
          alt="Weather Icon"
        />
        <DayWeekTempMaxMin>
          <Max>{formatMaxTemperature(2, isFahrenheit)}</Max>
          <Min>{formatMinTemperature(2, isFahrenheit)}</Min>
        </DayWeekTempMaxMin>
      </DayWeek>
      <DayWeek>
        <DayOfWeek>{dayOfWeek(3)}</DayOfWeek>
        <DayWeekImg
          src={`https://openweathermap.org/img/wn/${iconImg(3)}@2x.png`}
          alt="Weather Icon"
        />
        <DayWeekTempMaxMin>
          <Max>{formatMaxTemperature(3, isFahrenheit)}</Max>
          <Min>{formatMinTemperature(3, isFahrenheit)}</Min>
        </DayWeekTempMaxMin>
      </DayWeek>
      <DayWeek>
        <DayOfWeek>{dayOfWeek(4)}</DayOfWeek>
        <DayWeekImg
          src={`https://openweathermap.org/img/wn/${iconImg(4)}@2x.png`}
          alt="Weather Icon"
        />
        <DayWeekTempMaxMin>
          <Max>{formatMaxTemperature(4, isFahrenheit)}</Max>
          <Min>{formatMinTemperature(4, isFahrenheit)}</Min>
        </DayWeekTempMaxMin>
      </DayWeek>
    </WeatherWeek>
  );
};
