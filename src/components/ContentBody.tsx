import {
  ContentSection,
  ChangeTemperature,
  Celsius,
  Fahrenheit,
  CelsiusText,
  FahrenheitText,
  WeatherWeek,
  WeatherToday,
  DayWeek,
  TextWeatherToday,
  WindStatus,
  Humidity,
  Visibility,
  AirPressure,
  WindHumidity,
  VisibilityAirPressure,
  ContentTextWeatherToday,
  Footer,
  UsernameFooter,
} from '../styles/CotentBodyCss';

export const ContentBody = () => {
  return (
    <ContentSection>
      <ChangeTemperature>
        <Celsius>
          <CelsiusText>ºC</CelsiusText>
        </Celsius>
        <Fahrenheit>
          <FahrenheitText>ºF</FahrenheitText>
        </Fahrenheit>
      </ChangeTemperature>

      <WeatherWeek>
        <DayWeek></DayWeek>
        <DayWeek></DayWeek>
        <DayWeek></DayWeek>
        <DayWeek></DayWeek>
        <DayWeek></DayWeek>
      </WeatherWeek>

      <WeatherToday>
        <ContentTextWeatherToday>
          <TextWeatherToday>Today’s Hightlights</TextWeatherToday>
        </ContentTextWeatherToday>
        <WindHumidity>
          <WindStatus></WindStatus>
          <Humidity></Humidity>
        </WindHumidity>
        <VisibilityAirPressure>
          <Visibility></Visibility>
          <AirPressure></AirPressure>
        </VisibilityAirPressure>
      </WeatherToday>
      <Footer>created by <UsernameFooter>Alvaro Garcia</UsernameFooter> - devChallenges.io</Footer>
    </ContentSection>
  );
};
