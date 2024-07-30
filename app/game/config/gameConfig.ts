import StartScene from "../scenes/startScene";

export const gameConfig: Phaser.Types.Core.GameConfig = {
	type: Phaser.AUTO,
	width: 800,
	height: 600,
	scene: [StartScene],
	physics: {
		default: "arcade",
		arcade: {
			debug: false,
		},
	},
};
