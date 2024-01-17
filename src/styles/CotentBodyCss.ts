import styled from 'styled-components';

export const ContentSection = styled.section`
  background: var(--color-secondary);
  display: flex;
  flex-direction: column;
`;
export const ChangeTemperature = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 42px;
  margin-bottom: 66px;
  @media (max-width: 500px) {
    display: none;
  }
`;
export const Celsius = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 54px;
  background: #e7e7eb;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;
export const Fahrenheit = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 54px;
  background: #585676;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 125px;
  box-sizing: border-box;
`;
export const FahrenheitText = styled.div`
  width: 16.19px;
  height: 20px;
  color: #e7e7eb;
  text-align: center;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-sizing: border-box;
`;
export const CelsiusText = styled.div`
  width: 18.095px;
  height: 20px;
  color: #110e3c;
  font-family: Raleway;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  box-sizing: border-box;
`;
export const WeatherWeek = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 26px;
  margin-bottom: 66px;
  @media (max-width: 500px) {
    justify-content: flex-start;
    margin-left: 54px;
    margin-top: 52px;
  } 
`;
export const DayWeek = styled.div`
  width: 120px;
  height: 177px;
  background: #1e213a;
`;
export const WeatherToday = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  >:first-child{
    margin-bottom:32px ;
  }
  &>:nth-child(2){
    margin-bottom: 48px;
   }
`;
export const ContentTextWeatherToday = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 500px) {
    margin-left: 21px;
  } 
`;
export const TextWeatherToday = styled.p`
  color: #e7e7eb;
  font-family: Raleway;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  justify-content: center;
  margin: 0;
`;
export const WindHumidity = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const VisibilityAirPressure = styled.div`
  display: flex;
  gap: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;

export const WindStatus = styled.div`
  width: 328px;
  height: 204px;
  background: #1e213a;
`;
export const Humidity = styled.div`
  width: 328px;
  height: 204px;
  background: #1e213a;
`;
export const Visibility = styled.div`
  width: 328px;
  height: 159px;
  background: #1e213a;
`;
export const AirPressure = styled.div`
  width: 328px;
  height: 159px;
  background: #1e213a;
`;
export const Footer = styled.footer`
color: #A09FB1;
text-align: center;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
margin-block: auto;
padding-top: 20px;
@media (max-width: 500px) {
  margin-top:96px ;
  margin-bottom: 24px;
}

`
export const UsernameFooter = styled.span`
color: #A09FB1;
font-family: Montserrat;
font-size: 14px;
font-style: normal;
font-weight: 700;
line-height: normal;
text-decoration-line: underline;
`