const chalk = require('chalk')

const color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

const bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

const babyLog = (text, color) => {
	return !color ? chalk.yellow('[BABY] ') + chalk.green(text) : chalk.yellow('[BABY] ') + chalk.keyword(color)(text)
}

module.exports = {
	color,
	bgcolor,
	babyLog
}
