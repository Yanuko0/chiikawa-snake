//手機端增加觸控事件上下左右

document.addEventListener('touchstart', function(e) {
    // 取得觸控點的X、Y座標
    const touchX = e.touches[0].clientX;
    const touchY = e.touches[0].clientY;

    // 取得蛇頭的座標
    const head = game.snake.snakelist[0];
    const headX = head.offsetLeft;
    const headY = head.offsetTop;

    // 判斷觸控的位置與蛇頭的位置關係，決定改變方向
    if (touchX < headX) {
        game.change("left");
    } else if (touchX > headX) {
        game.change("right");
    } else {
        if (touchY < headY) {
            game.change("top");
        } else if (touchY > headY) {
            game.change("bottom");
        }
    }
});