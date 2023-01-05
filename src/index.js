// 月の英語表記と数字の対応
const monthMap = {
  'January': '1',
  'February': '2',
  'March': '3',
  'April': '4',
  'May': '5',
  'June': '6',
  'July': '7',
  'August': '8',
  'September': '9',
  'October': '10',
  'November': '11',
  'December': '12'
};

// 全ての要素を取得
const elements = document.querySelectorAll('*');

// 要素を1つずつ処理
elements.forEach(element => {
  // 要素のテキストを取得し、月の英語表記を数字に置換
  const text = element.textContent;
  const newText = text.replace(/January|February|March|April|May|June|July|August|September|October|November|December/g, match => monthMap[match]);

  // 変換されたテキストを要素に設定
  element.textContent = newText;
});
