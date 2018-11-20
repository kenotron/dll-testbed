import { FooComponent } from 'foolib';
import { Button } from 'office-ui-fabric-react';
import React from 'react';
import ReactDOM from 'react-dom';

var el = document.createElement('div');
document.body.appendChild(el);
ReactDOM.render(
  <div>
    <Button>Hello</Button>
    <FooComponent />
  </div>,
  el
);
