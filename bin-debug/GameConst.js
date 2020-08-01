var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var Game = (function () {
    function Game() {
    }
    Game.createBitmapByName = function (name) {
        var Texture = RES.getRes(name);
        return new egret.Bitmap(Texture);
    };
    Game.render = function (name, props) {
        var el = Game.createBitmapByName(name);
        if (props) {
            var _a = props.scale, scale = _a === void 0 ? 1 : _a, autoFill = props.autoFill, horizontal = props.horizontal, vertical = props.vertical, rest = __rest(props, ["scale", "autoFill", "horizontal", "vertical"]);
            Object.assign(el, rest);
            if (autoFill) {
                var s = Game.stageW / el.width;
                el.width *= s;
                el.height *= s;
            }
            else if (scale !== 1) {
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
        return el;
    };
    // 获取水平位置
    Game.getHorizontalPosition = function (el, horizontal) {
        switch (horizontal) {
            case 'center':
                return (Game.stageW - el.width) / 2;
            case 'right':
                return (Game.stageW - el.width);
            default:
                return 0;
        }
    };
    // 获取垂直位置
    Game.getVerticalPosition = function (el, vertical) {
        switch (vertical) {
            case 'center':
                return (Game.stageH - el.height) / 2;
            case 'bottom':
                return (Game.stageH - el.height);
            default:
                return 0;
        }
    };
    Game.step = 6;
    return Game;
}());
__reflect(Game.prototype, "Game");
