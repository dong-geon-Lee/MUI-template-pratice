import Routes from 'routes';
import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
import Locales from 'components/Locales';
import Notistack from 'components/third-party/Notistack';

const App = () => {
  return (
    <Locales>
      <AuthProvider>
        <>
          <Notistack>
            <Routes />
          </Notistack>
        </>
      </AuthProvider>
    </Locales>
  );
};

export default App;
