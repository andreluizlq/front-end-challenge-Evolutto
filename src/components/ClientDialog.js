import { useMemo } from "react";
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
    <Dialog
      open={openDialog}
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
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Nome"
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
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  fullWidth
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
              render={({ field, fieldState: { error } }) => (
                <TextField
                  {...field}
                  select
                  label="Sexo"
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
            disabled={!disable}
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
