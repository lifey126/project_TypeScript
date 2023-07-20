class Snake{
    head:HTMLElement;
    bodies:HTMLCollection;
    element:HTMLElement;

    constructor(){
        this.element = document.getElementById('snake')!;
        this.head = document.querySelector('#snake > div')! as HTMLElement;
        this.bodies = this.element.getElementsByTagName('div');
    }

    //获取坐标
    get X(){
        return this.head.offsetLeft;
    }
    get Y(){
        return this.head.offsetTop;
    }

    //设置坐标
    set X(value:number){
        //如果新值与旧值相同，则直接返回不再修改
        if(value === this.X){
            return;
        }

        //X值的合法范围 0-290
        if(value < 0 || value > 290){
            //进入判断 已撞墙 抛出异常
            throw new Error('蛇已经撞墙！');
        }

        //修改X 修改水平坐标。蛇在左右移动的时候，不能向反方向调头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetLeft === value){
            //若发生 继续移动 无法调头
            if(value > this.X){
                //蛇在向右移动
                value = this.X - 10;
            }else{
                value = this.X + 10;
            }
        }

        //移动身体
        this.moveBody();
        this.head.style.left = value + 'px';
        this.checkHeadBody();
    }
    set Y(value:number){
        //如果新值与旧值相同，则直接返回不再修改
        if(value === this.Y){
            return;
        }
        //Y值的合法范围 0-290
        if(value < 0 || value > 290){
            //进入判断 已撞墙 抛出异常
            throw new Error('蛇已经撞墙！');
        }

        //修改Y 修改垂直坐标。蛇在上下移动的时候，不能向反方向调头
        if(this.bodies[1] && (this.bodies[1] as HTMLElement).offsetTop === value){
            //若发生 继续移动 无法调头
            if(value > this.Y){
                //蛇在向右移动
                value = this.Y - 10;
            }else{
                value = this.Y + 10;
            }
        }
        //移动身体
        this.moveBody()
        this.head.style.top = value + 'px';
        this.checkHeadBody();
    }

    //增加身体
    addBody(){
        //添加一个div
        this.element.insertAdjacentHTML("beforeend", "<div></div>");
    }

    //身体移动
    moveBody(){
        /*
            *将后边的身体位置设置为前边身体的位置
        */
       //遍历所有的身体
       for(let i = this.bodies.length - 1; i > 0; i--){
        //获取前边身体的位置
        let X = (this.bodies[i - 1] as HTMLElement).offsetLeft;
        let Y = (this.bodies[i - 1] as HTMLElement).offsetTop;
        //将值设置到当前身体上
        (this.bodies[i] as HTMLElement).style.left = X + 'px';
        (this.bodies[i] as HTMLElement).style.top = Y + 'px';
       }
    }

    //检查蛇自身是否发生碰撞
    checkHeadBody(){
        //获取所有身体，检查是否与蛇头坐标发生重叠
        for(let i = 1; i < this.bodies.length; i++){
            let bd = this.bodies[i] as HTMLElement;
            if(this.X === bd.offsetLeft && this.Y === bd.offsetTop){
                throw new Error("蛇自身发生碰撞！");
            }
        }
    }
}

export default Snake;