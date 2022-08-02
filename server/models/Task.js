const mongoose = require('mongoose')
const TaskSchema = new mongoose.Schema({
  todo: {
    type: String,
  },

  isCompleted: {
    type: Boolean,
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  },
})

module.exports = mongoose.model('Task', TaskSchema)
