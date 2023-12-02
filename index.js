require('dotenv').config()

const { checkConnection, syncModels  } = require('./database/index')
const { addRelationsToModels } = require('./database/relations')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function checkAndSyncMysql() {
  await checkConnection()
  addRelationsToModels()
  await syncModels('alter')
}

function initializeAndListenWithExpress() {
  const app = express()
    .use(cors())
    .use(morgan('dev'))
    .use(express.json())
    // .use(express.static('public'))
    .use('/api', require('./api/routes'))

    .listen(process.env.PORT, () => {
      console.log(`> Listening on port: ${process.env.PORT}`)
    })
}

async function startApi(){
  await checkAndSyncMysql()
  initializeAndListenWithExpress()
}

startApi()