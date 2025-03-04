import { CSSProperties } from 'react';
import { StyleProxyOptions } from './types';

/**
 * スタイル関連のプロパティをスタイルプロパティ(styleやcss)へ適用する
 *
 * @param props プロパティ
 * @param style スタイル関連のプロパティ
 * @param options オプション
 * @returns
 */
export default function styleProxy<P = {}, S = CSSProperties>(
  props: P,
  style: S,
  options: StyleProxyOptions = {},
) {
  const { styleProp = 'style', styleApplyMode } = options;
  const resultProps = { ...props };

  if (style && Object.keys(style).length) {
    const additionalStyle = { ...style };
    // style関連のプロパティがある場合のみ処理
    const orgStyle = resultProps[styleProp];
    if (!orgStyle) {
      // 未設定の場合はそのまま設定
      resultProps[styleProp] = additionalStyle;
    } else if (Array.isArray(orgStyle)) {
      // 配列の場合は先頭に追加
      resultProps[styleProp] = [additionalStyle].concat(orgStyle);
    } else if (Object.prototype.toString.call(orgStyle) === '[object Object]') {
      if (styleApplyMode === 'append') {
        // オブジェクトで'append'の場合は先頭に追加
        resultProps[styleProp] = [additionalStyle, orgStyle];
      } else {
        // オブジェクトで'append'以外の場合はマージ
        for (const key in orgStyle) {
          if (orgStyle[key] !== undefined) {
            additionalStyle[key] = orgStyle[key];
          }
        }
        resultProps[styleProp] = additionalStyle;
      }
    }
  }

  return resultProps;
}
