---
title: さまざまな本のサイズ規格
date: 2024-09-16
---

## サイズ
<table>
    <thead>
        <tr>
            <th>判型</th>
            <th>幅 x 高さ [mm]</th>
            <th>用途</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>B4判</td>
            <td>257 x 364</td>
            <td></td>
        </tr>
        <tr>
            <td>A4判</td>
            <td>210 x 297</td>
            <td></td>
        </tr>
        <tr>
            <td>B5判</td>
            <td>182 x 257</td>
            <td>中くらいの教科書、同人誌</td>
        </tr>
        <tr>
            <td>A5判</td>
            <td>148 x 210</td>
            <td>小さい教科書</td>
        </tr>
        <tr>
            <td>B6判</td>
            <td>128 x 182</td>
            <td>単行本？</td>
        </tr>
        <tr>
            <td>四六判</td>
            <td>127 x 188</td>
            <td>単行本</td>
        </tr>
        <tr>
            <td>（名称不明）</td>
            <td>112 x 173</td>
            <td>講談社ブルーバックス</td>
        </tr>
        <tr>
            <td>A6判</td>
            <td>105 x 148</td>
            <td>文庫本</td>
        </tr>
        <tr>
            <td>新書判</td>
            <td>103 x 182</td>
            <td>新書</td>
        </tr>
    </tbody>
</table>


## ピクセル数の計算式
解像度を$D\text{[dpi]}$、長さ（幅や高さ）を$L\text{[mm]}$とすると、ピクセル数は$P\text{[mm]}$は以下の式で表せる。

$$ P = D \times \frac{L}{25.4} $$

ここで、$25.4\text{[mm]} = 1\text{[inch]}$を用いた。

例として$D=350$のとき、A5判の幅のピクセル数$P_{A5,width}$と高さのピクセル数$P_{A5,height}$は

$$
\begin{align}
P_{A5,width} = 350 \times \frac{148}{25.4} =2039.37\cdots\fallingdotseq 2039\text{[mm]}\\
P_{A5,height} = 350 \times \frac{210}{25.4} =2893.70\cdots\fallingdotseq 2894\text{[mm]}
\end{align}
$$

となる。

## 参考文献
- [https://www.daiichiinsatsu.co.jp/200_support/2313_booksize.html](https://www.daiichiinsatsu.co.jp/200_support/2313_booksize.html), 参照日2024-09-16
- [https://www.lowcost-print.com/column/【出版社別】新書サイズまとめ｜家にある新書を/](https://www.lowcost-print.com/column/【出版社別】新書サイズまとめ｜家にある新書を/), 参照日2024-09-16
