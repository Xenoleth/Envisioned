import $ from 'jquery';
import Navigo from 'navigo';

import * as homeController from './controllers/homeController';

const root = null;
const useHash = true;
const hash = '#';
var router = new Navigo(root, useHash, hash);

router
    .on('/home', homeController)
    .resolve();