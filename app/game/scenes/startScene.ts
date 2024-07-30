export default class StartScene extends Phaser.Scene {
	constructor() {
		super({ key: "StartScene" });
	}

	preload() {}

	create() {}

	update(time: number, delta: number) {
		console.log(time, delta);
	}
}
