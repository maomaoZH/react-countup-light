# react-countup-light
This is a count up component in much light version.

## demo
<img src="https://github.com/maomaoZH/react-countup-light/blob/master/demo.gif" alt="demo" />

## Installation
```
yarn add react-countup-light
```
or 
```
npm install react-countup-light
```

## How to use it
```js
import React from 'react';
import { render } from 'react-dom';
import CountUp from 'react-countup-light';

render(
  <CountUp startNum={0} endNum={30} duration={2000} />,
  document.getElementById('root')
);
```
### Props

##### `startNum`: number
Start value

##### `endNum`: number
End value

##### `duration`: number
Duration in milliseconds

##### `className`: string
You can define your own class here

## License
MIT
