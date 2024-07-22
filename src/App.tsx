import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import routes from './routes/routes';
import PrivateRoute from './routes/PrivateRoute';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          {routes.map((route, index) => {
            if (route.isPrivate) {
              return <PrivateRoute key={index} {...route} />;
            }
            return <Route key={index} {...route} />;
          })}
        </Switch>
      </Router>
    </AuthProvider>
  );
};

export default App;