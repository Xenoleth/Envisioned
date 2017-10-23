import $ from 'jquery';
import Navigo from 'navigo';

import * as homeController from '/static/scripts/controllers/homeController.js';
import * as articlesController from '/static/scripts/controllers/articlesController.js';
import * as registerController from '/static/scripts/controllers/registerController.js';
import * as loginController from '/static/scripts/controllers/loginController.js';
import * as singleArticleController from '/static/scripts/controllers/singleArticleController.js';

const root = null;
const useHash = true;
const hash = '#';
var router = new Navigo(root, useHash, hash);

router
    .on('/home', () => homeController.run())
    .on('/articles', () => articlesController.run())
    .on('/articles/single', () => singleArticleController.run())
    .on('/register', () => registerController.run())
    .on('/login', () => loginController.run())
    .on('', () => homeController.run())
    .resolve();