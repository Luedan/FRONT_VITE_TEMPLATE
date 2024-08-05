import { BoxUI } from "@/modules/shared/components/atoms/box/box";
import { TableProUI } from "@/modules/shared/components/molecules/tablePro/tablePro";
import { GridColDef } from "@mui/x-data-grid";
import { useTodoStore } from "../store/todoStore";
import { Todo } from "../store/types";
import AddTodoView from "./addTodoView";
import { createTableActions } from "@/modules/shared/utils";
import EditTodoView from "./editTodoView";
import { SwitchUI } from "@/modules/shared/components/atoms/forms";
import { CustomToolbarUI } from "@/modules/shared/components/molecules/customToolbar/customToolbar";
import { translate } from "@/modules/shared/lib/utils";

export function TodoView() {
  const { todos, removeTodo, openModalEdit, handleCompleted } = useTodoStore();

  const cols: GridColDef<Todo>[] = [
    {
      field: "id",
      headerName: translate("todo.list.id"),
      align: "center",
      headerAlign: "center",
      flex: 1,
    },
    {
      field: "title",
      headerName: translate("todo.list.title"),
      flex: 1,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "completed",
      headerName: translate("todo.list.completed"),
      flex: 1,
      align: "center",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <SwitchUI
            checked={row.completed}
            onClick={() => handleCompleted(row.id)}
          />
        );
      },
    },
    {
      field: "actions",
      headerName: translate("todo.list.actions"),
      flex: 1,
      type: "actions",
      getActions: ({ row }: { row: Todo }) =>
        createTableActions({
          onDelete: () => removeTodo(row.id),
          onEdit: () => openModalEdit(row.id),
        }),
    },
  ];
  return (
    <BoxUI
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <EditTodoView />
      <BoxUI
        sx={{
          marginBottom: "10px",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          width: "100%",
        }}
      >
        <AddTodoView />
      </BoxUI>
      <TableProUI
        tableProps={{
          columns: cols,
          rows: todos,
          rowSelection: false,
          slots: { toolbar: CustomToolbarUI },
        }}
        boxProps={{ sx: { height: "400px", width: "100%" } }}
      />
    </BoxUI>
  );
}
