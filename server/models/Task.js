const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
  todo: {
    type: String,
  },

  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  ProjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
})

module.exports = mongoose.model('Task', TaskSchema)
