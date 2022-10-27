import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ItemList from './pages/ItemList';
import ItemDetail from './pages/ItemDetail';
import GlobalStyle from './styles/GlobalStyle';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider } from 'react-redux';
import { store } from './store/store';
import NavBar from './components/common/NavBar';
import Footer from './components/common/Footer';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <NavBar />
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ItemDetail/:id" element={<ItemDetail />} />
            <Route path="/itemList" element={<ItemList />} />
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Provider>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
