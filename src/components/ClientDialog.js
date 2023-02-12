import {
  Stack,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  Divider,
} from "@mui/material";
import {
  handlePostClient,
  handlePutClient,
} from "../redux/slices/clientDataSlice";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const ClientDialog = ({ open, onClose, client }) => {
  const dispatch = useDispatch();
  const uuid = require("uuid");
  const { control, handleSubmit, reset, formState } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      type: "",
      id: "",
    },
  });

  useEffect(() => {
    reset({
      name: client?.name || "",
      email: client?.email || "",
      type: client?.type || "",
      id: client?.id || "",
    });
  }, [client, reset]);

  const onSubmit = (values) => {
    if (client) {
      const response = dispatch(handlePutClient(values));
      if (response.payload) {
        handleDialog(false);
      }
    } else {
      const response = dispatch(handlePostClient({ ...values, id: uuid.v4() }));
      if (response.payload) {
        handleDialog(false);
      }
    }
  };

  const handleDialog = (value) => {
    onClose(value);
    reset({
      name: "",
      email: "",
      type: "",
      id: "",
    });
  };

  const database = [{ name: "Masculino" }, { name: "Feminino" }];

  return (
    <Dialog
      open={open}
      onClose={() => handleDialog(false)}
      maxWidth="xs"
      fullWidth
      sx={{ borderRadius: "16px" }}
    >
      <DialogTitle sx={{ fontWeight: 600 }}>Editar contato</DialogTitle>
      <DialogContent>
        <Divider />
        <Stack>
          <Stack mt="2rem">
            <Controller
              name="name"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Nome"
                  required
                  size="small"
                  error={Boolean(error)}
                  helperText={error?.message}
                  inputProps={{ maxLength: 30 }}
                />
              )}
            />
          </Stack>
          <Stack mt="1.6rem">
            <Controller
              name="email"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  required
                  label="EmailExemplo@email.com"
                  size="small"
                  error={Boolean(error)}
                  helperText={error?.message}
                  inputProps={{ maxLength: 30 }}
                />
              )}
            />
          </Stack>
          <Stack mt="1.6rem" mb="2rem">
            <Controller
              name="type"
              control={control}
              rules={{ required: true }}
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  select
                  label="Sexo"
                  fullWidth
                  required
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
        <Divider />
        <Stack
          flexDirection="row"
          justifyContent="end"
          alignItems="center"
          mt="1rem"
        >
          <Button
            onClick={() => handleDialog(false)}
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
            onClick={handleSubmit(onSubmit)}
            disabled={!formState.isValid}
            sx={{
              textTransform: "none",
              fontWeight: 600,
            }}
          >
            Salvar
          </Button>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default ClientDialog;
