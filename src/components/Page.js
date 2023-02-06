import { Stack, Box } from "@mui/material";

const Page = ({ children }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "#f1f1f1",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Stack alignItems="start" p="1rem">
        <Box component="img" alt="LOGO" src="images/logo.png" width="16rem" />
      </Stack>
      <Box pt="6rem">{children}</Box>
    </Stack>
  );
};

export default Page;
