import { Stack, Box, Container } from "@mui/material";
import LogoImage from "../assets/components/image/logoImage";
const Page = ({ children }) => {
  return (
    <Stack
      sx={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <Stack alignItems="start" p="1rem">
        <LogoImage width={"16rem"} />
      </Stack>
      <Container>
        <Box pt="6rem">{children}</Box>
      </Container>
    </Stack>
  );
};

export default Page;
