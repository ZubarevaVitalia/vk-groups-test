import {
  Checkbox,
  FormItem,
  Group,
  Input,
  NativeSelect,
  Panel,
  PanelHeader,
  View,
} from "@vkontakte/vkui";
import React from "react";

export function GroupSelector() {
  // groups, setGroups
  return (
    <View activePanel="native-select">
      <Panel id="native-select">
        <PanelHeader>NativeSelect</PanelHeader>
        <Group>
          <FormItem
            // top="Выберите пол"
            htmlFor="select-id"
            // bottom="Пример селекта с возможностью выбрать пол пользователя"
          >
            <NativeSelect id="select-closed">
              <option value="all">Все</option>
              <option value="closed">Закрытая</option>
              <option value="opened">Открытая</option>
            </NativeSelect>
            <Input id="input-color" type="text" defaultValue="Цвет иконки" />
            <Checkbox defaultChecked>Есть друзья в группе</Checkbox>
          </FormItem>
        </Group>
      </Panel>
    </View>
  );
}
