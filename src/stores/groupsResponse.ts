import { GetGroupsResponse, Group, User } from "../components/groupsResponse";

export const user1: User = {
  first_name: "One",
  last_name: "OneLast",
};
export const user2: User = {
  first_name: "Two",
  last_name: "TwoLast",
};
export const user3: User = {
  first_name: "Three",
  last_name: "ThreeLast",
};
export const user4: User = {
  first_name: "Four",
  last_name: "FourLast",
};
export const user5: User = {
  first_name: "Five",
  last_name: "FiveLast",
};

export const group1: Group = {
  id: 1,
  name: "Group 1",
  closed: false,
  avatar_color: "000",
  members_count: 2,
  friends: [user1, user2],
};

export const group2: Group = {
  id: 1,
  name: "Group 2",
  closed: true,
  avatar_color: "000",
  members_count: 5,
  friends: [],
};

export const group3: Group = {
  id: 1,
  name: "Group 3",
  closed: false,
  members_count: 2,
};

export const getGroupsResponse: GetGroupsResponse = {
  result: 1,
  data: [group1, group2, group3],
};
