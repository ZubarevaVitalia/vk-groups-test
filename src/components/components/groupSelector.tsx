import {
  Checkbox,
  Header,
  Input,
  NativeSelect,
  Panel,
  View,
} from "@vkontakte/vkui";
import React, { useEffect, useState } from "react";
import { Group } from "../groupsResponse";

interface GroupSelectorProps {
  allGroups: Group[];
  setGroups: React.Dispatch<React.SetStateAction<Group[] | undefined>>;
}

interface SelectorStates {
  closed: string; //'all' | 'closed' | 'opened',
  color: string | undefined;
  onlyFriends: boolean;
}

export function GroupSelector({ allGroups, setGroups }: GroupSelectorProps) {
  const [selectorStates, setSelectorStates] = useState<SelectorStates>({
    closed: "all",
    color: "",
    onlyFriends: false,
  });

  useEffect(() => {
    const result: Group[] = allGroups.filter((group) => {
      const color = group.avatar_color ? group.avatar_color : "white";
      if (selectorStates.color !== "" && selectorStates.color !== color) {
        return false;
      }

      if (
        selectorStates.onlyFriends &&
        (!group.friends || group.friends.length === 0)
      ) {
        return false;
      }

      switch (selectorStates.closed) {
        case "closed":
          return group.closed;

        case "opened":
          return !group.closed;
        default:
          return true;
      }
    });

    setGroups(result);
  }, [selectorStates, allGroups]);

  return (
    <View activePanel="group-select">
      <Panel id="group-select">
        <Header mode="secondary">Поиск групп</Header>
        <NativeSelect
          id="select-closed"
          style={{ width: "20%" }}
          onChange={(e) => {
            setSelectorStates((currentValue) => {
              return {
                closed: e.target.value,
                color: currentValue.color,
                onlyFriends: currentValue.onlyFriends,
              };
            });
          }}
        >
          <option value="all">Все</option>
          <option value="closed">Закрытая</option>
          <option value="opened">Открытая</option>
        </NativeSelect>
        <Input
          id="input-color"
          type="text"
          placeholder="Цвет иконки"
          style={{ width: "20%" }}
          onChange={(e) => {
            setSelectorStates((currentValue) => {
              const result = {
                closed: currentValue.closed,
                color: e.target.value,
                onlyFriends: currentValue.onlyFriends,
              };

              return result;
            });
          }}
        />
        <Checkbox
          onChange={(e) => {
            setSelectorStates((currentValue) => {
              const result = {
                closed: currentValue.closed,
                color: currentValue.color,
                onlyFriends: e.target.checked,
              };

              return result;
            });
          }}
        >
          Только группы с друзьями
        </Checkbox>
      </Panel>
    </View>
  );
}
