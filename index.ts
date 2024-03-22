import { createTeam } from "./src/GitManager";
import executeSequencePromises from "./src/utils/executeSequencePromises";

import labels from "./config/labels";
import milestones from "./config/milestones";
import teams from "./config/teams";

executeSequencePromises(teams, team => createTeam(team, labels, milestones));
