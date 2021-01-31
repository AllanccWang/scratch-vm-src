//New blocks functions
const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const TargetType = require('../../extension-support/target-type');
const log = require('../../util/log');

class Scratch3NewBlocks {
    constructor (runtime) {
        this.runtime = runtime;
    }

    getInfo () {
        return {
            id: 'newblocks',
            name: 'New Blocks',
            blocks: [
                {
                    opcode: 'writeLog',
                    blockType: BlockType.COMMAND,
                    text: 'log [TEXT]',
                    arguments: {
                        TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello",
                            menu: "languages"
                        }
                    }
                },
				//added
				{
                    opcode: 'reporter1',
                    blockType: BlockType.REPORTER,
                    text: 'reporter [TEXT]', //full description
					arguments:{
						TEXT: {
                            type: ArgumentType.STRING,
                            defaultValue: "hello"
                        }
					}
                }//
            ],
            menus: {
                languages: {
                    acceptReporters: true,
                    items: [{ text: "test", value: "test"}, {text: "hello", value: "hello"}]
                }
            }
        };
    }

    writeLog (args) {
        const text = Cast.toString(args.TEXT);
        log.log(text);
    }
	//added
	reporter1(args){
		const num = Cast.toNumber(args.TEXT);
		return `Argument is ${num.toString(2)}`;
	}
}

module.exports = Scratch3NewBlocks;