import { BoxUI } from "@/modules/shared/components/atoms/box/box";
import { ControlledTextFieldUI } from "@/modules/shared/components/atoms/forms";
import { ModalUI } from "@/modules/shared/components/atoms/modal/modal";
import { TypographyUI } from "@/modules/shared/components/atoms/typography/typography";
import { ButtonActionUI } from "@/modules/shared/components/molecules/buttonAction/buttonAction";
import useModal from "@/modules/shared/hooks/useModal";
import { resolver, validator } from "@/modules/shared/lib/utils";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTodoStore } from "../store/todoStore";

export default function AddTodoView() {
  const schema = validator.object().shape({
    title: validator.string().required("Este campo es requerido"),
  });

  const { addTodo } = useTodoStore();
  const { close, isOpen, open } = useModal();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: resolver(schema),
  });

  const handleAdd = (data: { title: string }) => {
    addTodo(data.title);
    reset({ title: "" });
    close();
  };

  return (
    <>
      <ModalUI open={isOpen} onClose={close} variant="sm">
        <BoxUI
          sx={{
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BoxUI
            sx={{
              display: "flex",
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TypographyUI variant="h5" sx={{ alignSelf: "flex-start" }}>
              Crear Todo
            </TypographyUI>
            <IconButton onClick={close}>
              <Close color="error" />
            </IconButton>
          </BoxUI>
          <ControlledTextFieldUI
            control={control}
            name="title"
            label="Titulo"
            error={!!errors.title}
            helperText={errors.title?.message}
            sx={{ width: "90%", marginTop: "10px" }}
          />
          <ButtonActionUI
            text="Guardar"
            actionType="save"
            sx={{ marginTop: "10px", width: "90%" }}
            variant="outlined"
            onClick={handleSubmit(handleAdd)}
          />
        </BoxUI>
      </ModalUI>
      <ButtonActionUI
        text="Crear"
        actionType="add"
        fullWidth={false}
        variant="outlined"
        onClick={open}
      />
    </>
  );
}
