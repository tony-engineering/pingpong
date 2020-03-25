import {Camera} from 'modules/camera.js'
import {Keyboard} from 'modules/keyboard.js';
import {LEFT,RIGHT,SPACE,ENTER} from 'modules/keycodes.js';
import {resizeCalc} from 'client/resizeCalc.js';

function setup() {

    console.log('setup demoWaitingScreen scene');

    this.camera = new Camera(this.context, this.size.width, this.size.height);

    this.zones={gameLayout:{}};

    resizeCalc.call(this);

    this.inputs = [];

    this.keyboard = new Keyboard([SPACE], this.inputs);
}

export {setup};
