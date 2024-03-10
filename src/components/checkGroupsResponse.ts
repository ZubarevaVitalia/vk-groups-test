import { GetGroupsResponse } from "./groupsResponse";

export function checkGroupsResponse(groupsResponse: GetGroupsResponse) {
  if (groupsResponse.result === 0 || !groupsResponse.data) {
    return false;
  }

  return true;
}
