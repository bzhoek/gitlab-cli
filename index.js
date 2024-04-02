const axios = require('axios')

const PRIVATE_TOKEN = process.env.PRIVATE_TOKEN || (() => {
  throw "PRIVATE_TOKEN environment not set"
})();

const options = {
  headers: {'PRIVATE-TOKEN': PRIVATE_TOKEN}
};

const find_project = async (name) => {
  let projects = await axios.get('https://gitlab.ripe.net/api/v4/users/bvanderhoek/projects', options)
  return projects.data.filter(project => project.name === name)
}

const list_issues = async (project_id) => {
  let issues = await axios.get(`https://gitlab.ripe.net/api/v4/projects/${project_id}/issues`, options)
  return issues.data
}

const main = async (project) => {
  let groups = await axios.get('https://gitlab.ripe.net/api/v4/groups', options)
  console.log(groups.data)
  let projects = await axios.get('https://gitlab.ripe.net/api/v4/groups', options)
  console.log(projects.data)
  // projects.data.filter()
}

// main('testcontainer-mcve')
// find_project('testcontainer-mcve').then(console.log)
list_issues(943).then(console.log)