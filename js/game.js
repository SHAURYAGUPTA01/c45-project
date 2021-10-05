class Game {
    constructor() {

    }

    start() {
        form = new Form()
        form.display()
    }

    update(count) {
        database.ref("/").update({
            playerCount: count
        });
    }

}