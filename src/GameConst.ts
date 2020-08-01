type BitMapProps = {
    autoFill?: boolean;
    scale?: number;
    width?: number;
    height?: number;
    touchEnabled?: boolean;
    horizontal?: 'left' | 'center' | 'right';
    vertical?: 'top' | 'center' | 'bottom';
    x?: number;
    y?: number;
}

class Game {
    public static step = 6;
    public static stageH: number;
    public static stageW: number;

    public static createBitmapByName(name: string): egret.Bitmap {
        const Texture: egret.Texture = RES.getRes(name)
        return new egret.Bitmap(Texture)
    }

    public static render(name: string, props?: BitMapProps): egret.Bitmap {
        const el = Game.createBitmapByName(name);
        if (props) {
            const {scale = 1, autoFill, horizontal, vertical, ...rest} = props;
            Object.assign(el, rest);
            if (autoFill) {
                const s = Game.stageW / el.width;
                el.width *= s;
                el.height *= s;
            } else if (scale !== 1) {
                el.width *= scale;
                el.height *= scale;
            }
            if (horizontal) {
                el.x = Game.getHorizontalPosition(el, horizontal);
            }
            if (vertical) {
                el.y = Game.getVerticalPosition(el, vertical);
            }
        }
        return el
    }

    // 获取水平位置
    public static getHorizontalPosition(el: egret.Bitmap, horizontal: BitMapProps['horizontal']): number {
        switch (horizontal) {
            case 'center':
                return (Game.stageW - el.width) / 2
            case 'right':
                return (Game.stageW - el.width)
            default:
                return 0
        }

    }

    // 获取垂直位置
    public static getVerticalPosition(el: egret.Bitmap, vertical: BitMapProps['vertical']) {
        switch (vertical) {
            case 'center':
                return (Game.stageH - el.height) / 2
            case 'bottom':
                return (Game.stageH - el.height)
            default:
                return 0
        }
    }
}