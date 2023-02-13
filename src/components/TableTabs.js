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
  DialogTitle,
  Dialog,
  DialogContent,
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
import { useSnackbar } from "notistack";

const StyledTableCell = styled(TableCell)({
  padding: "12px 20px 12px 20px",
});

const TableTabs = ({ clientList, active = false }) => {
  const [page, setPage] = useState(1);
  const pageLimit = 6;
  const dispatch = useDispatch();
  const [userToUpdate, setUserToUpdate] = useState();
  const [userToDelete, setUserToDelete] = useState();
  const { enqueueSnackbar } = useSnackbar();

  const handleCloseDialog = () => {
    setUserToUpdate(null);
  };

  const handleCloseDialogDelete = () => {
    setUserToDelete(null);
  };

  const handleToRestore = (item) => {
    dispatch(handleEnableClient(item.id));
    enqueueSnackbar("Restaurado com sucesso", {
      variant: "success",
    });
  };

  const handleToDelete = (item) => {
    dispatch(handleDisabledClient(item.id));
    setUserToDelete(null);
    enqueueSnackbar("Excluido com sucesso", {
      variant: "success",
    });
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
                            onClick={() => setUserToDelete(item)}
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
                          onClick={() => handleToRestore(item)}
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
      <Dialog
        open={!!userToDelete}
        onClose={handleCloseDialogDelete}
        maxWidth="xs"
      >
        <DialogTitle sx={{ fontWeight: 600 }}>
          Tem certeza que deseja excluir esse contato?
        </DialogTitle>
        <DialogContent>
          <Stack
            flexDirection="row"
            justifyContent="end"
            alignItems="center"
            mt="1rem"
          >
            <Button
              onClick={() => handleCloseDialogDelete(false)}
              sx={{
                fontWeight: 600,
                textTransform: "none",
                color: "#464E5F",
                mr: "1rem",
              }}
            >
              Cancelar
            </Button>
            <Button
              variant="contained"
              onClick={() => handleToDelete(userToDelete)}
              sx={{
                textTransform: "none",
                fontWeight: 600,
              }}
            >
              Excluir
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
      <Pagination
        sx={{ pb: "1rem" }}
        count={Math.ceil(clientList.length / pageLimit)}
        onChange={(_, value) => setPage(value)}
        page={page}
        size="small"
      />
    </Stack>
  );
};

export default TableTabs;
