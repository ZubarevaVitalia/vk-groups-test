import React from "react";
import { useState } from "react";
import { getGroupsResponse } from "../stores/groupsResponse";
import { GroupSelector } from "./components/groupSelector";

export interface GetGroupsResponse {
  result: 1 | 0;
  data?: Group[];
}

export interface Group {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: User[];
}

export interface User {
  first_name: string;
  last_name: string;
}

export function GroupsResponse() {
  const [groupsResponse, setGroupsResponse] = useState<GetGroupsResponse>({
    result: 0,
  });
  const [groups, setGroups] = useState<Group[] | undefined>([]);
  setGroupsResponse(getGroupsResponse);

  if (groupsResponse.result === 0 || !groupsResponse.data) {
    return null;
  }

  setGroups(groupsResponse.data);
  return (<GroupSelector />);
}
