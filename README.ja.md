# @cozka/react-style-proxy

`@cozka/react-style-proxy` は、コンポーネントのスタイル関連のプロパティを、  
[React](https://react.dev/)標準の`style`や[Emotion](https://emotion.sh/docs/introduction)の`css`等のプロパティへ反映する機能を提供するパッケージです。

**[English README is available here](./README.md)**

## インストール

```sh
npm install @cozka/react-style-proxy
```

## 使い方

スタイル関連のプロパティを `style`、`css`、`sx` などに適用します。

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
// 出力: { style: { backgroundColor: 'black', color: "red", margin: "10px" }, value: "ABC" }
```

## オプション

`StyleProxyOptions` を渡すことで挙動をカスタマイズできます。

```tsx
// cssにオブジェクトが設定されている場合は新しい配列を作り追加する
const options = {
  styleProp: 'css',
  styleApplyMode: 'append',
};

const newProps = proxyStyle(props, style, options);
```

### `styleProp`

- `style`、`css`、`sx`、または任意のプロパティ
- スタイル関連のプロパティの設定先
- デフォルト: `style`

### `styleApplyMode`

- `merge`、`append`
- `styleProp`に指定したプロパティにオブジェクトが設定されていた場合の動作
  - `merge`: マージする
  - `append`: 新しい配列を作成し追加
- デフォルト: `merge`

## ライセンス

MIT License
