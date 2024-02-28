//load ボタンクリック時の処理
const loadBtn = document.querySelector("#loadBtn");
loadBtn.onclick = () => {
    const resetBtn = document.querySelector("#resetBtn");
    resetBtn.click();
    const keys = Object.keys(localStorage).sort();
    for (const key of keys) {
        const value = localStorage.getItem(key);
        const memoItem = document.createElement("li");
        memoItem.innerText = value;
        const memoList = document.querySelector("#memoList");
        memoList.appendChild(memoItem);
    }
}
// 保存処理
//  save ボタンの参照を取得 onClick プロパティに無名関数を追加
const saveBtn = document.querySelector("#saveBtn");
saveBtn.onclick = () => {
    // localStorage にアクセス、clear を呼び出し、既存のデータを削除
    localStorage.clear();
    // document.querySelector でリスト（ <ul> ）タグの参照を取得
    // memoList.children プロパティにアクセス、  <li> タグの配列を取得
    const memoList = document.querySelector("#memoList");
    const memoItems = memoList.children;
    // 取得した <li>タグの一覧を for 文で繰り返し処理
    // ローカルストレージには「キー」と「値」のペアでデータを保存する必要あり
    // 繰り返しのインデックスをキーとして <li> タグの中身（メモした内容）を値に指定
    // localStorage.setItem(key, value) でローカルストレージにデータを保存
    for (let i = 0; i < memoItems.length; i++) {
        const key = i;
        const value = memoItems[i].innerText;
        localStorage.setItem(key, value);
    }
}
// リセット処理
// document.querySelector を使って reset ボタンの参照を取得
const resetBtn = document.querySelector("#resetBtn");
// reset ボタンクリック時の処理
resetBtn.onclick = () => {
    // document.querySelector でリスト（<ul>） タグの参照を取得。その後、while 文を使ってループ処理
    const memoList = document.querySelector("#memoList");
    // while 文のループ条件には memoList.firstChild を指定
    // 変数 memoList の子要素は <li> タグ、<ul> タグの中に <li> タグが1つでもあれば、while 文の判定条件は true 。子要素が存在する場合は、処理を繰り返す。
    while (memoList.firstChild) {
        memoList.removeChild(memoList.firstChild);
    } // <ul> タグの中に存在する <li> タグを先頭から順にすべて削除するのでリセットされる
}
// document.querySelector で add ボタンオブジェクトを取得
// 引数にセレクタを指定(CSSと同様)。id指定でアクセスするときは先頭に # を指定
//addBtn は <button type="button" id="memoTxt">add</button> オブジェクトの参照が代入
const addBtn = document.querySelector("#addBtn");
// addBtn 変数の onClick プロパティに関数を代入する
// onClick プロパティに関数を代入することで、クリック時の処理
addBtn.onclick = () => {
                // アロー関数
    // document.querySelector でテキストボックスの参照を取得            
    const memoTxt = document.querySelector("#memoTxt");
    // document.createElement を使って、 <li> タグを生成
    // createElement を使って任意のHTML要素を生成
    const memoItem = document.createElement("li");
    // <li> タグのボディにテキストボックスの値を追加
    memoItem.innerText = memoTxt.value;
    // document.querySelector を使ってid指定でHTML要素を取得
    const memoList = document.querySelector("#memoList");
    // 変数 memoList に対して、先ほど作成した memoItem 変数を子要素として追加
    // appendChild メソッドは、HTML要素に子要素を追加
    memoList.appendChild(memoItem);
    // テキストボックスを参照している変数memoTxt の value プロパティに空文字を代入。画面のテキストボックスの入力は空の状態になる。
    // 画面をリロード→登録したメモはクリア
    memoTxt.value = "";
}