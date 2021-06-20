import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageFocus from './components/pages/PageFocus';
import PageSession from './components/pages/PageSession';
import { TemplateApp } from './components/templates/TemplateApp';

export const App = ({ store }: { store: any }) => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <TemplateApp>
            <Route exact path="/sessions" component={PageSession}></Route>
            <Route exact path="/focuses" component={PageFocus}></Route>
            <Route exact path="/" component={PageSession}></Route>
          </TemplateApp>
        </Switch>
      </Router>
    </Provider>
  );
};
