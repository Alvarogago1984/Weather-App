import { useContext, useState } from 'react';
import GpsIcon from '../../assets/icons/gps.svg';
import Location from '../../assets/icons/location.svg';
import { useDateUtilCurrentDay } from '../../lib/useDateUtilCurrentDay';
import {
  SidebarSection,
  TopDiv,
  Input,
  IconGps,
  WeatherDat,
  ImgDescription,
  Temperature,
  TemperatureText,
  WeatherMain,
  ContainerDate,
  DateDay,
  DatePlace,
  LocationImg,
  DateDaypoint,
} from '../../styles/SidebarCss';
import { CurrentWeatherContext } from '../../context/CurrentWeatherContext';
import { SidebarSearch } from '../sidebar/SidebarSearch';
import { UseCurrentWeatherData } from '../../services/useCurrentWeather';
interface SidebarProps {
  isFahrenheit: boolean;
}

export const Sidebar = ({ isFahrenheit }: SidebarProps) => {
  const [stateInput, setStateInput] = useState<boolean>(true);

  const {
    weatherData = null,
    city = '',
    setCity = () => {},
    setCityLocal = () => {},
    cityLocal,
    setLonLatValue = () => {},
    lonLatValue,
  } = useContext<UseCurrentWeatherData | null>(CurrentWeatherContext) || {};
  
  const {
    dayDate,
    monthDate,
    temperature,
    dayNameSort,
    temperatureFahrenheit,
  } = useDateUtilCurrentDay();

  const handleStateInput = () => {
    setStateInput(false);
    setCityLocal('');
  };
  return (
    <SidebarSection>
      {stateInput ? (
        <>
          <TopDiv>
            <Input
              type="text"
              placeholder="Seach for places"
              onClick={handleStateInput}
            />
            <IconGps>
              <img src={GpsIcon} alt="Icon GPS" />
            </IconGps>
          </TopDiv>
          {weatherData?.weather && (
            <WeatherDat key={weatherData.weather[0]?.id}>
              <ImgDescription
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0]?.icon}@2x.png`}
                alt="Weather Icon"
              />
              <Temperature>
                {isFahrenheit ? temperature : temperatureFahrenheit}
                <TemperatureText>{isFahrenheit ? 'ºC' : 'ºF'}</TemperatureText>
              </Temperature>
              <WeatherMain>{weatherData.weather[0].main}</WeatherMain>
            </WeatherDat>
          )}
          <ContainerDate>
            <DateDay>
              {'Today'}
              <DateDaypoint>•</DateDaypoint>
              {dayNameSort + ', ' + dayDate + ' ' + monthDate}
            </DateDay>
            <DatePlace>
              <LocationImg src={Location} alt="Location Icon" />
              {lonLatValue
                ? lonLatValue.name + ', ' + lonLatValue.stateCountry
                : weatherData?.name}
            </DatePlace>
          </ContainerDate>
        </>
      ) : (
        <SidebarSearch
          setStateInput={setStateInput}
          city={city}
          setCity={setCity}
          setCityLocal={setCityLocal}
          cityLocal={cityLocal}
          setLonLatValue={setLonLatValue}
          lonLatValue={lonLatValue}
        />
      )}
    </SidebarSection>
  );
};
