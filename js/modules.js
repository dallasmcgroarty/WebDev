// modules ES6 + Webpack2

// export
export const add = (a, b) => a + b;

// or
export default function add () {
  return a + b;
} 

// import
import { add } from 'module.js';

// or
import add from 'module.js';