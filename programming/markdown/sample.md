---
title: マークダウン記法サンプル
tags: [markdown]
---

## 見出し

#### 書き方

```
# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6
```

#### 表示

# 見出し 1

## 見出し 2

### 見出し 3

#### 見出し 4

##### 見出し 5

###### 見出し 6

## 箇条書き

#### 書き方

```
- リスト1
    - ネスト リスト1_i
        - ネスト リスト1_i_a
        - ネスト リスト1_i_b
    - ネスト リスト1_ii
- リスト2
```

#### 表示

- リスト 1
  - ネスト リスト 1_i
    - ネスト リスト 1_i_a
    - ネスト リスト 1_i_b
  - ネスト リスト 1_ii
- リスト 2

## 番号付き箇条書き

#### 書き方

```
1. リスト1
    1. ネスト リスト1_i
        1. ネスト リスト1_i_a
        1. ネスト リスト1_i_b
    1. ネスト リスト1_ii
1. リスト2
```

#### 表示

1. リスト 1
   1. ネスト リスト 1_i
      1. ネスト リスト 1_i_a
      1. ネスト リスト 1_i_b
   1. ネスト リスト 1_ii
1. リスト 2

## ソースコード

#### 書き方

````
```
#include <stdio.h>

int main(void){
    printf("hello world!\n");
    return 0;
}
```

```c
#include <stdio.h>

int main(void){
    printf("hello world!\n");
    return 0;
}
```

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello,World!);
    }
}
```
````

#### 表示

```
#include <stdio.h>

int main(void){
    printf("hello world!\n");
    return 0;
}
```

```c
#include <stdio.h>

int main(void){
    printf("hello world!\n");
    return 0;
}
```

```java
public class Main {
    public static void main(String[] args) {
        System.out.println("Hello,World!);
    }
}
```

## 太字（ボールド）

#### 書き方

```
普通 **太字bold** normal
```

#### 表示

普通 **太字 bold** normal

## インラインコード

#### 書き方

```
printfを使うには`#include <stdio.h>`と書く。

こうすれば`` バッククォート(`) ``も書ける。
```

#### 表示

printf を使うには`#include <stdio.h>`と書く。

こうすれば`` バッククォート(`) ``も書ける。

## リンク

#### 書き方

```
[参考文献](https://qiita.com/tbpgr/items/989c6badefff69377da7#github-flavored-markdowngfm)

[こっちからgoogle][google]

その他の文章

[こっちからもgoogle][google]

[google]: https://www.google.co.jp/

https://www.google.co.jp/
```

#### 表示

[参考文献](https://qiita.com/tbpgr/items/989c6badefff69377da7#github-flavored-markdowngfm)

[こっちから google][google]

その他の文章

[こっちからも google][google]

[google]: https://www.google.co.jp/

https://www.google.co.jp/

## TeX 記法

#### 書き方

```
$$
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
\left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$
```

#### 表示

$$
\left( \sum_{k=1}^n a_k b_k \right)^{\!\!2} \leq
\left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
$$

## 表

#### 書き方

```
|列1|列2|列3|
|:--|--:|:--:|
|align left|align right|align center|
|a|b|c|
|あ|い|う|
|い|ろ|は|
```

#### 表示

| 列 1       |        列 2 |     列 3     |
| :--------- | ----------: | :----------: |
| align left | align right | align center |
| a          |           b |      c       |
| あ         |          い |      う      |
| い         |          ろ |      は      |

## 画像

#### 書き方

```
![ここには代替テキスト。右には画像URL](https://kaiunillust.com/wp-content/uploads/2018/07/turineko.jpg)
```

#### 表示

![ここには代替テキスト。右には画像URL](https://kaiunillust.com/wp-content/uploads/2018/07/turineko.jpg)

## ファイルへのリンク

#### 書き方

```
[資料リンク]({{ 'robots.txt' | relative_url }}){:target="_blank"}
```

#### 表示

[資料リンク]({{ 'robots.txt' | relative_url }}){:target="\_blank"}

## ダウンロードボタン

#### 書き方

```
<div class="download-section">
    <a href="{{ 'robots.txt' | relative_url }}" class="download-button" download>
        <button>資料ダウンロード</button>
    </a>
</div>
```

#### 表示

<div class="download-section">
    <a href="{{ 'robots.txt' | relative_url }}" class="download-button" download>
        <button>資料ダウンロード</button>
    </a>
</div>

同じ{{ '' | relative_url }}でないとダウンロードできない

## 引用

#### 書き方

```
> ここは引用文
> となる。
> > 二重に引用
> >
> > もできる。
```

#### 表示

> ここは引用文
> となる。
>
> > 二重に引用
> >
> > もできる。

## 取り消し線

#### 書き方

```
~~取り消し線~~
```

#### 表示

~~取り消し線~~

## 折り畳み

#### 書き方

```
<details><summary>クリックで開ける</summary>

(上に空行が必要)

中身を見ることができる
</details>
```

#### 表示

<details><summary>クリックで開ける</summary>

(上に空行が必要)

中身を見ることができる

</details>

## エスケープ

#### 書き方

```
本来ならば**太字**になるが、こうすると \**太字\** にならない。
```

#### 表示

本来ならば**太字**になるが、こうすると \*\*太字\*\* にならない。

## 脚注

#### 書き方

```
こうすると、文章の一番下に脚注[^1]がつく。

二つ目[^2]です。

[^1]: ここに脚注文を書く。
[^2]: リンクも自動でつけてくれます。
```

#### 表示

こうすると、文章の一番下に脚注[^1]がつく。

二つ目[^2]です。

[^1]: ここに脚注文を書く。
[^2]: リンクも自動でつけてくれます。

## 斜体（イタリック体）

#### 書き方

```
普通 *斜体italic* normalアルファベット以外も可？
```

#### 表示

普通 _斜体 italic_ normal アルファベット以外も可？

## 斜体と太字の両採用

#### 書き方

```
普通 ***太字でitalic*** normal
```

#### 表示

普通 **_太字で italic_** normal

## 水平線

#### 書き方

```
---
```

#### 表示

---

## 参考文献

- https://qiita.com/tbpgr/items/989c6badefff69377da7#github-flavored-markdowngfm
- https://qiita.com/Qiita/items/c686397e4a0f4f11683d
- https://docs.github.com/ja/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax
