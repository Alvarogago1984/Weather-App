import { useDayWeek } from '../../lib/useDayWeek';
import {
  WeatherWeek,
  DayWeek,
  DayOfWeek,
  DayWeekImg,
  DayWeekTempMaxMin,
  Max,
  Min,
  Loading,
  LoadingText,
} from '../../styles/ContentBodyWeatherWeekCss';

export const ContentBodyWeatherWeek = ({
  isFahrenheit,
}: {
  isFahrenheit: boolean;
}) => {
  // Extract weather data from custom hooks.
  const {
    dayOfWeek,
    iconImg,
    formatMaxTemperature,
    formatMinTemperature,
    loadingFive,
  } = useDayWeek();

  return (
    <WeatherWeek>
      <DayWeek>
        {!loadingFive ? (
          <>
            <DayOfWeek>Tomorrow</DayOfWeek>
            <DayWeekImg
              src={
                iconImg(0)
                  ? `https://openweathermap.org/img/wn/${iconImg(0)}@2x.png`
                  : ''
              }
              alt="Weather Icon"
            />
            <DayWeekTempMaxMin>
              <Max>{formatMaxTemperature(0, isFahrenheit)}</Max>
              <Min>{formatMinTemperature(0, isFahrenheit)}</Min>
            </DayWeekTempMaxMin>
          </>
        ) : (
          <Loading>
            <LoadingText>Loading...</LoadingText>
          </Loading>
        )}
      </DayWeek>

      <DayWeek>
        {!loadingFive ? (
          <>
            <DayOfWeek>{dayOfWeek(1)}</DayOfWeek>
            <DayWeekImg
              src={
                iconImg(1)
                  ? `https://openweathermap.org/img/wn/${iconImg(1)}@2x.png`
                  : ''
              }
              alt="Weather Icon"
            />
            <DayWeekTempMaxMin>
              <Max>{formatMaxTemperature(1, isFahrenheit)}</Max>
              <Min>{formatMinTemperature(1, isFahrenheit)}</Min>
            </DayWeekTempMaxMin>
          </>
        ) : (
          <Loading>
            <LoadingText>Loading...</LoadingText>
          </Loading>
        )}
      </DayWeek>
      <DayWeek>
        {!loadingFive ? (
          <>
            <DayOfWeek>{dayOfWeek(2)}</DayOfWeek>
            <DayWeekImg
              src={
                iconImg(2)
                  ? `https://openweathermap.org/img/wn/${iconImg(2)}@2x.png`
                  : ''
              }
              alt="Weather Icon"
            />
            <DayWeekTempMaxMin>
              <Max>{formatMaxTemperature(2, isFahrenheit)}</Max>
              <Min>{formatMinTemperature(2, isFahrenheit)}</Min>
            </DayWeekTempMaxMin>
          </>
        ) : (
          <Loading>
            <LoadingText>Loading...</LoadingText>
          </Loading>
        )}
      </DayWeek>
      <DayWeek>
        {!loadingFive ? (
          <>
            <DayOfWeek>{dayOfWeek(3)}</DayOfWeek>
            <DayWeekImg
              src={
                iconImg(3)
                  ? `https://openweathermap.org/img/wn/${iconImg(3)}@2x.png`
                  : ''
              }
              alt="Weather Icon"
            />
            <DayWeekTempMaxMin>
              <Max>{formatMaxTemperature(3, isFahrenheit)}</Max>
              <Min>{formatMinTemperature(3, isFahrenheit)}</Min>
            </DayWeekTempMaxMin>
          </>
        ) : (
          <Loading>
            <LoadingText>Loading...</LoadingText>
          </Loading>
        )}
      </DayWeek>
      <DayWeek>
        {!loadingFive ? (
          <>
            <DayOfWeek>{dayOfWeek(4)}</DayOfWeek>
            <DayWeekImg
              src={
                iconImg(4)
                  ? `https://openweathermap.org/img/wn/${iconImg(4)}@2x.png`
                  : ''
              }
              alt="Weather Icon"
            />
            <DayWeekTempMaxMin>
              <Max>{formatMaxTemperature(4, isFahrenheit)}</Max>
              <Min>{formatMinTemperature(4, isFahrenheit)}</Min>
            </DayWeekTempMaxMin>
          </>
        ) : (
          <Loading>
            <LoadingText>Loading...</LoadingText>
          </Loading>
        )}
      </DayWeek>
    </WeatherWeek>
  );
};
