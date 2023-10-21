import {
  ChakraProvider
} from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import MainRoutes from './routes';
import { Providers } from './providers';

function App() {
  return (
    <BrowserRouter>
      <Providers>
        <ChakraProvider>
          <Layout>
            < MainRoutes />
          </Layout>
        </ChakraProvider>
      </Providers>
    </BrowserRouter>
  );
}

export default App;
