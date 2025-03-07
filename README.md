# @cozka/react-style-proxy

`@cozka/react-style-proxy` is a package that applies style-related properties of a component to standard React `style`, [Emotion](https://emotion.sh/docs/introduction) `css`, or other similar properties.

**[日本語のREADMEはこちら](./README.ja.md)**

## Installation

```sh
npm install @cozka/react-style-proxy
```

## Usage

This package applies style-related properties to `style`, `css`, `sx`, etc.

```tsx
import proxyStyle from '@cozka/react-style-proxy';

const props = {
  style: {
    backgroundColor: 'black',
  },
  value: 'ABC',
};

const style = {
  color: 'red',
  margin: '10px',
};

const styledProps = proxyStyle(props, style);
console.log(styledProps);
// Output: { style: { backgroundColor: 'black', color: "red", margin: "10px" }, value: "ABC" }
```

## Options

You can customize the behavior by passing `StyleProxyOptions`.

```tsx
// If the css property contains an object, create a new array and add it
const options = {
  styleProp: 'css',
  styleApplyMode: 'append',
};

const newProps = proxyStyle(props, style, options);
```

### `styleProp`

- Accepts `style`, `css`, `sx`, or any other property
- Specifies where to apply the style-related properties
- Default: `style`

### `styleApplyMode`

- Accepts `merge` or `append`
- Defines the behavior when the specified `styleProp` already contains an object
  - `merge`: Merges the styles
  - `append`: Creates a new array and adds the styles
- Default: `merge`

## License

MIT License
