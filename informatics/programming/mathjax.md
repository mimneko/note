---
title: 高校数学用MathJaxサンプル
date: 2024-04-29
tags: [latex]
---

<style>
  /* -----------------------------------------
    増減表
  ----------------------------------------- */
  .derivative-test-chart {
    border-collapse: collapse;
    margin: 0 auto;
  }

  .derivative-test-chart td {
    border: 1px solid black;
    padding: 5px;
    text-align: center;
    min-width: 30px;
  }
</style>

## 準備

head タグ内に、以下のように書く。

```
<script>
MathJax = {
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']]
  }
};
</script>
<script id="MathJax-script" async
  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js">
</script>
```

<p>ドルマーク 2 つだと、 $$ 3 + 4 = 7 $$ ディスプレイ形式に。</p>

```
<p>ドルマーク2つだと、 $$ 3 + 4 = 7 $$ ディスプレイ形式に。</p>
```

ドルマーク 1 つだと、 $ 3 + 4 = 7 $ インライン形式に。

```
<p>ドルマーク1つだと、 $ 3 + 4 = 7 $ インライン形式に。</p>
```

## 数

### 分数

#### 分数(小)

$$\frac{1}{2}$$

```
\frac{1}{2}
```

#### 分数(大)

$$\dfrac{1}{2}$$

```
\dfrac{1}{2}
```

```
\displaystylefrac{1}{2}
```

#### 分数と括弧

$$\left( -\frac{1}{2} \right)^2$$

```
\left( -\frac{1}{2} \right)^2
```

#### 連分数

$$\frac{a+b}{c+\frac{d}{e}}$$

```
\frac{a+b}{c+\frac{d}{e}}
```

$$\cfrac{a+b}{c+\cfrac{d}{e}}$$

```
\cfrac{a+b}{c+\cfrac{d}{e}}
```

#### 無限連分数

$$
\begin{eqnarray}
  1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\ddots}}}
  = \frac{1}{2} \left( 1+\sqrt{5} \right)
  \end{eqnarray}
$$

```
\begin{eqnarray}
  1+\frac{1}{1+\frac{1}{1+\frac{1}{1+\ddots}}}
  = \frac{1}{2} \left( 1+\sqrt{5} \right)
\end{eqnarray}
```

### 小数

#### 小数

$$0.123$$

```
0.123
```

#### 循環小数

$$\frac{1}{11} = 0.\dot{0}\dot{9}$$

```
\frac{1}{11} = 0.\dot{0}\dot{9}
```

#### 無限小数

$$\sqrt{2} = 1.4142 \cdots$$

```
\sqrt{2} = 1.4142 \cdots
```

### 無限大

$$\infty$$

```
\infty
```

### 絶対値

$$|x|$$

```
|x|
```

```
\vert x \vert
```

### 分数と絶対値

$$\left| \dfrac{x}{2} \right|$$

```
\left| \dfrac{x}{2} \right|
```

### ガウス記号

$$[x]$$

```
[x]
```

```
\lbrack x \rbrack
```

## 四則演算

### 足す

$$1 + 2$$

```
1 + 2
```

### 引く

$$3 - 1$$

```
3 - 1
```

### 掛ける

$$2 \times 3$$

```
2 \times 3
```

$$a \cdot b = ab$$

```
a \cdot b = ab
```

### 割る

$$6 \div 3$$

```
6 \div 3
```

### プラスマイナス

$$\pm 1$$

```
\pm 1
```

### マイナスプラス

$$\mp 1$$

```
\mp 1
```

### 筆算

#### 掛け算

$$
\begin{array}{r}
  67 \\[-3pt]
  \underline{\times\phantom{0}63}\\[-3pt]
  201 \\[-3pt]
  \underline{\phantom{0}402\phantom{0}} \\[-3pt]
  4221
  \end{array}
$$

```
\begin{array}{r}
67 \\[-3pt]
\underline{\times\phantom{0}63}\\[-3pt]
201 \\[-3pt]
\underline{\phantom{0}402\phantom{0}} \\[-3pt]
4221
\end{array}
```

