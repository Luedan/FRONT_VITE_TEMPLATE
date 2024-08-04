import { Delete, Edit, Visibility } from "@mui/icons-material";
import { ValueAutoComplete } from "../components/atoms/forms/types";
import { GridActionsCellItem } from '@mui/x-data-grid';
import { t } from "i18next";
import { TableActions } from "./types";

export function createAutoCompleteOptions<T>(
  data: T[],
  keys: { label: keyof T; value: keyof T },
): ValueAutoComplete[] {
  return data.map((item) => ({
    label: item[keys.label] as string,
    value: item[keys.value] as string | number | boolean | null | undefined,
  }));
}



export const createTableActions = ({
  onDelete,
  onEdit,
  onShow,
}: TableActions) => {
  const arr = [
    ...(onShow ? [{ name: "show", fn: onShow, Icon: Visibility }] : []),
    ...(onEdit ? [{ name: "edit", fn: onEdit , Icon: Edit}] : []),
    ...(onDelete ? [{ name: "delete", fn: onDelete, Icon: Delete }] : []),
  ];

  return arr.map((item) => (
    <GridActionsCellItem
      key={item.name}
      icon={<item.Icon />}
      label={t(`tableActions.${item.name}`)}
      onClick={() => item.fn()}
    />
  ))
};
