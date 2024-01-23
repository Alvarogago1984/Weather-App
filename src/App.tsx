import { Sidebar } from './components/sidebar/Sidebar';
import { ContentBody } from './components/contentBody/ContentBody';
import { ContentMain } from './styles/AppCss';
import { useState } from 'react';

function App() {
  const [ isFahrenheit, setIsFahrenheit] = useState<boolean>(true)
  return (
    <ContentMain>
      <Sidebar isFahrenheit={isFahrenheit} />
      <ContentBody setFahrenheit={setIsFahrenheit} isFahrenheit={isFahrenheit}/>
    </ContentMain>
  );
}

export default App;
