# NPM Web API Wrapper for Node

A simple collection of useful npm.org requests.

## Installation

```
npm install npm-web-api
```

## Usage

Requiring `npm-web-api` returns an object of Functions as described below. No
`new` required, nothing to `create`, nada. In the descriptions, `npmapi` refers
to the returned module instance as if preceded by:

```
var npmapi = require('npm-web-api')
```

### npmapi.getModulesByUser(username, callback)

Calls `callback` with either an Error or an Array of module names maintained by
`username`, expressed as a String.
