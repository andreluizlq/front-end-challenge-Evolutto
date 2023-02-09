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
} from "@mui/material";
import { useDispatch } from "react-redux";
import {
  handleDisabledClient,
  handleEnableClient,
} from "../redux/slices/clientDataSlice";
import ClientDialog from "./ClientDialog";

const TableTabs = ({ clientList, active = false }) => {
  const [page, setPage] = useState(1);
  const pageLimit = 10;
  const dispatch = useDispatch();
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Stack alignItems="center" spacing={3}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 10 }} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>NOME</TableCell>
              <TableCell>E-MAIL</TableCell>
              <TableCell>AÇÕES</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientList
              ?.slice((page - 1) * pageLimit, page * pageLimit)
              .map((item, index) => (
                <>
                  <TableRow key={index}>
                    <TableCell component="th" scope="row">
                      {item.name}
                    </TableCell>
                    <TableCell>{item.email}</TableCell>
                    <TableCell>
                      <Stack flexDirection="row" justifyContent="space-between">
                        {active && (
                          <Button onClick={() => setOpenDialog(true)}>
                            Editar
                          </Button>
                        )}
                        {active && (
                          <Button
                            onClick={() =>
                              dispatch(handleDisabledClient(index))
                            }
                          >
                            Excluir
                          </Button>
                        )}
                        {!active && (
                          <Button
                            onClick={() => dispatch(handleEnableClient(index))}
                          >
                            Restaurar
                          </Button>
                        )}
                      </Stack>
                    </TableCell>
                  </TableRow>
                  <ClientDialog
                    openDialog={openDialog}
                    setOpenDialog={setOpenDialog}
                    client={item}
                    index={index}
                  />
                </>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
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
