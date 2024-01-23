import { useCurrentWeather } from '../../services/useCurrentWeather';
import GpsIcon from '../../assets/icons/gps.svg';
import Location from '../../assets/icons/location.svg';
import { useDateUtilCurrentDay } from '../../lib/useDateUtilCurrentDay';
import {
  SidebarSection,
  TopDiv,
  Input,
  IconGps,
  WeatherData,
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

interface SidebarProps {
  isFahrenheit: boolean;
}

export const Sidebar = ({ isFahrenheit }: SidebarProps) => {
  const { weatherData } = useCurrentWeather();
  const {
    dayDate,
    monthDate,
    temperature,
    dayNameSort,
    temperatureFahrenheit,
  } = useDateUtilCurrentDay();

  return (
    <SidebarSection>
      <TopDiv>
        <Input type="text" placeholder="Seach for places" />
        <IconGps>
          <img src={GpsIcon} alt="Icon GPS" />
        </IconGps>
      </TopDiv>
      {weatherData?.weather.map((weathe) => (
        <WeatherData key={weathe.id}>
          <ImgDescription
            src={`https://openweathermap.org/img/wn/${weathe.icon}@2x.png`}
            alt="Weather Icon"
          />
          <Temperature>
            {isFahrenheit ? temperature : temperatureFahrenheit}
            <TemperatureText>{isFahrenheit ? 'ºC' : 'ºF'}</TemperatureText>
          </Temperature>
          <WeatherMain>{weathe.main}</WeatherMain>
        </WeatherData>
      ))}
      <ContainerDate>
        <DateDay>
          {'Today'}
          <DateDaypoint>•</DateDaypoint>
          {dayNameSort + ', ' + dayDate + ' ' + monthDate}
        </DateDay>
        <DatePlace>
          <LocationImg src={Location} alt="Location Icon" />
          {weatherData?.name}
        </DatePlace>
      </ContainerDate>
    </SidebarSection>
  );
};
