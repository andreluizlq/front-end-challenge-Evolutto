import { useMemo } from "react";
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import {
  handlePostClient,
  handlePutClient,
} from "../redux/slices/clientDataSlice";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";

const ClientDialog = ({ openDialog, setOpenDialog, index, client }) => {
  const dispatch = useDispatch();
  const { control, handleSubmit, watch, reset } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: client?.name || "",
      email: client?.email || "",
      type: client?.type || "",
    },
  });

  const watchAllFields = watch(["name", "email", "type"]);

  const disable = useMemo(() => {
    const name = watchAllFields[0];
    const email = watchAllFields[1];
    const type = watchAllFields[2];
    const watchBaseFields = { name, email, type };
    const fields = Object.keys(watchBaseFields);
    const result = fields.every(
      (item) =>
        watchBaseFields[item] !== undefined && watchBaseFields[item].length > 0
    );
    return result;
  }, [watchAllFields]);

  const onSubmit = async (values) => {
    if (index) {
      const response = await dispatch(handlePutClient({ index, values }));
      if (response.payload) {
        handleDialog(false);
      }
    } else {
      console.log(values);
      const response = await dispatch(handlePostClient(values));
      if (response.payload) {
        handleDialog(false);
      }
    }
  };

  const handleDialog = (value) => {
    if (value) {
      setOpenDialog(value);
    } else {
      setOpenDialog(value);
      reset({
        name: client?.name || "",
        email: client?.email || "",
        type: client?.type || "",
      });
    }
  };

  const database = [{ name: "Masculino" }, { name: "Feminino" }];

  return (
    <Dialog open={openDialog} onClose={() => handleDialog(false)}>
      <DialogTitle>Editar contato</DialogTitle>
      <DialogContent>
        <Stack>
          <Stack spacing={1}>
            <Typography>name</Typography>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  required
                  size="small"
                  error={Boolean(error)}
                  helperText={error?.message}
                  inputProps={{ maxLength: 1000 }}
                />
              )}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography>Email</Typography>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  required
                  size="small"
                  error={Boolean(error)}
                  helperText={error?.message}
                  inputProps={{ maxLength: 1000 }}
                />
              )}
            />
          </Stack>
          <Stack spacing={1}>
            <Typography>Sexo</Typography>
            <Controller
              name="type"
              control={control}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  select
                  required
                  fullWidth
                  size="small"
                  error={Boolean(error)}
                  helperText={error?.message}
                >
                  {database.map((item, index) => (
                    <MenuItem key={index} value={item.name}>
                      {item.name}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Stack>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleDialog(false)}>Cancelar</Button>
        <Button
          variant="contained"
          onClick={handleSubmit(onSubmit)}
          disabled={!disable}
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ClientDialog;
