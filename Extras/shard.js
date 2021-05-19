const {ShardingManager} = require('discord.js');
const config = require('../config.json');

const shards = new ShardingManager("./index.js", {
     token: process.env.TOKEN,
     totalShards: "auto"

});

/*shards.on("shardCreate", async (shard) => {
  console.log(`[$[ \u001b[33mSHARD\u001b[39m ] Shard ${shard.id}/${shards.totalShards}.`);
});*/

shards.on("shardCreate", async (shard) => {
  console.log(`
  ===============================================
  Shard ativa!
  ID da Shard: ${shard.id}
  Total de Shards: ${shards.totalShards}.
  ===============================================`);
});

shards.spawn(shards.totalShards, 100); 