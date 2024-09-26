---
title: さまざまな本のサイズ規格
date: 2024-09-16
---

## サイズ
<table>
    <thead>
        <tr>
            <th style="text-align: center;">判型</th>
            <th style="text-align: center;">幅 x 高さ [mm]</th>
            <th style="text-align: center;">用途</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="text-align: center;">B4判</td>
            <td style="text-align: center;">257 x 364</td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align: center;">A4判</td>
            <td style="text-align: center;">210 x 297</td>
            <td></td>
        </tr>
        <tr>
            <td style="text-align: center;">B5判</td>
            <td style="text-align: center;">182 x 257</td>
            <td>中くらいの教科書、同人誌</td>
        </tr>
        <tr>
            <td style="text-align: center;">A5判</td>
            <td style="text-align: center;">148 x 210</td>
            <td>小さい教科書</td>
        </tr>
        <tr>
            <td style="text-align: center;">B6判</td>
            <td style="text-align: center;">128 x 182</td>
            <td>単行本？</td>
        </tr>
        <tr>
            <td style="text-align: center;">四六判</td>
            <td style="text-align: center;">127 x 188</td>
            <td>単行本</td>
        </tr>
        <tr>
            <td style="text-align: center;">（名称不明）</td>
            <td style="text-align: center;">112 x 173</td>
            <td>講談社ブルーバックス</td>
        </tr>
        <tr>
            <td style="text-align: center;">A6判</td>
            <td style="text-align: center;">105 x 148</td>
            <td>文庫本</td>
        </tr>
        <tr>
            <td style="text-align: center;">新書判</td>
            <td style="text-align: center;">103 x 182</td>
            <td>新書</td>
        </tr>
    </tbody>
</table>


## 画素数の計算式
長さ（幅や高さ）を$L\text{[mm]}$、解像度を$D\text{[dpi]}$とすると、画素数$P\text{[px]}$は以下の式で表せる。

$$ P = L \times \frac{D}{25.4} $$

ここで、$25.4\text{[mm]} = 1\text{[inch]}$を用いた。

一般的に解像度は、画面表示用には$72\text{[dpi]}$、印刷物用には$350\text{[dpi]}$とされているので、例としてA5判の印刷物用の幅の画素数$P_{A5,width}$と高さの画素数$P_{A5,height}$は$D=350$を用いて、

$$
\begin{align}
P_{A5,width} = 148 \times \frac{350}{25.4} =2039.37\cdots\fallingdotseq 2039\text{[px]}\\
P_{A5,height} = 210 \times \frac{350}{25.4} =2893.70\cdots\fallingdotseq 2894\text{[px]}
\end{align}
$$

となる。

## 参考文献
- [https://www.daiichiinsatsu.co.jp/200_support/2313_booksize.html](https://www.daiichiinsatsu.co.jp/200_support/2313_booksize.html), 参照日2024-09-16
- [https://www.lowcost-print.com/column/【出版社別】新書サイズまとめ｜家にある新書を/](https://www.lowcost-print.com/column/【出版社別】新書サイズまとめ｜家にある新書を/), 参照日2024-09-16
- [https://www.kinkos.co.jp/column/optimal-image-resolution/](https://www.kinkos.co.jp/column/optimal-image-resolution/), 参照日2024-09-16
