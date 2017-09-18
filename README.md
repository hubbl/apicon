# Node.js testen

## Initialisierung

npm init

npm install jasmine

npx jasmine init

oder node_modules/.bin/jasmine init

oder npm install -g jasmine -> jasmine init


## Test
spec/calculator.spec.js -> Test
src/calculator.js -> Source


## Watcher

Tests werden bei Änderungen im Dateisystem automatisch ausgeführt.

npm install -D nodemon

npx nodemon -w src/**/*.js -w spec/**/*.js --exec npx jasmine

Script in npm scripts aufnehmen

npm run watch

## Katas

https://github.com/sspringer82/katas