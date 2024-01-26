import { UseCurrentWeatherData } from '../../services/useCurrentWeather';
import CloseIcon from '../../assets/icons/close.svg';
import arrowIcon from '../../assets/icons/arrow.svg';
import {
  CloseImg,
  ContainerSidebarSearch,
  CloseDiv,
  SearchLocationDiv,
  SearchInput,
  SearchButton,
  SearchButtonText,
  ContainerSearchList,
  SearchListUl,
  SearchListLi,
  SearchListLiText,
  Arrow,
  SearchListLidiv,
} from '../../styles/SidebarSearchCSS';
import { useListCity } from '../../services/useListCity';
import { LongLatValueProps } from '../../services/useCurrentWeather';
import { Dispatch } from 'react';
interface SidebarSearchProps extends UseCurrentWeatherData {
  setStateInput: React.Dispatch<React.SetStateAction<boolean>>;
}
interface SidebarProps extends SidebarSearchProps {
  setLonLatValue: Dispatch<React.SetStateAction<LongLatValueProps | undefined>>;
  setIsCoords: React.Dispatch<React.SetStateAction<boolean>> | null;
}

export const SidebarSearch = ({
  setStateInput,
  setCity,
  city,
  setCityLocal,
  setLonLatValue,
  setIsCoords,
}: SidebarProps) => {
  const { listCity } = useListCity();

  const handleCloseSidebarSearch = () => {
    setStateInput(true);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    setCityLocal(city);
    setCity('');
  };

  const handleClickLatLong = (
    lat: number,
    lon: number,
    stateCountry: string,
    name: string,
  ) => {
    setLonLatValue({ lat, lon, stateCountry, name });
    setStateInput(true);
    if (setIsCoords) {
      setIsCoords(false);
    }
  };

  return (
    <ContainerSidebarSearch>
      <CloseDiv>
        <CloseImg
          src={CloseIcon}
          onClick={handleCloseSidebarSearch}
          alt="Close Icon"
        />
      </CloseDiv>
      <SearchLocationDiv onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="search location"
          value={city}
          onChange={(evt) => setCity(evt.target.value)}
        />
        <SearchButton type="submit">
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
      </SearchLocationDiv>

      <ContainerSearchList>
        <SearchListUl>
          {listCity &&
            listCity.map((list) => (
              <SearchListLi
                key={list.lat}
                onClick={() =>
                  handleClickLatLong(list.lat, list.lon, list.state, list.name)
                }
              >
                <SearchListLidiv>
                  <SearchListLiText>
                    {list.name}
                    {', '}
                    {list.state}{' '}
                  </SearchListLiText>
                  <Arrow src={arrowIcon} alt="Arrow Icon" />
                </SearchListLidiv>
              </SearchListLi>
            ))}
        </SearchListUl>
      </ContainerSearchList>
    </ContainerSidebarSearch>
  );
};
