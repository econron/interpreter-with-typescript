# interpreter-with-typescript
typescriptに慣れてないからgoで作るインタプリタの内容をtsで作り直してみるリポジトリ

# 開発メモ

typeを使うことにした記事
https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

jestインストール時に念の為参照した記事

https://typescript-jp.gitbook.io/deep-dive/intro-1/jest

message TS151001: If you have issues related to imports, you should consider setting `esModuleInterop` to `true` in your TypeScript configuration file (usually `tsconfig.json`).
と言うエラーが出た際に意思決定するきっかけになった記事

```
esModuleInteropって何がいいの？

// esModuleInterop無効の場合
// CommonJSのモジュールは、requireで読み込まないとだめ。
`const moment = require('moment');`

// esModuleInterop有効な場合
// CommonJSのモジュールもES Modulesと同じ書き方で読み込めるようになる！
import moment from 'moment'
```

https://kinosuke.hatenablog.jp/entry/2021/07/25/160300


実際に上のwarnを解決するにあたりtsconfig.jsonを作成して中身を持ってきた記事
https://qiita.com/okazuki/items/991a068892e946531612

## 次のタスク
jestでテーブル駆動テストを書く
https://jestjs.io/ja/docs/api#%EF%BC%92-testeachtablename-fn-timeout

gpt4で持ってきたやつ

```
// sum.test.ts
import { sum } from './sum';

describe('sum function', () => {
    // テストケースの配列を定義する
    const testCases: [number, number, number][] = [
        [1, 2, 3], // [a, b, expected]
        [2, 3, 5],
        [-1, 1, 0],
        [0, 0, 0]
    ];

    // 各テストケースに対してテストを実行する
    test.each(testCases)('sum(%i, %i) should return %i', (a, b, expected) => {
        expect(sum(a, b)).toBe(expected);
    });
});

```

