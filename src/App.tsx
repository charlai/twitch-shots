import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { History } from 'history';
import SubmitNFT from './components/SubmitNFT'

const Index = () => {
  return (<div> hi </div>)
}

interface IAppProps {
  history: History
}

export default function App(props: IAppProps) {
  const { history } = props;

  return (
    <Router history={history}>
        <Switch>
          <Route exact path='/mint' component={SubmitNFT} />
          <Route path='/' component={Index} />
        </Switch>
    </Router>
  );
}