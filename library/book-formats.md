---
title: さまざまな本のサイズ規格
date: 2024-09-16
---

## サイズ
| 判型 | 幅 x 高さ [mm] | 用途 |
|:--:|:--:|:--|
| B4判 | 257 x 364 |  |
| A4判 | 210 x 297 |  |
| B5判 | 182 x 257 | 中くらいの教科書、同人誌 |
| A5判 | 148 x 210 | 小さい教科書 |
| B6判 | 128 x 182 | 単行本？ |
| 四六判 | 127 x 188 | 単行本 |
|（名称不明）| 112 x 173 | 講談社ブルーバックス |
| A6判 | 105 x 148 | 文庫本 |
| 新書判 | 103 x 182 | 新書 |

## ピクセル数の計算式
解像度を$D\text{[dpi]}$、長さ（幅や高さ）を$L\text{[mm]}$とすると、ピクセル数は$P\text{[mm]}$は以下の式で表せる。

$$ P = D \times \frac{L}{25.4} $$

ここで、$25.4\text{[mm]} = 1\text{[inch]}$を用いた。

$D=350$のとき、A5判の幅のピクセル数$P_{A5,width}$と高さのピクセル数$P_{A5,height}$は

$$
\begin{align}
P_{A5,width} = 350 \times \frac{148}{25.4} =2039.37\cdots\fallingdotseq 2039\text{[mm]}\\
P_{A5,height} = 350 \times \frac{210}{25.4} =2893.70\cdots\fallingdotseq 2894\text{[mm]}
\end{align}
$$
 
## 参考文献
- https://www.daiichiinsatsu.co.jp/200_support/2313_booksize.html, 参照日2024-09-16
- https://www.lowcost-print.com/column/【出版社別】新書サイズまとめ｜家にある新書を/, 参照日2024-09-16
