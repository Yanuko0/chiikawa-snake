//food類的定義
//食物的操作
//1.座標位置
//2.生成食物
//3.更新食物的位置

class Food{
    constructor(select){
        this.map = document.querySelector(select)
        // console.log(this.map)
        //創建食物
        this.food = document.createElement("div")
        //定義樣式
        this.food.className = "food"
        //放到地圖當中
        this.map.appendChild(this.food)
        //定義座標
        this.x=0
        this.y=0
        //調用生成食物的方法
        this.foodPos()
    }
    //隨機座標點
    foodPos(){
        // //1.拿到地圖範圍
        // console.log(this.map.clientWidth/40)
        // console.log(this.map.clientHeight/40)
       

        const w_nub=this.map.clientWidth/40
        
        const h_nub=this.map.clientHeight/40
        //2.隨機生成數字 並且不會在最外圍那一圈
        let n1 =Math.floor(1+Math.random()*(w_nub-2))
        let n2 =Math.floor(1+Math.random()*(h_nub-2))

        // let n1 =Math.floor(Math.random()*(w_nub))
        // let n2 =Math.floor(Math.random()*(h_nub))
        

        // console.log(n1,n2)
        //3.根據隨機數進行座標位置的計算
        this.x=(n1)*40
        this.y=(n2)*40
        // console.log(this.x,this.y)
        //4.賦值
        this.food.style.left=this.x+"px"
        this.food.style.top=this.y+"px"

    }
}