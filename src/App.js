import React from "react";
import { makeStyles } from "@material-ui/core";
import SideBar from "./sidebar";
function App() {
  const [selected, onSelect] = React.useState(0);
  const menu = [
    {
      id: 0,
      type: "numbers",
      title: "Номера",
    },
    {
      id: 1,
      type: "documents",
      title: "Документы",
    },
    {
      id: 2,
      type: "meetings",
      title: "Встречи",
    },
    {
      id: 3,
      type: "addUser",
      title: "Добавление\nпользователей",
    },
    {
      id: 4,
      type: "knowledgeBase",
      title: "База знаний",
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <SideBar data={menu} selected={selected} onSelect={onSelect} />
      <main className={classes.content}>
        <p>content</p>
      </main>
    </div>
  );
}

export default App;

const useStyles = makeStyles({
  root: {
    flex: 1,
  },
  content: {
    width: "100vw",
    height: "100vh",
    position: "fixed",
  },
});