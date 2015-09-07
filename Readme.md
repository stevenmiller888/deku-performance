
# deku-performance
[![NPM version][npm-image]][npm-url]
[![license][license-image]][license-url]

A performance monitoring component built with Deku that uses accurate end-to-end latency data via the [Navigation Timing](https://developer.mozilla.org/en-US/docs/Web/API/Navigation_timing_API) API.

![](https://cldup.com/vuY4YllSLn.png)

## Installation

    $ npm install deku-performance

## Usage

It is recommended to conditionally render this component based on an environment variable (e.g. `window.env`):

```js
import Performance from 'stevenmiller888/deku-performance';

{
  window.env === 'development'
    ? <Performance corner="bottomRight"/>
    : null
}
```

## Resources

[W3](http://www.w3.org/TR/navigation-timing/#processing-model#processing-model)

## License

[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/perf.svg?style=flat-square
[npm-url]: https://npmjs.org/package/perf
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://tldrlegal.com/license/mit-license
