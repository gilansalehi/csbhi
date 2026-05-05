import { set, get } from './vcomponent.js';
import { emit, on, load, q } from './utils.js';
import './metadata.js';

Object.assign(window, { emit, on, set, get });

