import React from 'react';
import ReactDOM from 'react-dom/client';
import Table from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const animals = [
  {type: `turtle`, icon: `🐢`},
  {type: `octopus`, icon: `🐙`},
  {type: `fish`, icon: `🐠`},
  {type: `flamingo`, icon: `🦩`},
  {type: `penguin`, icon: `🐧`}
];

root.render(
  <React.Fragment>
    <Table list={animals}></Table>
  </React.Fragment>
);