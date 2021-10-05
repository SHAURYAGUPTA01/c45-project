class player2 {
    constructor(x, y, w, h) {
        this.body = Bodies.rectangle(x, y, w, h, { isStatic: true });
        this.w = w
        this.h = h
        this.image = loadImage("assets/player2.png");
    }

    display() {
        var pos = this.body.position
        image(this.image, pos.x, pos.y, this.w, this.h)
    }
}