//手機端增加觸控事件上下左右

document.addEventListener('touchstart', function(e) {
    // 取得觸控點的X、Y座標
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    // 取得螢幕的寬度和高度
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // 計算觸控位置相對於畫面中心的相對位置
    const deltaX = touchX - screenWidth / 2;
    const deltaY = touchY - screenHeight / 2;

    // 設定一個閥值，當觸控距離超過閥值時才改變方向
    const threshold = 50;

    // 判斷觸控位置相對於畫面中心的方向，並改變方向
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > threshold) {
        // 橫向移動
        game.change(deltaX > 0 ? "right" : "left");
    } else if (Math.abs(deltaY) > threshold) {
        // 縱向移動
        game.change(deltaY > 0 ? "bottom" : "top");
    }
});
