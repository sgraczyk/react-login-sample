# Login Page Example with React and Redux
Example implementation of log in functionality using:
* [react](https://reactjs.org/)
* [redux](https://redux.js.org/)
* [redux-thunk](https://github.com/gaearon/redux-thunk)
* [redux-form](https://redux-form.com/)
* [styled-components](https://www.styled-components.com/)

It's based on `create-react-app`.

## Goals

Project aims to bring more or less `real world` experience of working with `react` and `redux`. To do so it incorporates considered directory structure and file naming.

## How to run

* `npm install` or `yarn`
* `npm start` or `yarn start`

Authentication is faked. Hardcoded valid credentials are:
* `test@test.pl`
* `Password`

## Further steps

Project is still open for improvements. Here are some ideas:

* Cleanup dependencies inherited from `create-react-app` boilerplate.
* Introduce better approach for base styles using `styled-components`.
  * Use a theme.
  * Use component props.
* Store user data in `localStorage` to persist `isAuthenticated`.
