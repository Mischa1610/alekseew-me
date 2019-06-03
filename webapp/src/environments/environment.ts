/****************************************************************************************
 * This is the development (DEV) environment configuration.                             *
 *                                                                                      *
 * This file can be replaced during build by using the `fileReplacements` array.        *
 * The build system defaults to the dev environment which uses `environment.ts`,        *
 * but `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.         *
 * The list of file replacements can be found in `angular.json`.                        *
 ****************************************************************************************/

import { environmentBase } from './environment.base';

export const environment = {
    ...environmentBase,
    // Only change properties that needs to be changed from the base environment!
    envName: 'DEV'
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
import 'zone.js/dist/zone-error'; // Included with Angular CLI.
