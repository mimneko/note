---
title: 2次方程式の解の公式
date: 2024-05-08
tags: [math-1]
---

## 2次方程式の解の公式
### 2次方程式の解の公式
<div class="koushiki-box">
  <div class="koushiki-title box-title">2次方程式の解の公式</div>
  <p class="koushiki-content">
    2次方程式 $ ax^2+bx+c=0 $ の解は、 $ b^2-4ac\geqq0 $ のとき<br>
    \begin{equation*}
      x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}
    \end{equation*}
  </p>
</div>
<div class="shomei-box">
  <p class="shomei-title">証明</p>
  <p class="shomei-content">
  2次方程式 $ax^2+bx+c=0$ の左辺は、平方完成すると
  $$ax^2+bx+c=a\left(x+\frac{b}{2a}\right)^2-\frac{b^2-4ac}{4a}$$
  となる。したがって、2次方程式は次のように書ける。
  $$a\left(x+\frac{b}{2a}\right)^2=\frac{b^2-4ac}{4a}$$
  ゆえに $\displaystyle\left(x+\frac{b}{2a}\right)^2=\frac{b^2-4ac}{4a^2}$<br>
  $b^2-4ac\geqq0$ のとき、この右辺は正または $0$ であるから
  $$x+\frac{b}{2a}=\pm\sqrt{\frac{b^2-4ac}{4a^2}}$$
  この式の右辺は、 $a$ の正負にかかわらず $\displaystyle\pm\frac{\sqrt{b^2-4ac}}{2a}$ となるから
  $$x=-\frac{b}{2a}\pm\frac{\sqrt{b^2-4ac}}{2a}$$
  </p>
  <p class="shomei-qed">□</p>
</div>
## 例題
### $2x^2-13x+15=0$ の解を求めよ
<div>\begin{eqnarray}
  x &=& \frac{-(-13)\pm\sqrt{(-13)^2-4\cdot 2\cdot 15}}{2\cdot 2} \\
    &=& \frac{13\pm\sqrt{169-120}}{4} \\
    &=& \frac{13\pm\sqrt{49}}{4} \\
    &=& \frac{13\pm 7}{4} \\
  \end{eqnarray}</div>
よって、
$$x=\frac{3}{2},5$$
## 問題
