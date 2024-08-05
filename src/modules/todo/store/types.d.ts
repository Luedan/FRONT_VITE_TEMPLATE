export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodoStore {
  todos: Todo[];
  addTodo: (title: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  updateTodo: (title: string) => void;
  openModalEdit: (id: string) => void;
  closeModalEdit: () => void;
  isOpenModalEdit: boolean;
  todoToEdit: Todo | null;
  handleCompleted: (id: string) => void;
}
