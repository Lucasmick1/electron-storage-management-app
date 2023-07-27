import { Route, MemoryRouter as Router, Routes } from 'react-router-dom';
import Page from 'renderer/Components/Page';
import Create from 'renderer/Pages/Create/Create';
import Home from 'renderer/Pages/Home/Home';
import Product from 'renderer/Pages/Product/Product';
import WithBackPage from 'renderer/Pages/WithBackPage/WithBackPage';
import WithNavbar from 'renderer/Pages/WithNavbar/WithNavbar';

const DefaultRoutes = () => (
  <Router>
    <WithNavbar>
      <WithBackPage>
        <Routes>
          <Route
            path="/create"
            element={
              <Page>
                <Create />
              </Page>
            }
          />
          <Route
            path="/list"
            element={
              <Page>
                <Home />
              </Page>
            }
          />

          <Route
            path="/product/:id"
            element={
              <Page>
                <Product />
              </Page>
            }
          />
          <Route
            path="*"
            element={
              <Page>
                <Home />
              </Page>
            }
          />
        </Routes>
      </WithBackPage>
    </WithNavbar>
  </Router>
);

export default DefaultRoutes;
