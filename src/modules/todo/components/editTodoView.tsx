import { BoxUI } from "@/modules/shared/components/atoms/box/box";
import { ControlledTextFieldUI } from "@/modules/shared/components/atoms/forms";
import { ModalUI } from "@/modules/shared/components/atoms/modal/modal";
import { TypographyUI } from "@/modules/shared/components/atoms/typography/typography";
import { ButtonActionUI } from "@/modules/shared/components/molecules/buttonAction/buttonAction";
import { resolver, translate, validator } from "@/modules/shared/lib/utils";
import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useForm } from "react-hook-form";
import { useTodoStore } from "../store/todoStore";

export default function EditTodoView() {
  const schema = validator.object().shape({
    title: validator.string().required(translate("errors.required")),
  });

  const { updateTodo, todoToEdit, closeModalEdit, isOpenModalEdit } =
    useTodoStore();

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: resolver(schema),
    values: { title: todoToEdit?.title || "" },
  });

  const handleEdit = (data: { title: string }) => {
    updateTodo(data.title);
    reset({ title: "" });
    closeModalEdit();
  };

  return (
    <ModalUI open={isOpenModalEdit} onClose={closeModalEdit} variant="sm">
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
            {translate("todo.edit.titleModal")}
          </TypographyUI>
          <IconButton onClick={closeModalEdit}>
            <Close color="error" />
          </IconButton>
        </BoxUI>
        <ControlledTextFieldUI
          control={control}
          name="title"
          label={translate("todo.edit.form.title")}
          error={!!errors.title}
          helperText={errors.title?.message}
          sx={{ width: "90%", marginTop: "10px" }}
        />
        <ButtonActionUI
          text={translate("words.save")}
          actionType="edit"
          sx={{ marginTop: "10px", width: "90%" }}
          variant="outlined"
          onClick={handleSubmit(handleEdit)}
        />
      </BoxUI>
    </ModalUI>
  );
}
