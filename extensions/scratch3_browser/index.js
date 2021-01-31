const BlockType = require('../../extension-support/block-type');
const ArgumentType = require('../../extension-support/argument-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');

class Scratch3BrowserBlocks {
    constructor(runtime) {
        this.runtime = runtime;
    }
 
    getInfo() {
        return {
            id: 'browser',
            name: 'Browser Information',
            blocks: [
                {
                    opcode: 'getBrowserName',
                    blockType: BlockType.REPORTER,
                    text: 'Get Browser Name',
                },
				// Required: the list of blocks implemented by this extension,
				// in the order intended for display.
				{
                    opcode: 'getLocation',
                    blockType: BlockType.REPORTER,
                    text: 'Get Browser location',
                }
            ],
        }
    }
 
    getBrowserName() {
        return navigator.appVersion;
    }
	
	//opcode	
	getLocation() {
		return navigator.platform;
	}
	
}
 
module.exports = Scratch3BrowserBlocks;