# React Native App

This is a React Native App

## Structure

The project is structured under the Clean Architecture and MVVM (Model - View - Model View) architecture pattern, given its versatility when structuring data.

The project is programmed in TypeScript and written in TSX files.
Inside the project are two folders in the top directory, documented below.

### (II) Source (src)

This folder contains all the logic and primary setup of the app. Inside there are various folders that separate the application into different sections, which are:

#### (II.i) Config

#### (II.ii) Data

The data layer is where the adapters that are responsible for transforming the information between the domain and external systems are located.

External systems can be a web service, a database, etc.

#### (II.iii) Domain

The domain layer is where the application business and enterprise business logic resides.

#### (II.iv) Infraestructure

#### (II.v) UI

The presentation layer contains all the views of the application and the resources used in it.

- _(II.v.i) Assets:_ This folder contains the multimedia files used in the application, such as Images and Icons, Svg Files, Fonts, and Animations with [LottiFiles](https://lottiefiles.com/tag/reactnative).

- _(II.v.ii) Components:_ This folder contains all the entirely customized components for this app, which are reusable and documented.

- _(II.v.iii) Hooks:_ This folder contains the hooks used in the app to validate and render data in real-time.

- _(II.v.iv) Screens:_ This folder contains all the app's views. Each view has its respective folder, and within each one, a series of folder such as interfaces and the components that are going to be used only within that view. In addition, following the MVVM pattern, it should contain the view, viewModel, styles and index files.

- _(II.v.v) Routes:_ This folder contains the navigation stacks, split by the type of screen required (read Screens folder). When the backend gets connected, the data is prepared to travel between screens from the origin interfaces within navigation stacks. Consult more information in the [React Navigation](https://reactnavigation.org/docs/getting-started/) documentation in the [TypeScript](https://reactnavigation.org/docs/typescript) section.

#### **Note**

We use an "index.tsx" file for exporting files to improve data import.

## Design System

Design System
The design library used for the application is [Ui-Kitten](https://akveo.github.io/react-native-ui-kitten/) 5.1, based on the Eva Design System, which integrates a set of components of equivalent styles. The main benefit of this library is its real-time rendering.
Each component that integrates it consists of a series of properties which are:

### AccessoryLeft / AccessoryRight

This property sets an icon to the desired component, and it can be static or functional; in other words, it can be touchable and give functionality to the component or display the class of information that the component contains, so it is easier for the user to recognize.

### Appearance

This property serves mainly to give a specific style to specific components. In this case: remove outlines, give transparency, leave the text label of the component, and e property "appearance='material-ui';".

### Size

This property receives five different values and gives a fixed size to the selected component. Each component has a different default size:

- Tiny
- Small
- Medium
- Large
- Giant

### Status

This property defines the status of the component; similar to"size," each component has a different default status, which can be:

- Basic
- Primary
- Success
- Warning
- Info
- Danger
- Control

### Advice

To review the styles of each component, review Mapping.TSX file found in /utils/theme/Mapping.TSX.

For more information about the design system, see the complete [Ui-Kitten](https://akveo.github.io/react-native-ui-kitten/docs/guides/getting-started#getting-started) documentation.

### Usage/Examples

```javascript
import { View } from 'react-native';
import { Chip } from '../components';
import { Button } from '@ui-kitten/components';

export default () => {
  return (
    <View>
      <Button
        appearance=”outline”
        status=”info”
        size=”giant”>
        Click me!
      </Button>

      <Chip
        status="control"
        size="medium"
        style={{ marginTop: 20}}>
        Select me!
      </Chip>
    </View>
  );
};
```

## Deployment

To deploy this project on Android run

```bash
  yarn run android
```

To deploy this project on IOS run

```bash
  yarn run ios
```

## Installation dependencies

Installation of new dependencies is through the Yarn package manager

```bash
  yarn add package-name
```

## Customize fonts

If you need to change the default fonts, replace the existing fonts or add your own custom fonts in the `src/ui/assets/fonts` folder and run the following command:

```bash
  yarn run link-assets
```

## Clear cache

If you need to clear the console cache, close the current console (only if you have it open), and run the following command

```bash
  yarn run clean
```