#### 割り算

$$
\begin{array}{r}
  7.6 \\[-3pt]
25\enclose{longdiv}{190\phantom{0}} \\[-3pt]
  \underline{175\phantom{.0}} \\[-3pt]
  15\phantom{.}0 \\[-3pt]
  \underline{15\phantom{.}0} \\[-3pt]
  \phantom{000}0
\end{array}
$$

```
\begin{array}{r}
  7.6 \\[-3pt]
25\enclose{longdiv}{190\phantom{0}} \\[-3pt]
  \underline{175\phantom{.0}} \\[-3pt]
  15\phantom{.}0 \\[-3pt]
  \underline{15\phantom{.}0} \\[-3pt]
  \phantom{000}0
\end{array}
```

### 合同式

$$a \equiv b \mod n$$

```
a \equiv b \mod n
```

$$a \equiv b \pmod n$$

```
a \equiv b \pmod n
```

### 比例

$$x \propto y$$

```
x \propto y
```

## 大小

### 大なり

$$a \gt b$$

```
a \gt b
```

### 大なりイコール

$$a \geqq b$$

```
a \geqq b
```

### 小なり

$$a \lt b$$

```
a \lt b
```

### 小なりイコール

$$a \leqq b$$

```
a \leqq b
```

### イコール

$$a = b$$

```
a = b
```

### ノットイコール

$$a \neq b$$

```
a \neq b
```

### ニアリーイコール

$$a \fallingdotseq b$$

```
a \fallingdotseq b
```

### 十分大きい

$$a \gg b$$

```
a \gg b
```

### 十分小さい

$$a \ll b$$

```
a \ll b
```

## 複数行数式

### イコールで縦に揃える

$$
\begin{eqnarray}
  x + 2x &=& 3 \\
  x &=& 1
\end{eqnarray}
$$

```
\begin{eqnarray}
  x + 2x &=& 3 \\
  x &=& 1
\end{eqnarray}
```

### 連立方程式

