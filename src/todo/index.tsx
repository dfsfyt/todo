import React, { useEffect, useState } from "react";
import { Button, Alert, Dialog, DialogActions, DialogContent, DialogContentText } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import { ToDoItemProps } from "./index.d";
import "./index.css";

const Index = () => {
  const [listData, setListData] = useState<ToDoItemProps[]>([
    {
      id: "001",
      name: "初始数据1",
      checked: false,
    },
    {
      id: "002",
      name: "初始数据2",
      checked: true,
    },
    {
      id: "003",
      name: "初始数据3",
      checked: false,
    },
  ]);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [allDone, setAllDone] = useState<boolean>(false);
  const [showAll, setShowAll] = useState<boolean>(true);
  const [deleteId, setDeleteId] = useState<string | null>();
  const [open, setOpen] = useState<boolean>(false);

  const notDoneCount = listData.filter((item) => !item.checked).length;
  const handleAddTodo = (value: string) => {
    const id = Date.now().toString();
    const data = [
      {
        id,
        name: value,
        checked: false,
      },
      ...listData,
    ];
    setAllDone(false);
    setListData(data);
  };
  useEffect(() => {
    if (allDone) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [allDone]);
  return (
    <div className="wrap">
      {allDone && showAlert ? (
        <Alert
          sx={{ marginBottom: "10px" }}
          icon={<CheckIcon fontSize="inherit" />}
          severity="info"
        >
          All Active Completed !
        </Alert>
      ) : null}

      <TodoInput onEnter={(value: string) => handleAddTodo(value)} />
      <TodoList
        todos={!showAll ? listData.filter((item) => !item.checked) : listData}
        handleDone={(id: string) => {
          const newListData = listData.map((item) => {
            if (item.id === id) {
              item.checked = true;
            }
            return item;
          });
          const doneCount = newListData.filter((item) => item.checked).length;

          const isAll = doneCount === newListData.length;
          if (isAll) {
            setShowAlert(true);
          }
          setAllDone(isAll);

          setListData(newListData);
        }}
        handleDelete={(id: string) => {
          setDeleteId(id);
          setOpen(true);
        }}
      />
      <div className="info">
        <div>{notDoneCount.toString()} items left</div>

        <Button
          onClick={() => {
            setShowAll(!showAll);
          }}
        >
          {showAll ? "Clear Completed" : "Show All"}
        </Button>
      </div>


      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete it ?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancle</Button>
          <Button onClick={() => {
            const newListData = listData.filter((item) => item.id !== deleteId);
            setListData(newListData);
            setDeleteId(null);
            setOpen(false)
          }} autoFocus>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Index;
