import { useCurrentWeather } from '../services/useCurrentWeather';
import GpsIcon from '../assets/icons/gps.svg';
import Location from '../assets/icons/location.svg';
import { useDateUtils } from '../lib/useDateUtils';
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
} from '../styles/SidebarCss';

export const Sidebar = () => {
  const { weatherData } = useCurrentWeather();
  const { dayDate, monthDate, temperature, dayNameSort } = useDateUtils();

  console.log(weatherData);

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
            {temperature}
            <TemperatureText>ºC</TemperatureText>
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