$$
\begin{eqnarray}
  \left\{
    \begin{array}{l}
      x + y = 10 \\
      2x + 4y = 32
    \end{array}
  \right.
\end{eqnarray}
$$

```
\begin{eqnarray}
  \left\{
    \begin{array}{l}
      x + y = 10 \\
      2x + 4y = 32
    \end{array}
  \right.
\end{eqnarray}
```

### 場合分け

$$
\begin{eqnarray}
  |x|
    =
    \begin{cases}
      x & ( x \geqq 0 ) \\
      -x & ( x \lt 0 )
    \end{cases}
  \end{eqnarray}
$$

```
\begin{eqnarray}
|x|
  =
  \begin{cases}
    x & ( x \geqq 0 ) \\
    -x & ( x \lt 0 )
  \end{cases}
\end{eqnarray}
```

## 集合

### 属する

$$x \in A$$

```
x \in A
```

$$A \ni x$$

```
A \ni x
```

### 属していない

$$x \notin A$$

```
x \notin A
```

### 部分集合

$$A \subset B$$

```
A \subset B
```

$$A \supset B$$

```
A \supset B
```

### 部分集合でない

$$A \not \subset B$$

```
A \not \subset B
```

### 共通部分

$$A \cap B$$

```
A \cap B
```

### 和集合

$$A \cup B$$

```
A \cup B
```

### 空集合

$$\varnothing$$

```
\varnothing
```

$$\emptyset$$

```
\emptyset
```

### 補集合

$$\overline{ A }$$

```
\overline{ A }
```

### ド・モルガンの法則

$$\overline{ (A\cap B) } = \overline{ A } \cup \overline{ B }$$

```
\overline{ (A\cap B) } = \overline{ A } \cup \overline{ B }
```

### 自然数全体の集合

$$\mathbb{ N }$$

```
\mathbb{ N }
```

### 整数全体の集合

$$\mathbb{ Z }$$

```
\mathbb{ Z }
```

### 有理数全体の集合

$$\mathbb{ Q }$$

```
\mathbb{ Q }
```

### 実数全体の集合

$$\mathbb{ R }$$

```
\mathbb{ R }
```

## 論理

### ならば

$$P \Rightarrow Q$$

```
P \Rightarrow Q
```

$$P \Leftarrow  Q$$

```
P \Leftarrow  Q
```

### 同値

$$P \iff Q$$

```
P \iff Q
```

$$P \Leftrightarrow Q$$

```
P \Leftrightarrow Q
```

### よって、ゆえに

$$\therefore$$

```
\therefore
```

### なぜならば

$$\because$$

```
\because
```

### 否定

$$\overline{ P }$$

```
\overline{ P }
```

## 順列と組み合わせ

### 順列

$${}_n \mathrm{ P }_k$$

```
{}_n \mathrm{ P }_k
```

### 組み合わせ

$${}_n \mathrm{ C }_k$$

```
{}_n \mathrm{ C }_k
```

### 階乗

$$n!$$

```
n!
```

### 組み合わせの公式

$$
\begin{eqnarray}
  {}_n \mathrm{ C }_k
    = \frac{ n! }{ k! ( n - k )! }
  \end{eqnarray}
$$

```
\begin{eqnarray}
{}_n \mathrm{ C }_k
  = \frac{ n! }{ k! ( n - k )! }
\end{eqnarray}
```

### 順列の公式

$$
\begin{eqnarray}
  {}_n \mathrm{ P }_k
    = n \cdot ( n - 1 ) \cdots ( n - k + 1 )
    = \frac{ n! }{ ( n - k )! }
  \end{eqnarray}
$$

```
\begin{eqnarray}
{}_n \mathrm{ P }_k
  = n \cdot ( n - 1 ) \cdots ( n - k + 1 )
  = \frac{ n! }{ ( n - k )! }
\end{eqnarray}
```

## 総和・総乗

### 総和

$$\sum_{i=1}^{n} a_i$$

```
\sum_{i=1}^{n} a_i
```

$$\displaystyle \sum_{i=1}^n a_i$$

```
\displaystyle \sum_{i=1}^n a_i
```

### 総和のイメージ

$$
\begin{eqnarray}
  \sum_{ k = 1 }^{ n } k^2
    = \underbrace{ 1^2 + 2^2 + \cdots + n^2 }_{ n }
    = \frac{ 1 }{ 6 } n ( n + 1 ) ( 2n + 1 )
  \end{eqnarray}
$$

```
\begin{eqnarray}
\sum_{ k = 1 }^{ n } k^2
  = \underbrace{ 1^2 + 2^2 + \cdots + n^2 }_{ n }
  = \frac{ 1 }{ 6 } n ( n + 1 ) ( 2n + 1 )
\end{eqnarray}
```

## 指数・対数

### べき乗

$$2^3$$

```
2^3
```

$$e^{ i \pi }$$

```
e^{ i \pi }
```

### 平方根

$$\sqrt{ 2 }$$

```
\sqrt{ 2 }
```

$$\sqrt{ \mathstrut a } + \sqrt{ \mathstrut b }$$

```
\sqrt{ \mathstrut a } + \sqrt{ \mathstrut b }
```

### 3 乗根

$$\sqrt[ 3 ]{ x }$$

```
\sqrt[ 3 ]{ x }
```

### 対数

#### 自然対数

$$\log x$$

```
\log x
```

#### 常用対数

$$\log_{ 10 } x$$

```
\log_{ 10 } x
```

## 図形

### 角度

$$90^{ \circ }$$

```
90^{ \circ }
```

$$\frac{ \pi }{ 2 }$$

```
\frac{ \pi }{ 2 }
```

### 角記号

$$\angle A$$

```
\angle A
```

### 平行

$$AB /\!/ CD$$

```
AB /\!/ CD
```

### 垂直

$$AB \perp CD$$

```
AB \perp CD
```

### 三角形

$$\triangle ABC$$

```
\triangle ABC
```

### 弧

$$\stackrel{\huge\frown}{AB}$$

```
\stackrel{\huge\frown}{AB}
```

$$\overparen{AB}$$

```
\overparen{AB}
```

### 合同

$$\triangle ABC \equiv \triangle DEF$$

```
\triangle ABC \equiv \triangle DEF
```

### 相似

$$\triangle ABC \backsim \triangle DEF$$

```
\triangle ABC \backsim \triangle DEF
```

## 三角関数

### サイン

$$\sin x$$

```
\sin x
```

### コサイン

$$\cos x$$

```
\cos x
```

### タンジェント

$$\tan x$$

```
\tan x
```

### サイン変換

$$
\begin{eqnarray}
  \sin 45^\circ
    = \frac{ \sqrt{2} }{ 2 }
  \end{eqnarray}
$$

```
\begin{eqnarray}
\sin 45^\circ
  = \frac{ \sqrt{2} }{ 2 }
\end{eqnarray}
```

### コサイン変換

$$
\begin{eqnarray}
  \cos \frac{ \pi }{ 3 }
    = \frac{ 1 }{ 2 }
  \end{eqnarray}
$$

```
\begin{eqnarray}
\cos \frac{ \pi }{ 3 }
  = \frac{ 1 }{ 2 }
\end{eqnarray}
```

### タンジェント変換

$$
\begin{eqnarray}
  \tan \theta
    = \frac{ \sin \theta }{ \cos \theta }
  \end{eqnarray}
$$

```
\begin{eqnarray}
\tan \theta
  = \frac{ \sin \theta }{ \cos \theta }
\end{eqnarray}
```

## 複素数

### 複素数

$$a+bi$$

```
a+bi
```

### 共役複素数

$$\bar{z}$$

```
\bar{z}
```

### 偏角

$$\arg (z)$$

```
\arg (z)
```

### 1 の 3 乗根

$$\omega$$

```
\omega
```

### 複素数の絶対値

$$
\begin{eqnarray}
  z\bar{z} = |z|^2
  \end{eqnarray}
$$

```
\begin{eqnarray}
z\bar{z} = |z|^2
\end{eqnarray}
```

## 極限

### 極限

$$\lim_{ x \to +0 } \frac{1}{x} = \infty$$

```
\lim_{ x \to +0 } \frac{1}{x} = \infty
```

$$\displaystyle \lim_{ n \to \infty } f_n(x) = f(x)$$

```
\displaystyle \lim_{ n \to \infty } f_n(x) = f(x)
```

## 微分・積分

### 微分

$$\frac{ dy }{ dx }$$

```
\frac{ dy }{ dx }
```

$$\frac{ \mathrm{ d } y }{ \mathrm{ d } x }$$

```
\frac{ \mathrm{ d } y }{ \mathrm{ d } x }
```

$$f'$$

```
f'
```

### 2 階微分

$$\frac{ d^2 y }{ dx^2 }$$

```
\frac{ d^2 y }{ dx^2 }
```

$$f^{\prime\prime}$$

```
f^{\prime\prime}
```

$$f^{ ( 2 ) }$$

```
f^{ ( 2 ) }
```

### 導関数の定義

$$
\begin{eqnarray}
  f'(x)
    = \frac{ df }{ dx }
    = \lim_{ \Delta x \to 0 } \frac{ f(x + \Delta x) - f(x) }{ \Delta x }
  \end{eqnarray}
$$

```
\begin{eqnarray}
f'(x)
  = \frac{ df }{ dx }
  = \lim_{ \Delta x \to 0 } \frac{ f(x + \Delta x) - f(x) }{ \Delta x }
\end{eqnarray}
```

### 増減表

$$
\begin{array}{c|ccccc}
  x     & \cdots & -1 & \cdots & 1 & \cdots \\
  \hline
  f’(x) & + & 0 & – & 0 & + \\
  \hline
  f(x)  & \nearrow & e & \searrow & -e & \nearrow
\end{array}
$$

```
\begin{array}{c|ccccc}
  x     & \cdots & -1 & \cdots & 1 & \cdots \\
  \hline
  f’(x) & + & 0 & – & 0 & + \\
  \hline
  f(x)  & \nearrow & e & \searrow & -e & \nearrow
\end{array}
```

### 積分

$$\int_0^1 f(x) dx$$

```
\int_0^1 f(x) dx
```

$$\displaystyle \int_{-\infty}^{ \infty } f(x) dx$$

```
\displaystyle \int_{-\infty}^{ \infty } f(x) dx
```

### サンプル

$$
\begin{eqnarray}
  \int_0^1 x dx
  = \left[ \frac{x^2}{2} \right]_0^1
  = \frac{1}{2}
  \end{eqnarray}
$$

```
\begin{eqnarray}
\int_0^1 x dx
= \left[ \frac{x^2}{2} \right]_0^1
= \frac{1}{2}
\end{eqnarray}
```

## ベクトル

### ベクトル

$$\vec{ a }$$

```
\vec{ a }
```

$$\overrightarrow{ AB }$$

```
\overrightarrow{ AB }
```

### 横ベクトル

$$( a_1, a_2, \ldots, a_n )$$

```
( a_1, a_2, \ldots, a_n )
```

### 縦ベクトル

$$
\left(
  \begin{array}{c}
    a_1 \\
    a_2 \\
    \vdots \\
    a_n
  \end{array}
\right)
$$

```
\left(
  \begin{array}{c}
    a_1 \\
    a_2 \\
    \vdots \\
    a_n
  \end{array}
\right)
```

### 内積

$$\vec{ a } \cdot \vec{ b }$$

```
\vec{ a } \cdot \vec{ b }
```

## 表

### 表

$$
\begin{array}{ccc}
  xxx & yyy & zzz \\
  1   & 2   & 3
\end{array}
$$

```
\begin{array}{ccc}
  xxx & yyy & zzz \\
  1   & 2   & 3
\end{array}
```

### 表（縦線付）

$$
\begin{array}{|c|c|c|}
  xxx & yyy & zzz \\
  1   & 2   & 3 \\
\end{array}
$$

```
\begin{array}{|c|c|c|}
  xxx & yyy & zzz \\
  1   & 2   & 3 \\
\end{array}
```

### 表（横線付）

$$
\begin{array}{ccc}
  \hline
  xxx & yyy & zzz \\
  \hline
  1   & 2   & 3 \\
  \hline
\end{array}
$$

```
\begin{array}{ccc}
  \hline
  xxx & yyy & zzz \\
  \hline
  1   & 2   & 3 \\
  \hline
\end{array}
```

### 増減表

$$
\begin{array}{c|ccccc}
  x     & \cdots & -1 & \cdots & 1 & \cdots \\
  \hline
  f’(x) & + & 0 & – & 0 & + \\
  \hline
  f(x)  & \nearrow & e & \searrow & -e & \nearrow
\end{array}
$$

```
\begin{array}{c|ccccc}
  x     & \cdots & -1 & \cdots & 1 & \cdots \\
  \hline
  f’(x) & + & 0 & – & 0 & + \\
  \hline
  f(x)  & \nearrow & e & \searrow & -e & \nearrow
\end{array}
```

## 線

### 縦線

$$| x |$$

```
| x |
```

$$\vert x \vert$$

```
\vert x \vert
```

$$\{ x \mid x \in A \}$$

```
\{ x \mid x \in A \}
```

### 上線

$$\overline{ A }$$

```
\overline{ A }
```

$$\bar{ A }$$

```
\bar{ A }
```

### スラッシュ

$$/$$

```
/
```

### バックスラッシュ

$$\backslash$$

```
\backslash
```

### 斜線(下)

$$\diagdown$$

```
\diagdown
```

### 斜線（上）

$$\diagup$$

```
\diagup
```

### キャンセル

$$\cancel{a}$$

```
\cancel{a}
```

$$\bcancel{a}$$

```
\bcancel{a}
```

$$\xcancel{a}$$

```
\xcancel{a}
```

### キャンセルと矢印

$$\cancelto{A}{a}$$

```
\cancelto{A}{a}
```

### サンプル

$$
\begin{eqnarray}
    \frac{\cancel{2}}{\cancel{6}}=\frac{1}{3}
  \end{eqnarray}
$$

```
\begin{eqnarray}
  \frac{\cancel{2}}{\cancel{6}}=\frac{1}{3}
\end{eqnarray}
```

$$
\begin{eqnarray}
    \frac{1}{\cancel{3}} \times \frac{\cancelto{2}{6}}{5}
  \end{eqnarray}
$$

```
\begin{eqnarray}
  \frac{1}{\cancel{3}} \times \frac{\cancelto{2}{6}}{5}
\end{eqnarray}
```

## 矢印

### 左矢印

$$\leftarrow$$

```
\leftarrow
```

$$\longleftarrow$$

```
\longleftarrow
```

### 右矢印

$$\rightarrow$$

```
\rightarrow
```

$$\longrightarrow$$

```
\longrightarrow
```

### 上矢印

$$\uparrow$$

```
\uparrow
```

### 下矢印

$$\downarrow$$

```
\downarrow
```

### 左右矢印

$$\leftrightarrow$$

```
\leftrightarrow
```

$$\longleftrightarrow$$

```
\longleftrightarrow
```

### 上下矢印

$$\updownarrow$$

```
\updownarrow
```

### 2 重左矢印

$$\Leftarrow$$

```
\Leftarrow
```

$$\Longleftarrow$$

```
\Longleftarrow
```

### 2 重右矢印

$$\Rightarrow$$

```
\Rightarrow
```

$$\Longrightarrow$$

```
\Longrightarrow
```

### 2 重上矢印

$$\Uparrow$$

```
\Uparrow
```

### 2 重下矢印

$$\Downarrow$$

```
\Downarrow
```

### 2 重左右矢印

$$\Leftrightarrow$$

```
\Leftrightarrow
```

$$\Longleftrightarrow$$

```
\Longleftrightarrow
```

### 2 重上下矢印

$$\Updownarrow$$

```
\Updownarrow
```

### 右上矢印

$$\nearrow$$

```
\nearrow
```

### 右下矢印

$$\searrow$$

```
\searrow
```

### 左上矢印

$$\nwarrow$$

```
\nwarrow
```

### 左下矢印

$$\swarrow$$

```
\swarrow
```

### 頭に矢印

$$\vec{ a }$$

```
\vec{ a }
```

$$\overrightarrow{ AB }$$

```
\overrightarrow{ AB }
```

$$\overleftarrow{ AB }$$

```
\overleftarrow{ AB }
```

## 括弧

### 丸括弧

$$( x )$$

```
( x )
```

### 角括弧

$$[ x ]$$

```
[ x ]
```

$$\lbrack x \rbrack$$

```
\lbrack x \rbrack
```

### 波括弧

$$\{ x \}$$

```
\{ x \}
```

$$\lbrace x \rbrace$$

```
\lbrace x \rbrace
```

### 大きい括弧

$$\left[ \dfrac{ 1 }{ 2 } \right]$$

```
\left[ \dfrac{ 1 }{ 2 } \right]
```

### 上括弧

$$\overbrace{ x + y + z }$$

```
\overbrace{ x + y + z }
```

$$\overbrace{ a_1 + \cdots + a_n }^{ n }$$

```
\overbrace{ a_1 + \cdots + a_n }^{ n }
```

### 下括弧

$$\underbrace{ x + y + z }$$

```
\underbrace{ x + y + z }
```

$$\underbrace{ a_1 + \cdots + a_n }_{ n }$$

```
\underbrace{ a_1 + \cdots + a_n }_{ n }
```

## 点

### 点（中央）

$$\cdot$$

```
\cdot
```

### 複数の点（中央横向き）

$$\cdots$$

```
\cdots
```

### 複数の点（下側横向き）

$$\ldots$$

```
\ldots
```

### 頭に点

$$\dot{ a }$$

```
\dot{ a }
```

## 三角形

### 三角形

$$\triangle$$

```
\triangle
```

## 空白

### 空白

$$aaa \ bbb$$

```
aaa \ bbb
```

$$aaa \quad bbb$$

```
aaa \quad bbb
```

$$aaa \qquad bbb$$

```
aaa \qquad bbb
```

$$aaa \hspace{ 10pt } bbb$$

```
aaa \hspace{ 10pt } bbb
```

### 空白をなくす

$$aaa \! bbb$$

```
aaa \! bbb
```

### 改行

$$
\begin{eqnarray}
  aaa \\ bbb
  \end{eqnarray}
$$

```
\begin{eqnarray}
  aaa \\ bbb
\end{eqnarray}
```

$$
\begin{eqnarray}
  aaa \\[5pt] bbb
  \end{eqnarray}
$$

```
\begin{eqnarray}
  aaa \\[5pt] bbb
\end{eqnarray}
```

### サンプル

$$
\begin{eqnarray}
  & & \frac{1}{2} +\frac{1}{3} +\frac{1}{6} \\[ 5pt ]
  &=& \frac{3}{6} +\frac{2}{6} +\frac{1}{6} \\
  &=& 1
  \end{eqnarray}
$$

```
\begin{eqnarray}
  & & \frac{1}{2} +\frac{1}{3} +\frac{1}{6} \\[ 5pt ]
  &=& \frac{3}{6} +\frac{2}{6} +\frac{1}{6} \\
  &=& 1
\end{eqnarray}
```

## 文字サイズ

### 極小サイズ

$$\tiny{ abc ABC }$$

```
\tiny{ abc ABC }
```

### 小さいサイズ

$$\scriptsize{ abc ABC }$$

```
\scriptsize{ abc ABC }
```

### 少し小さいサイズ

$$\small{ abc ABC }$$

```
\small{ abc ABC }
```

### ノーマルサイズ

$$\normalsize{ abc ABC }$$

```
\normalsize{ abc ABC }
```

### 大きいサイズ

$$\large{ abc ABC }$$

```
\large{ abc ABC }
```

### さらに大きいサイズ

$$\Large{ abc ABC }$$

```
\Large{ abc ABC }
```

### もっと大きいサイズ

$$\LARGE{ abc ABC }$$

```
\LARGE{ abc ABC }
```

### 特大サイズ

$$\huge{ abc ABC }$$

```
\huge{ abc ABC }
```

### 極大サイズ

$$\Huge{ abc ABC }$$

```
\Huge{ abc ABC }
```

## フォント

### ローマン体

$$\mathrm{ ABC }$$

```
\mathrm{ ABC }
```

### 太文字

$$\mathbf{ ABC }$$

```
\mathbf{ ABC }
```

### イタリック

$$\mathit{ ABC }$$

```
\mathit{ ABC }
```

### 中抜き文字

$$\mathbb{ ABC }$$

```
\mathbb{ ABC }
```

## 上付き・下付き

### 上付き文字

$$a^{ xy }$$

```
a^{ xy }
```

### 上付き文字（左）

$${}^{ xy } a$$

```
{}^{ xy } a
```

### 下付き文字

$$a_{ xy }$$

```
a_{ xy }
```

### 下付き文字（左）

$${}_{ xy } a$$

```
{}_{ xy } a
```

### 下付きサンプル

$$
\begin{eqnarray}
    a_n^2 + a_{ n + 1 }^2 = a_{ 2n + 1 }
  \end{eqnarray}
$$

```
\begin{eqnarray}
  a_n^2 + a_{ n + 1 }^2 = a_{ 2n + 1 }
\end{eqnarray}
```

## ギリシャ文字

### アルファ

$$\alpha$$

```
\alpha
```

### ベータ

$$\beta$$

```
\beta
```

### ガンマ

$$\gamma$$

```
\gamma
```

### デルタ

$$\delta$$

```
\delta
```

### パイ

$$\pi$$

```
\pi
```

## 参考

<ul class="reference-list">
  <li>
    <a href="https://www.tohoho-web.com/ex/mathjax.html" target="_blank">とほほのMathJax入門 - とほほのWWW入門</a>, 参照<time datetime="2024-04-27">2024-04-27</time>
  </li>
</ul>
