import Routes from 'routes';
import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
import Locales from 'components/Locales';

const App = () => {
  return (
    <Locales>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </Locales>
  );
};

export default App;
