import { createIssues, executeCreateLabels, executeDeleteLabels, initAllMilestones, initAllRepositories } from './gitManager.js';

import { repositories, milestones, labels, issues } from './data/repositories.js';

// initAllRepositories(repositories)
// executeDeleteLabels(repositories);
// executeCreateLabels(repositories, labels)
// initAllMilestones(repositories, milestones)
createIssues(issues)
