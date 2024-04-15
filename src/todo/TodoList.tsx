import {List, ListItem, ListItemButton, ListItemIcon, ListItemText, Checkbox, IconButton} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ToDoItemProps } from "./index.d";

interface TodoListProps {
    todos: ToDoItemProps[];
    handleDone: Function;
    handleDelete: Function;
}
const TodoList = (props: TodoListProps) => {
    const {todos, handleDone, handleDelete} = props;
    return  <List className="list" dense sx={{marginTop: 3}}>
    {todos.map((item: ToDoItemProps) => {
      const itemId = item.id;

      return (
        <ListItem
          key={itemId}
          disablePadding
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(itemId)}>
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemButton role={undefined} onClick={() => handleDone(itemId)} dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={item.checked}
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": itemId }}
              />
            </ListItemIcon>
            <ListItemText id={itemId} primary={item.checked ? <span className="done">{item.name}</span> : item.name} />
          </ListItemButton>
        </ListItem>
      );
    })}
  </List>
}

export default TodoList;