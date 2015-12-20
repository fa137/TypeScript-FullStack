/// <reference path="../../.tmp/typings/tsd.d.ts" />

import { config } from './appConfig';
import { routes } from './routes';
import { rb } from './run';
import { MainController } from './main/main.controller';
import { AboutController } from './about/about.controller';


import { aetNav } from '../app/components/navbar/navbar.directive';


module skeleton {
  'use strict';

  angular.module('skeleton', ['ui.router'])
    .config(config)
    .config(routes)
    .run(rb)


    .controller('MainController', MainController)
    .controller('AboutController', AboutController)
    .directive('aetNav', aetNav);

}
