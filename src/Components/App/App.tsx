import AddToDoForm from "../AddToDoForm";
import AppHeader from "../AppHeader";
import ControlPanel from "../ControlPanel";
import ToDoItemsList from "../ToDoItemsList";
import "./App.css";

function App() {
  return (
    <>
      <AppHeader />
      <div className="content">
        <AddToDoForm />
        <ToDoItemsList />
        <ControlPanel />
      </div>
    </>
  );
}

export default App;
