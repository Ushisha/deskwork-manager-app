
//mongoose models
const Project = require('../models/Project')
const Task = require('../models/Task')
const Counter = require('../models/Counter')

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLNumber,
  GraphQLBoolean,
  GraphQLInt,
} = require('graphql')

//create project type
const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },

  }),
})
//create task type
const TaskType = new GraphQLObjectType({
  name: 'Task',
  fields: () => ({
    id: { type: GraphQLID },
    todo: { type: GraphQLString },
    isCompleted: { type: GraphQLBoolean },
    project: {
      type: ProjectType,
      resolve(parent, args) {
        return Project.findById(parent.projectId)
       
      },
    },
  }),
})
// create counter type
const CounterType = new GraphQLObjectType({
  name: 'Counter',
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    count: { type: GraphQLInt, defaultValue: 0 },
  }),
})

//define the Query type
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
        
      },
    },
    counter: {
      type: CounterType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return Counter.findById(args.id)
      },
    },
  },
})

//mutations
const mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    // Add a project
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatus',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'Completed' },
            },
          }),
          defaultValue: 'Not started',
        },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          status: args.status,
        })

        return project.save()
      },
    },
    //delete a porject
    deleteProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        Task.find({ projectId: args.id }).then((tasks) => {
          tasks.forEach((task) => {
            task.remove()
          })
        })

        return Project.findByIdAndRemove(args.id)
      },
    },
    // add a task
    addTask: {
      type: TaskType,
      args: {
        todo: { type: new GraphQLNonNull(GraphQLString) },
        isCompleted: {
          type: new GraphQLNonNull(GraphQLBoolean),
          defaultValue: false,
        },
        projectId: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        const task = new Task({
          todo: args.todo,
          isCompleted: args.isCompleted,
          projectId: args.projectId,
        })

        return task.save()
      },
    },
    deleteTask: {
      type: TaskType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      resolve(parent, args) {
        return Task.findByIdAndRemove(args.id)
      },
    },
    updateTask: {
      type: TaskType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        todo: { type: GraphQLString },
        isCompleted: { type: new GraphQLNonNull(GraphQLBoolean) },
      },
      resolve(parent, args) {
        return Task.findByIdAndUpdate(
          args.id,
          {
            $set: {
              todo: args.todo,
              isCompleted: args.isCompleted,
            },
          },
          { new: true }
        )
      },
    },
    updateProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: 'ProjectStatusUpdate',
            values: {
              new: { value: 'Not Started' },
              progress: { value: 'In Progress' },
              completed: { value: 'Completed' },
            },
          }),
        },
      },
      resolve(parent, args) {
        return Project.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          },
          { new: true }
        )
      },
    },
    addCounter: {
      type: CounterType,
      args: {
        count: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        const counter = new Counter({
          count: args.count,
        })
        return counter.save()
      },
    },
    updateCounter: {
      type: CounterType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        count: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve(parent, args) {
        return Counter.findByIdAndUpdate(
          args.id,
          {
            $set: {
              count: args.count,
            },
          },
          { new: true }
        )
      },
    },
  },
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: mutation,
})
