import { CellButton, Popover, SimpleCell } from "@vkontakte/vkui";
import React, { useMemo } from "react";
import { Group, User } from "../groupsResponse";

import "./groupInfo.css";

interface GroupInfoProps {
  group: Group;
}

export function GroupInfo({ group }: GroupInfoProps) {
  const iconColor: string = useMemo(() => {
    if (group.avatar_color && CSS.supports("color", group.avatar_color)) {
      return group.avatar_color;
    }

    return "#FFFFFF";
  }, [group]);

  const friends: User[] = useMemo(() => {
    if (group.friends) {
      return group.friends;
    }

    return [];
  }, [group]);

  return (
    <SimpleCell
      before={
        <div
          className="icon"
          style={{
            background: `${iconColor}`,
          }}
        />
      }
      after={
        <>
          <div className="divInfo">
            Закрытая группа: {group.closed ? "да" : "нет"}
          </div>
          <div className="divInfo">
            Количество подписчиков: {group.members_count}
          </div>
          <Popover
            noStyling
            trigger="click"
            id="menupopup"
            role="menu"
            aria-labelledby="menubutton"
            content={
              <div className="popOver">
                {friends.map((friend) => {
                  return (
                    <SimpleCell
                      key={`${friend.first_name}_${friend.last_name}`}
                    >
                      {friend.first_name} {friend.last_name}
                    </SimpleCell>
                  );
                })}
              </div>
            }
          >
            <CellButton aria-controls="menupopup" aria-haspopup="true">
              Количество друзей: {friends.length}
            </CellButton>
          </Popover>
        </>
      }
    >
      {group.name}
    </SimpleCell>
  );
}
