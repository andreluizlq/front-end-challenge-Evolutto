import {
  Container,
  Stack,
  Tabs,
  Tab,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import Page from "./components/Page";
import TableTabs from "./components/TableTabs";

function App() {
  const [currentTab, setCurrentTab] = useState("Contatos ativos");

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const ACCOUNT_TABS = [
    {
      value: "Contatos ativos",
      component: <TableTabs />,
    },
    {
      value: "Contatos excluídos",
      component: <TableTabs />,
    },
  ];

  return (
    <Page>
      <Container>
        <Stack spacing={5}>
          <Tabs
            value={currentTab}
            scrollButtons="auto"
            variant="scrollable"
            allowScrollButtonsMobile
            onChange={handleChangeTab}
          >
            {ACCOUNT_TABS.map((tab) => (
              <Tab
                disableRipple
                key={tab.value}
                label={tab.value}
                value={tab.value}
              />
            ))}
          </Tabs>
          <Stack flexDirection="row" justifyContent="space-between">
            <Typography color="#B5B5C3" fontWeight={500} lineHeight="1.313rem">
              More than 400+ new members
            </Typography>
            <Button>Novo Contato</Button>
          </Stack>
          {ACCOUNT_TABS.map((tab) => {
            const isMatched = tab.value === currentTab;
            return isMatched && <Box key={tab.value}>{tab.component}</Box>;
          })}
        </Stack>
      </Container>
    </Page>
  );
}

export default App;
