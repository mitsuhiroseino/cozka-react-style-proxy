/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: 'ts-jest/presets/js-with-babel-esm',
  roots: ['<rootDir>/src'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'cjs', 'mjs'],
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
    // CSSは無視
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    // jestのセットアップファイル
    '<rootDir>/jest.setup.ts',
  ],
  transform: {
    // node_modules配下のemsをcjsに変換するために追加
    '^.+\\.m?jsx?$': [
      'babel-jest',
      {
        // ビルド用の設定を継承
        extends: './babel.config.js',
        // esmをcjsに変換する
        plugins: ['@babel/plugin-transform-modules-commonjs'],
      },
    ],
    // 当プロジェクトのtsをjsに変換するために追加
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.json',
        useESM: true,
      },
    ],
  },
  // node_modules配下はesmからcjsへの変換を行わない
  transformIgnorePatterns: ['node_modules'],
};
