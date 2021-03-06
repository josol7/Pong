class PortraitLayout extends ccui.RelativeBox{
    constructor(){
        super(cc.winSize);
        this.scheduleUpdate();
        this.addComponent(new FitToWindow());
        this.addComponent(new EnableOnPortrait());
    }

    onEnter(){
        super.onEnter();
        this.num = this.getParent().allChildren[0].getScore();
        this.score = new ccui.Text("Score: " + this.num, "Pixel", 36);

        let layoutParameter = new ccui.RelativeLayoutParameter();
        layoutParameter.setAlign(ccui.RelativeLayoutParameter.PARENT_TOP_CENTER_HORIZONTAL);
        this.score.setLayoutParameter(layoutParameter);

        this.addChild(this.score);
    }

    update(){
        super.update();
        this.num = this.getParent().allChildren[0].getScore();
        this.score.setString("Score: " + this.num);
    }
}