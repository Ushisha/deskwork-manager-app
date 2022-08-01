const mongoose = require('mongoose')
const CounterSchema = new mongoose.Schema({
  count: { type: Number },
})

module.exports = mongoose.model('Counter', CounterSchema)
