"use strict";

const defaultListenPort = 3000;

const portFromEnv = () => {
  const x = parseInt(process.env.PORT, 10);
  /* istanbul ignore next */
  return (x !== null && !isNaN(x)) ? x : defaultListenPort;
};

module.exports = {
  "plugins": {
    "inert": {
      "enable": true
    },
    "electrodeStaticPaths": {
      "enable": true,
      "options": {
        "pathPrefix": "dist"
      }
    },
    "../demo-app/src/server/search-api": {},
    "../demo-app/src/server/component-api": {},
    "../demo-app/src/server/webapp": {
      "options": {
        "pageTitle": "Electrode Explorer",
        "devServer": {
          "port": "2992"
        },
        "paths": {
          "/{args*}": {
            "view": "index",
            "content": {
              "module": "../demo-app/{{env.APP_SRC_DIR}}/server/views/index-view"
            }
          }
        }
      }
    }
  },
  "connections": {
    "default": {
      "host": process.env.HOST,
      "address": process.env.HOST_IP || "0.0.0.0",
      "port": portFromEnv(),
      "routes": {
        "cors": true
      },
      "state": {
        "ignoreErrors":true
      }
    }
  },
  "githubApi": {
    "version": "3.0.0",
    "pathPrefix": "",
    "protocol": "https",
    "host": "api.github.com"
  },
  "ORGS": [

  ],

  "REPOS_USAGE_INCLUDE": [

  ],

  "REPOS_USAGE_EXCLUDE": [

  ],

  "MODULE_PREFIXES_INCLUDE": [

  ],

  "NPM_WAITING_TIME": 300000,

  "GHACCESS_TOKEN_NAME": "GHACCESS_TOKEN"
};
