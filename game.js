//設計遊戲類
class Game{
    constructor(select,scoreEle,gameoverbg){
        this.startbtn=document.querySelector("#start")
        this.gameoverimg=document.querySelector(gameoverbg)
        //地圖
        this.map=document.querySelector(select)
        //記分板
        this.scoreEle=document.querySelector(scoreEle)  

        //食物
        this.food=new Food(select)
        //蛇
        this.snake=new Snake(select)
        //定義計時器
        this.timer=0
        // this.start()
       

        //得分
        this.cunt=0
    }
    //定義遊戲開始的方法
    start(){
        this.timer = setInterval(() => {
            //讓蛇動起來
            this.snake.move()
            //判斷是否吃到食物
            if(this.snake.isEat(this.food.x,this.food.y)){
                //吃到食物 要變長,調用增加蛇頭的方法
                this.snake.createHead()
                //食物的位置更新
                this.food.foodPos()
                //調用得分增加更新分數
                this.scorechange()

                //播放音效
            const eatSound = document.getElementById("eatSound");
                eatSound.play();


                                // //得分增加
                                // this.cunt++
                                // //更新記分板
                                // this.scoreEle.innerText=this.cunt
                                //也可以寫到下面
            }
               
            //判斷蛇是否死亡
            if(this.snake.isDie()){

                clearInterval(this.timer)
                this.gameover()
            }
        },100);
    }
    //暫停
    pause(){
        clearInterval(this.timer)
    }
    //重新開始
    restart(){
        //釋放開始按鈕
        this.startbtn.disabled=false

        //強制重新加載頁面可以確保從緩存中重新加載
        window.location.reload()
    }
    //改變方向的方法
    change(type){
        this.snake.direction=type
    }
    //得分增加
    scorechange(){
        //得分增加
        this.cunt++
        //更新記分板
        this.scoreEle.innerText=this.cunt

        if(this.cunt%3 === 0){
            const popupImage2 = document.getElementById("popupImage2");
            popupImage2.style.display = "block";

            //播放音樂
            const popupSound2 = document.getElementById("popupSound2");
            popupSound2.volum=1;
            popupSound2.play();
            //3秒後隱藏圖片
            setTimeout(()=>{
                popupImage2.style.display="none";
            },3000);

        }

        if(this.cunt %5 === 0){
            const popupImage = document.getElementById("popupImage");
            popupImage.style.display = "block";

            //播放音樂
            const popupSound = document.getElementById("popupSound");
            popupSound.volum=1;
            popupSound.play();
            //3秒後隱藏圖片
            setTimeout(()=>{
                popupImage.style.display="none";
            },3000);
        } 
        
        if(this.cunt%20 === 0){
            const popupImage1 = document.getElementById("popupImage1");
            popupImage1.style.display = "block";

            //播放音樂
            const popupSound1 = document.getElementById("popupSound1");
            popupSound1.volum=1;
            popupSound1.play();
            //3秒後隱藏圖片
            setTimeout(()=>{
                popupImage1.style.display="none";
            },3000);

        }
        
    }

    //遊戲結束的方法
    gameover(){
        // alert("GAMEOVER")
        this.gameoverimg.style.display="block"
        //禁用開始按鈕的點擊
        this.startbtn.disabled=true
        const gameoverSound = document.getElementById("gameoverSound");
        gameoverSound.volum=1;
        gameoverSound.play();
    }
}