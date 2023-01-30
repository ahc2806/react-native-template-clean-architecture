# :honeybee: React Native Template Clean Architecture

This is a template for creating React Native projects based on Clean Architecture with preconfigured libraries for design, functionality, and navigation.

## :star: Features:

-   Pre-configured ProximaNova font
-   Pre-configured libraries 'React Native Vector Icons' and 'Eva Icons' for icons
-   Pre-configured folder structure for the Clean Architecture
-   Preconfigured 'React Native Asset' library to automatically link fonts
-   Navigation using [react-navigation](https://reactnavigation.org/) (v6)
-   State management using [redux](https://es.redux.js.org/)
-   Redux middleware [redux-saga](https://redux-saga.js.org/r)
-   Use of the [Ui-Kitten](https://akveo.github.io/react-native-ui-kitten/) design system to build stunning and consistent interfaces using atomic components by following the Eva Design System specifications.
-   Use of [Babel Plugin Module Resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) for static paths of project folders, configured in babel.config.js

## :warning: Prerequisites

1. Make sure that you have followed the environment setup instructions properly from the official [React Native docs](https://reactnative.dev/docs/environment-setup).

2. The installation command will fail if you have the global legacy `react-native-cli` and `react-native` installed in your machine. Make sure you uninstall it first:

```shell
yarn global remove react-native react-native-cli
```

or if using `npm`

```shell
npm uninstall -g react-native react-native-cli
```

## :arrow_forward: Usage

Generate a React Native (0.70.6) app using the **ahc2806/react-native-template-clean-architecture** template:

```bash
  npx react-native init ProjectName --template react-native-template-clean-architecture
  cd ProjectName
```

You might also be prompted to confirm the installation for the package `react-native`. Simply hit `enter` to proceed.

The template will automatically install the `npm` dependencies and the `pods` (if you are on the MacOS).

### Usage with older versions of React Native

#### e.g. `react-native@0.70.x`

```sh
npx react-native init ProjectName --template react-native-template-clean-architecture@0.2.4
```

See the below table to find out which version of the template to use.

#### React Native <=> Template Version

| React Native | Template |
| ------------ | -------- |
| 0.70         | 0.0.\*   |
| 0.71         | 0.4.\*   |

## :bookmark: License

This project is [MIT](LICENSE) licensed.
