document.addEventListener('DOMContentLoaded', function() {
    // すべての .highlighter-rouge のすぐ内側にある .highlight を取得
    var codeBlocks = document.querySelectorAll('.highlighter-rouge > .highlight');

    codeBlocks.forEach(function(block) {
        // すでにコピー用ボタンが存在するか確認
        if (!block.querySelector('.copy-code-button')) {
            // コピー用ボタンを作成
            var copyButton = document.createElement('button');
            copyButton.className = 'copy-code-button';
            copyButton.innerText = 'Copy';

            // ボタンを pre の外に追加
            var preElement = block.querySelector('pre');
            block.insertBefore(copyButton, preElement);

            // コピー用ボタンのクリックイベント
            copyButton.addEventListener('click', function() {
                // block 内の pre > code のテキストを取得
                var codeText = block.querySelector('pre code').innerText;

                // クリップボードに書き込む
                navigator.clipboard.writeText(codeText).then(() => {
                    copyButton.innerText = 'Copied!';
                    setTimeout(() => {
                        copyButton.innerText = 'Copy';
                    }, 2000);
                });
            });
        }
    });
});
