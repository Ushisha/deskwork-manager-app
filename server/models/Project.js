const mongoose = require('mongoose')
const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  status: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
  },
  // todos: [
  //   new mongoose.Schema({
  //     todo: {
  //       type: String,
  //     },

  //     status: {
  //       type: String,
  //       enum: ['Not Started', 'In Progress', 'Completed'],
  //     },
  //     projectId: {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: 'Project',
  //     },
  //   }),
  // ],
})

module.exports = mongoose.model('Project', ProjectSchema)
