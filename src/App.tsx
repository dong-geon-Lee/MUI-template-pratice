import Routes from 'routes';
import { FirebaseProvider as AuthProvider } from 'contexts/FirebaseContext';
import Locales from 'components/Locales';
import Notistack from 'components/third-party/Notistack';
import Snackbar from 'components/@extended/Snackbar';
import ScrollTop from 'components/ScrollTop';
import RTLLayout from 'components/RTLLayout';
import { useEffect, useState } from 'react';
import { dispatch } from 'store';
import { fetchDashboard } from 'store/reducers/menu';
import Loader from 'components/Loader';
import ThemeCustomization from 'themes';

const App = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    dispatch(fetchDashboard()).then(() => setLoading(true));
  }, []);

  if (!loading) return <Loader />;

  return (
    <ThemeCustomization>
      <RTLLayout>
        <Locales>
          <ScrollTop>
            <AuthProvider>
              <>
                <Notistack>
                  <Routes />
                  <Snackbar />
                </Notistack>
              </>
            </AuthProvider>
          </ScrollTop>
        </Locales>
      </RTLLayout>
    </ThemeCustomization>
  );
};

export default App;
