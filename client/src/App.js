import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import StreamShow from './components/streams/StreamShow';
import StreamCreate from './components/streams/StreamCreate';
import StreamEdit from './components/streams/StreamEdit';
import StreamDelete from './components/streams/StreamDelete';
import StreamList from './components/streams/StreamList';

import Header from './components/main/Header';

const App = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={StreamList} />
            <Route exact path='/streams/new' component={StreamCreate} />
            <Route
              exact
              path='/streams/edit/:streamId'
              component={StreamEdit}
            />
            <Route
              exact
              path='/streams/delete/:streamId'
              component={StreamDelete}
            />
            <Route exact path='/streams/:streamId' component={StreamShow} />
          </Switch>
        </div>
      </main>
    </Fragment>
  );
};

export default App;
