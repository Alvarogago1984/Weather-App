import { Sidebar } from './components/Sidebar';
import { ContentBody } from './components/ContentBody';
import { ContentMain } from './styles/AppCss';

function App() {
  return (
    <ContentMain>
      <Sidebar />
      <ContentBody />
    </ContentMain>
  );
}

export default App;
