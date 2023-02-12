import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Stack,
  Button,
  Typography,
  Box,
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  handleDisabledClient,
  handleEnableClient,
} from "../redux/slices/clientDataSlice";
import ClientDialog from "./ClientDialog";
import { styled } from "@mui/material/styles";
import EditIcon from "../assets/components/icons/EditIcon";
import DeleteIcon from "../assets/components/icons/DeleteIcon";
import ReturnIcon from "../assets/components/icons/ReturnIcon";
import UserImage from "../assets/components/image/UserImage";

const StyledTableCell = styled(TableCell)({
  padding: "12px 20px 12px 20px",
});

const TableTabs = ({ clientList, active = false }) => {
  const [page, setPage] = useState(1);
  const pageLimit = 6;
  const dispatch = useDispatch();
  const [userToUpdate, setUserToUpdate] = useState();

  const handleCloseDialog = () => {
    setUserToUpdate(null);
  };

  return (
    <Stack alignItems="center" spacing={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} size="small" aria-label="a dense table">
          <TableHead sx={{ backgroundColor: "#F3F6F9" }}>
            <TableRow>
              <StyledTableCell sx={{ color: "#464E5F", fontWeight: 600 }}>
                NOME
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#B5B5C3" }}>
                E-MAIL
              </StyledTableCell>
              <StyledTableCell sx={{ color: "#B5B5C3" }}>AÇÕES</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientList
              ?.slice((page - 1) * pageLimit, page * pageLimit)
              .map((item, index) => (
                <TableRow key={index} hover>
                  <TableCell sx={{ py: "0.8rem" }}>
                    <Stack
                      maxWidth="300px"
                      flexDirection="row"
                      alignItems="center"
                    >
                      <Box mr="1rem">
                        <UserImage image={item.type} />
                      </Box>
                      <Typography fontWeight={600} color="#464E5F" noWrap>
                        {item.name}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack maxWidth="304px">
                      <Typography fontWeight={600} color="#464E4F">
                        {item.email}
                      </Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>
                    <Stack
                      flexDirection="row"
                      justifyContent="space-between"
                      maxWidth="263px"
                    >
                      {active && (
                        <>
                          <Button
                            startIcon={<EditIcon />}
                            color="secondary"
                            sx={{ fontWeight: 600, textTransform: "none" }}
                            onClick={() => setUserToUpdate(item)}
                          >
                            Editar
                          </Button>

                          <Button
                            startIcon={<DeleteIcon />}
                            color="error"
                            sx={{ fontWeight: 600, textTransform: "none" }}
                            onClick={() =>
                              dispatch(handleDisabledClient(item.id))
                            }
                          >
                            Excluir
                          </Button>
                        </>
                      )}
                      {!active && (
                        <Button
                          startIcon={<ReturnIcon />}
                          color="success"
                          sx={{ fontWeight: 600, textTransform: "none" }}
                          onClick={() => dispatch(handleEnableClient(item.id))}
                        >
                          Restaurar
                        </Button>
                      )}
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ClientDialog
        open={!!userToUpdate}
        onClose={handleCloseDialog}
        client={userToUpdate}
      />
      <Pagination
        sx={{ mb: "1rem" }}
        count={Math.ceil(clientList.length / pageLimit)}
        onChange={(_, value) => setPage(value)}
        page={page}
        size="small"
      />
    </Stack>
  );
};

export default TableTabs;
