import { LabelType } from "../types/GithubType";
import { TeamType } from "../types/model";
import { addCollaborator, createLabel, createMilestone, createOrgRepo, deleteLabel, getLabels } from "./Api";
import executeSequencePromises from "./utils/executeSequencePromises";

export const addAllMembers = (team: TeamType) => {
  const { org, members, repo } = team;
  return executeSequencePromises(members, (member) => {
    return addCollaborator(org, repo.name, member.username, member.permission)
      .then(() => console.log(`Add ${member.username} to ${repo.name}.`))
      .catch((error) => {
        console.error(`Failed to add ${member.username} to ${repo.name}.`);
        console.info(error);
      })
  })
}

export const createTeam = (team: TeamType, labels: LabelType[], milestones: string[]) => {
  const { org, repo } = team;
  return createOrgRepo(org, repo.name, repo.description, repo.isPrivate)
    .then(() => console.log(`${repo.name} was created.`))
    .then(() => addAllMembers(team))
    .then(() => deleteAllLavels(team))
    .then(() => createAllLabels(team, labels))
    .then(() => creeateAllMilestones(team, milestones))
    .then(() => console.log(`End.`))
    .catch((error) => {
      console.error("The repository was not created.");
      console.info(error);
    });
}

export const deleteAllLavels = (team: TeamType) => {
  const { org, repo } = team;
  return getLabels(org, repo.name).then(({ data }) => {
    return executeSequencePromises(data, ({ name }) => {
      return deleteLabel(org, repo.name, name)
        .then(() => console.log(`Delete ${name} from ${repo.name}.`))
        .catch((error) => {
          console.error(`Failed to delete ${name} from ${repo.name}.`);
          console.info(error);
        })
    })
  })
}

export const createAllLabels = (team: TeamType, labels: LabelType[]) => {
  const { org, repo } = team;
  return executeSequencePromises(labels, (label) => {
    return createLabel(org, repo.name, label)
      .then(() => console.log(`Create ${label.name} in ${repo.name}.`))
      .catch((error) => {
        console.error(`Failed to create ${label.name} in ${repo.name}.`);
        console.info(error);
      })
  })
}

export const creeateAllMilestones = (team: TeamType, milestones: string[]) => {
  const { org, repo } = team;
  return executeSequencePromises(milestones, (milestone) => {
    return createMilestone(org, repo.name, milestone)
      .then(() => console.log(`Create ${milestone} in ${repo.name}.`))
      .catch((error) => {
        console.error(`Failed to create ${milestone} in ${repo.name}.`);
        console.info(error);
      })
  })
}