const { Permissions } = require('discord.js')

module.exports = class Command {
  constructor (client, name, options = {}) {
    this.client = client
    this.name = options.name || name
    this.options = options.options || []
    this.description = options.description || 'Without description'
    this.category = options.category || 'Others'
    this.userPerms = new Permissions(options.userPerms).freeze()
    this.botPerms = new Permissions(options.botPerms).freeze()
    this.enabled = options.enabled || false
    this.ownerOnly = options.ownerOnly || false
  }

  // eslint-disable-next-line no-unused-vars
  async run (interaction, lang) {
    throw new Error(`Command ${this.name} doesn't provide a run method!`)
  }
}
