import * as React from 'react';
import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  Header,
  Group,
  // SimpleCell,
  usePlatform,
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import { GroupsResponse } from './components/groupsResponse';

const App = () => {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout header={platform !== 'vkcom' && <PanelHeader delimiter="none" />}>
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Groups List</PanelHeader>
              <Group header={<Header mode="secondary">Items</Header>}>
                {/* <SimpleCell>Hello</SimpleCell>
                <SimpleCell>World</SimpleCell> */}
                <GroupsResponse />
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
};

export default App;