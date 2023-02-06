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
import mockApi from "../utils/mockApi";

const TableTabs = () => {
  const [page, setPage] = useState(1);
  const pageLimit = 10;

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
            {mockApi
              ?.slice((page - 1) * pageLimit, page * pageLimit)
              .map((item) => (
                <TableRow>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>
                    <Stack flexDirection="row" justifyContent="space-between">
                      <Button>Editar</Button>
                      <Button>Excluir</Button>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        sx={{ mb: "1rem" }}
        count={Math.ceil(mockApi.length / pageLimit)}
        onChange={(_, value) => setPage(value)}
        page={page}
        size="small"
      />
    </Stack>
  );
};

export default TableTabs;
