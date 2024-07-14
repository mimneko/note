function updateArticleTitle() {
  const titleElement = document.getElementById('article-title');
  
  if (titleElement && titleElement.textContent.trim() === '無題') {
    const articleBody = document.querySelector('.article-body');
    
    if (articleBody) {
      const firstH1 = articleBody.querySelector('h1');
      
      if (firstH1) {
        titleElement.textContent = firstH1.textContent.trim();
        firstH1.remove();  // 元のh1を削除
      }
    }
  }
}

// DOMの読み込みが完了したら関数を実行
document.addEventListener('DOMContentLoaded', updateArticleTitle);
