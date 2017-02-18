
var g_game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-template', {preload: preload, create: create});

function preload() {
    // load resources
    g_game.load.spritesheet('mummy_anim', 'res/metalslug_mummy37x45.png', 37, 45, 18);
}

function create() {
    // start game

    g_game.stage.backgroundColor = '#2d2d2d';

    mummy_sprite = g_game.add.sprite(0, 0, 'mummy_anim');
    mummy_sprite.animations.add('walk_right', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    mummy_sprite.animations.play('walk_right', 20, true);
    mummy_sprite.scale.set(4);
    mummy_sprite.smoothed = false;
}
