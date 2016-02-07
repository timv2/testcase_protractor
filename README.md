# testcase_protractor3
Just a poc to use protractor 3.0.0 and jasmine 2.3.2 features

# How this codebase is started
forked from AngularJS Phone Catalog Tutorial Application

# Prerequisites

- jdk 7 (needed if you run a local selenium)
- node 4.2 (needed by protractor 3.0.0 or higher)
	- Bower
- google chrome (needed since the chromedriver is setup in the config)

# Running the app during development

- Run `npm start`
- navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your browser.

# End to end testing

Requires a webserver that serves the application. See Running the app during development, above.

- Serve the application: run `npm start`.
- In a separate console run the end2end tests: `npm run protractor`. Protractor will execute the
  end2end test scripts against the web application itself.
  - The configuration is set up to run the tests on Chrome directly. If you want to run against
    other browsers then you must install the webDriver, `npm run update-webdriver`, and modify the
  configuration at `test/protractor-conf.js`.

# Technologies
- protractor 3.0.0
- ES6
- Selenium 2.48 and webdriver
- jasmine 2.3.2