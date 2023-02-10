import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Page from "./components/Page";
import TableTabs from "./components/TableTabs";
import { Stack, Tabs, Tab, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  fetchClientDataActive,
  fetchClientDataDisabled,
  selectClientDataActive,
  selectClientDataDisabled,
} from "./redux/slices/clientDataSlice";
import { unwrapResult } from "@reduxjs/toolkit";
import ClientDialog from "./components/ClientDialog";

const StyledTabs = styled((props) => <Tabs {...props} />)({
  "& .MuiTabs-indicator": {
    height: 4,
    borderRadius: "4px 4px 0px 0px",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontSize: "18.67px",
    marginRight: theme.spacing(1),
    "&.Mui-selected": {
      fontWeight: 700,
    },
  })
);

function App() {
  const dispatch = useDispatch();
  const listActive = useSelector(selectClientDataActive);
  const listDisabled = useSelector(selectClientDataDisabled);
  const [currentTab, setCurrentTab] = useState("Contatos ativos");
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    dispatch(fetchClientDataActive()).then(unwrapResult);
    dispatch(fetchClientDataDisabled()).then(unwrapResult);
  }, [dispatch]);

  const handleChangeTab = (event, newValue) => {
    setCurrentTab(newValue);
  };

  const ACCOUNT_TABS = [
    {
      value: "Contatos ativos",
      component: <TableTabs clientList={listActive} active />,
    },
    {
      value: "Contatos excluídos",
      component: <TableTabs clientList={listDisabled} />,
    },
  ];

  return (
    <Page>
      <Stack spacing={5}>
        <StyledTabs
          value={currentTab}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeTab}
          textColor="#000000"
        >
          {ACCOUNT_TABS.map((tab) => (
            <StyledTab
              disableRipple
              key={tab.value}
              label={tab.value}
              value={tab.value}
            />
          ))}
        </StyledTabs>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography color="#B5B5C3" fontWeight={500} lineHeight="1.313rem">
            Mais de {listActive.length + listDisabled.length}+ novos membros
          </Typography>
          <Button
            variant="contained"
            onClick={() => setOpenDialog(true)}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Novo Contato
          </Button>
        </Stack>
        {ACCOUNT_TABS.map((tab) => {
          const isMatched = tab.value === currentTab;
          return isMatched && <Box key={tab.value}>{tab.component}</Box>;
        })}
      </Stack>
      <ClientDialog openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Page>
  );
}

export default App;
