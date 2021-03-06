/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at https://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at https://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at https://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at https://polymer.github.io/PATENTS.txt
 */

/* eslint-env node */

module.exports = {
  staticFileGlobs: [
    '/index.html',
    '/manifest.json',
    '/bower_components/webcomponentsjs/*',
  ],
  navigateFallback: 'index.html',
  runtimeCaching: [
    {
      urlPattern: /bbc-backend-test.matteohertel.com/,
      handler: 'networkFirst',
    },
    {
      urlPattern: /\//,
      handler: 'networkFirst',
    },
    {
      urlPattern: /https:\/\/fonts.googleapis.com\/*/,
      handler: 'fastest',
    },    
    {
      urlPattern: /https:\/\/cdn.matteohertel.com\/*/,
      handler: 'fastest',
    },
  ],
};
