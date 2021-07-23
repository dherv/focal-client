import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppFetcher from './AppFetcher';
import { PageAuth } from './components/pages/PageAuth';
import PageFocus from './components/pages/PageFocus';
import PageSession from './components/pages/PageSession';
import { PageSpot } from './components/pages/PageSpot';
import { TemplateApp } from './components/templates/TemplateApp';

export const App = () => {
  return (
    <Router>
      <AppFetcher />
      <Switch>
        <TemplateApp>
          <Route exact path="/auth" component={PageAuth}></Route>
          <Route exact path="/spots" component={PageSpot}></Route>
          <Route exact path="/sessions" component={PageSession}></Route>
          <Route exact path="/focuses" component={PageFocus}></Route>
          <Route exact path="/" component={PageSession}></Route>
        </TemplateApp>
      </Switch>
    </Router>
  );
};
