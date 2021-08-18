const { ShardingManager } = require('discord.js')
const logger = require('./modules/logger')
const chalk = require('chalk')
const fs = require('fs')

const logo = fs.readFileSync('./logo.txt').toString()
console.log(chalk.blueBright(logo), '\n')

// eslint-disable-next-line
const shard = new ShardingManager(`${__dirname}/index.js`, {
  token: process.env.BOT_TOKEN,
  totalShards: 'auto',
  respawn: true
})

shard.on('shardCreate', shard => {
  logger.info(`Starting shard ${shard.id}`)
})

process.on('unhandledRejection', error => {
  logger.error(4, `Unhandled promise rejection: ${error}`)
})

shard.spawn()
