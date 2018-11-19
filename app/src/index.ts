import { KeyCodes } from 'foolib/lib/index';

function blah() {
  const code: KeyCodes = KeyCodes.enter;
  console.log(code);

  var el = document.createElement('div');
  document.body.appendChild(el);
  el.innerText = String(code);
}

blah();
