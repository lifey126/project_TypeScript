//定义食物类
class Food{
    element:HTMLElement;
    constructor(){
        //获取页面中的food元素并将其赋值给element
        this.element = document.getElementById('food')!;
    }

    //获取食物X,Y坐标
    get X(){
        return this.element.offsetLeft;
    }
    get Y(){
        return this.element.offsetTop;
    }

    //修改食物位置
    change(){
        //生成随机位置 0-290 整十
        let left = Math.floor(Math.random() * 30) * 10;
        let top = Math.floor(Math.random() * 30) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}

export default Food;