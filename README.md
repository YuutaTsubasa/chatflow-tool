# 彈幕聊天室實況小工具

![demo.gif](demo.gif)

一個可以用於實況中將聊天室訊息變成彈幕的小工具。

## 下載頁面

可至[Release](https://github.com/YuutaTsubasa/chatflow-tool/releases/)頁面根據自身的作業系統下載最新版本。

檔名 | 作業系統
--- | --- 
chatflow-tool-win32-x64-{version}.zip | Windows (64-bit)
chatflow-tool-message-tool-{version}-1.x86_64.rpm | Linux (64-bit) .rpm
chatflow-tool-message-tool_{version}_amd64.deb | Linux (64-bit) .deb
chatflow-tool-message-tool-darwin-x64-{version}.zip | macOS (64-bit)

## 使用說明

### 基本使用方法
1. 打開程式(chatflow-tool.exe)，會打開設定視窗。
2. 將視窗大小與聊天室網址填入，視窗大小盡量比例上比整個畫面要再小幾倍。
3. 其他設定選項可以選填。
4. 按下「打開彈幕聊天室視窗」打開彈幕視窗。
5. 於 OBS 介面擷取「彈幕視窗」即可。（可利用濾鏡中的色度鍵去背景，盡量讓上、下、右都貼齊畫面，讓超出的部分在左邊）

### 調整視窗相關設定

項目 | 說明
--- | --- 
聊天室網址 | 設定聊天室所在的網址（必填）
視窗寬度 | 設定視窗的寬度（必填）
視窗高度 | 設定視窗的高度（必填）
視窗背景 | 設定視窗背景，主要就是要被濾掉的顏色。
字體 | 可設定彈幕的字體

### 調整彈幕相關設定

項目 | 說明
--- | --- 
最短流速時間 | 彈幕最快會流動多久就結束
最長流速時間 | 彈幕最慢會流動多久才結束
最左端距離 | 彈幕到最左邊多少的時候會結束

## 版本修正紀錄
### v1.0.1
- 修正預設背景顏色為綠色時，會導致會員名稱被吃掉（改成洋紅色）。
- 增加字體大小、顏色以及是否顯示已存在留言的設定。

## 使用技術
- [npm](https://www.electronjs.org/)
- [Electron](https://www.electronjs.org/)
- [js-yaml](https://github.com/nodeca/js-yaml)
- [Electron Forge](https://www.electronforge.io/)
- [RxJS](https://rxjs.dev/)


## 作者
- [悠太翼 @YuutaTsubasa](http://yutaii.run/twitter)
- 歡迎訂閱我的 [Youtube 頻道](http://yutaii.run/youtube)！
- 有任何想要修改的部分歡迎發 Pull Request、發 Issue 或是私訊唷！
