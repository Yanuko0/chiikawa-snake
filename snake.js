//蛇對象
class Snake{
    constructor (select){
        this.map=document.querySelector(select)
        //蛇的運動方向
        this.direction="right"
        //蛇的數組(把蛇的頭和身體都匯存儲到數組當中,頭從數組的第0位開始)
        this.snakelist=[]
        //調用蛇頭函數
        // this.createHead()
        //創建蛇的方法
        this.createSnake()
        // this.move()
        
    }
    //創建蛇頭的函數
    createHead(){
        //獲取數組當中的第0位找到蛇頭
        const head=this.snakelist[0]
        // console.log(head)

        //定義蛇頭初始座標
        const pos={x:0,y:0}

        if(head){
            // console.log("有蛇頭")
            //如果有蛇頭 那麼創建新的蛇頭 放到原先蛇頭的後面座標位置上
            //新蛇頭座標一定發生改變,改變方向需要羅列一下
            switch (this.direction) {
                case "left":
                    pos.x = head.offsetLeft-40
                    pos.y = head.offsetTop
                    break;
                case "right":
                    pos.x = head.offsetLeft+40
                    pos.y = head.offsetTop
                    break;
                case "top":
                    pos.x = head.offsetLeft
                    pos.y = head.offsetTop-40
                    break;
                case "bottom":
                    pos.x = head.offsetLeft
                    pos.y = head.offsetTop+40
                    break;
            
                default:
                    break;
            }
            // console.log(pos.x,pos.y)

            //需要把原先的蛇頭變成身體
            head.className="body"

        
        }

        //創建蛇頭
        const div=document.createElement("div")
        //定義 樣式
        div.className="head"
        //把蛇頭存入數組
        this.snakelist.unshift(div)
        //給蛇頭定義 座標
        div.style.left=pos.x+"px"
        div.style.top=pos.y+"px"
        // console.log(div)
        //放到地圖當中
        this.map.appendChild(div)
    }

    //創建一條蛇
    createSnake(){
        for(let i=0;i<4;i++){
            this.createHead()
        }
    }

    //蛇移動的方法
    move(){
        //思路是把原先頭部座標後面增加一個舌頭 原本的蛇頭變成身體, 
        //身體末尾的位置進行刪除一個以此來實現視覺上的位移

        //從數組當中移除掉了
        const body = this.snakelist.pop()
        // console.log(body)
        //從頁面刪除
        body.remove()
        //新增蛇頭
        this.createHead()

    }
    //判斷蛇有沒有吃到食物
    isEat(foodX,foodY){
        //判斷頭跟座標是否重合
        const head = this.snakelist[0]
        const headX =head.offsetLeft
        const headY =head.offsetTop

        if(foodX === headX && foodY === headY){
            return true
        }
        return false
    }
    //判斷蛇死沒死
    //是否撞牆
    isDie(){
        //判斷蛇頭有沒有到邊界
        const head = this.snakelist[0]
        const headX =head.offsetLeft
        const headY =head.offsetTop

        if(headX<0 || headY<0 || headX >= this.map.clientWidth || headY >= this.map.clientHeight)
        {
            return true
        }
        return false
    }

  
}