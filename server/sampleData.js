// Projects
const projects = [
  {
    id: '1',
    name: 'eCommerce Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '2',

    name: 'Dating App',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '3',

    name: 'SEO Project',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
  {
    id: '4',

    name: 'Design Prototype',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'Done',
  },
  {
    id: '5',
    name: 'Auction Website',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
    status: 'In Progress',
  },
]

// Tasks
const tasks = [
  {
    id: '1',
    projectId: '2',
    status: 'In Progress',
    todo: 'plan project1',
  },
  {
    id: '2',
    projectId: '1',
    status: 'In Progress',
    todo: 'plan project2',
  },
  {
    id: '3',
    projectId: '3',
    status: 'In Progress',
    todo: 'plan project3',
  },
  {
    id: '4',
    projectId: '4',
    status: 'In Progress',
    todo: 'plan project4',
  },
  {
    id: '5',
    projectId: '4',
    status: 'In Progress',
    todo: 'plan project5',
  },
]

module.exports = { projects, tasks }
