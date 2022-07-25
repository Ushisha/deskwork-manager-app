// const { projects, tasks } = require('../sampleData.js')
//mongoose models
const Project = require('../models/Project')
const Task = require('../models/Task')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
} = require('graphql')

//create project type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    todos: {
      type: new GraphQLList(TaskType),
      resolve(parent, args) {
        return Task.filter((task) => task.projectId === parent.id)
        // const todos = tasks.filter((task) => task.projectId === parent.id)
        // return todos
      },
    },
  }),
})
//create task type
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    todo: { type: GraphQLString },
    status: { type: GraphQLString },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectId)
        // return projects.find((project) => project.id === parent.projectId)
      },
    },
  }),
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    projects: {
      type: new GraphQLList(ProjectType),
      resolve(parent, args) {
        return Project.find()
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Project.findById(args.id)
        // return projects.find((project) => project.id === args.id)
      },
    },
    tasks: {
      type: new GraphQLList(TaskType),
      resolve(parent, args) {
        return Task.find()
      },
    },
    task: {
      type: TaskType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Task.findById(args.id)
        // return tasks.find((task) => task.id === args.id)
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
})
