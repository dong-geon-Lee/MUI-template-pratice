import Routes from 'routes';
import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
