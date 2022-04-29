import axios from 'axios';

const ORG = 'unq-ui'; // process.env.ORG;
const AUTH_TOKEN = "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"; // process.env.AUTH_TOKEN;

axios.defaults.headers.common['Authorization'] = `token ${AUTH_TOKEN}`;

const defaultRepositoryOptions = {
  org: ORG,
  description: 'Tp UI 2022s1',
  private: true
};

const createRepository = (repositoryName, options = defaultRepositoryOptions) => {
  const data = {
    ...options,
    name: repositoryName,
  };
  return axios.post(`https://api.github.com/orgs/${ORG}/repos`, data)
    .then(() => console.log('Se creo el repositorio', repositoryName))
}

const addCollaborators = (repositoryName, collaborators) => {
  const allPromises = collaborators.map(username => {
    return axios.put(`https://api.github.com/repos/${ORG}/${repositoryName}/collaborators/${username}`)
  });
  return Promise.allSettled(allPromises).then((results) => {
    results.forEach((result, index) => {
      if (result.status === 'fulfilled') {
        console.log('Se agrego', collaborators[index]);
      } else {
        console.log('Error con', collaborators[index], result.reason.response.data)
      }
    })
  })
}

const initRepository = async (repositoryName, collaborators) => {
  console.log('Init', repositoryName);
  await createRepository(repositoryName);
  await addCollaborators(repositoryName, collaborators);
  console.log('End', repositoryName);
  console.log('----------------------------');
  return Promise.resolve();
}

const createMilestones = async (repositoryName, milestones) => {
  return milestones.reduce((promise, milestone) => {
    return promise
      .then(() => axios.post(`https://api.github.com/repos/${ORG}/${repositoryName}/milestones`, { title: milestone }))
  }, Promise.resolve());
}

const deleteAllLabels = async (repositoryName) => {
  const currentLabels = await axios.get(`https://api.github.com/repos/${ORG}/${repositoryName}/labels`).then(response => response.data);
  const deleteLabels = currentLabels.map((label) => axios.delete(`https://api.github.com/repos/${ORG}/${repositoryName}/labels/${label.name}`))
  return Promise.all(deleteLabels).then(() => console.log(`Se eliminaron labels del ${repositoryName}`))
}

const createLabels = (repositoryName, labels) => {
  const createLabels = labels.map((label) => axios.post(`https://api.github.com/repos/${ORG}/${repositoryName}/labels`, label))
  return Promise.all(createLabels).then(() => console.log(`Se crearon labels del ${repositoryName}`))
}

export const initAllRepositories = (repositories) => {
  repositories.reduce((promise, repository) => {
    return promise.then(() => initRepository(repository.name, repository.collaborators))
      .catch((e) => console.log('ERROR', repository.name, e))
  }, Promise.resolve())
}

export const executeDeleteLabels = (repositories) => {
  repositories.reduce((promise, repository) => {
    return promise.then(() => deleteAllLabels(repository.name))
      .catch((e) => console.log('ERROR', repository.name, e))
  }, Promise.resolve())
}

export const initAllMilestones = (repositories, milestones) => {
  return repositories.reduce((promise, repository) => {
    return promise.then(() => createMilestones(repository.name, milestones))
      .catch((e) => console.log('ERROR', repository.name, e))
  }, Promise.resolve())
}

export const executeCreateLabels = (repositories, labels) => {
  repositories.reduce((promise, repository) => {
    return promise.then(() => createLabels(repository.name, labels))
      .catch((e) => console.log('ERROR', repository.name, e))
  }, Promise.resolve())
}

export const createIssue = (repositoryName, issues) => {
  const allIssues = issues.map((issue) => axios.post(`https://api.github.com/repos/${ORG}/${repositoryName}/issues`, issue))
  return Promise.all(allIssues);
}

export const createIssues = (repositories) => {
  repositories.reduce((promise, repository) => {
    return promise.then(() => createIssue(repository.name, repository.issues))
      .catch((e) => console.log('ERROR', repository.name, e))
  }, Promise.resolve())
}