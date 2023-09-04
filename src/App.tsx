import React from 'react';
import cn from 'classnames';
import GameWrapper from './components/GameWrapper/GameWrapper';
import c from './App.module.scss';

const App = () => {
  return (
    <>
      <div className={cn(c.app)}>
        <GameWrapper />
      </div>
    </>
  );
};

export default App;
