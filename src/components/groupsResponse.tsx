import { SimpleCell, Spinner } from "@vkontakte/vkui";
import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { GroupInfo } from "./components/groupInfo";
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
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const fetchGroups = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        const response = await fetch("./groups.json");

        if (!response.ok) {
          setGroupsResponse({
            result: 0,
          });
        }
        const data = await response.json();
        setGroupsResponse({
          result: 1,
          data: data,
        });
      } finally {
        setIsLoading(false);
      }
    };
    fetchGroups();
  }, []);

  return useMemo(() => {
    if (isLoading) {
      return <Spinner size="large" style={{ margin: "20px 0" }} />;
    }

    if (groupsResponse.result === 0 || !groupsResponse.data) {
      console.error("Error loading data");

      return <SimpleCell>Ошибочка вышла ¯\_(ツ)_/¯</SimpleCell>;
    }

    return (
      <>
        <GroupSelector allGroups={groupsResponse.data} setGroups={setGroups} />
        {groups?.map((group) => {
          return <GroupInfo group={group} key={group.id} />;
        })}
      </>
    );
  }, [groupsResponse, groups, isLoading]);
}
