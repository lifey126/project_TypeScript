import Food from "./food";
import ScorePanel from "./scorePanel";
import Snake from "./snake";

//游戏控制器
class GameControl{
    //三个属性
    snake:Snake;
    food:Food;
    scorePanel:ScorePanel;

    //创建一个属性存储蛇的移动方向（即按键方向）
    direction:string = ' ';
    //创建一个属性存储蛇的存活情况
    isLive = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    //初始化游戏 开始游戏
    init(){
        //绑定键盘按键事件
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        //调用run方法 使蛇移动
        this.run();
    }

    //键盘按键按下的响应函数
    keydownHandler(event:KeyboardEvent){
        this.direction = event.key;
    }

    //控制移动
    run(){
        //获取目前坐标
        let X = this.snake.X;
        let Y = this.snake.Y;
        //根据按键方向修改X，Y值
        switch(this.direction){
            case "ArrowUp":
            case "Up":
                Y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                Y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                X -= 10;
                break;
            case "ArrowRight":
            case "Right":
                X += 10;
                break;
        }

        //检查是否吃到食物
        this.checkEat(X, Y);

        //修改蛇的坐标
        try{
            this.snake.X = X;
            this.snake.Y = Y;
        }catch(e){
            //出现异常 游戏结束
            alert((e as Error).message + 'GAME OVER!');
            this.isLive = false;
        }

        //开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);

    }
    //用来检查蛇是否吃到食物
    checkEat(X:number, Y:number){
        if(X === this.food.X && Y === this.food.Y){
            //修改食物位置
            this.food.change();
            //分数增加
            this.scorePanel.addScore();
            //蛇身体增长一节
            this.snake.addBody();
        } 
    }
}

export default GameControl;