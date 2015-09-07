import element from 'dekujs/virtual-element';
import { deku, render } from 'dekujs/deku';
import Performance from '../lib';

let app = deku(<Performance corner="topRight" />);

render(app, document.querySelector('main'));
