const {ccclass, property} = cc._decorator;

@ccclass
export default class SecondTexture extends cc.Component {
    @property(cc.SpriteFrame)
    spriteFrame: cc.SpriteFrame = null;
}
