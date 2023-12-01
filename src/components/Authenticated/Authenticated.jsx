import * as React from "react";
import s from "./Authenticated.module.css";
import { BadgeAlert, Trash2 } from "lucide-react";
import { filterTasks, sortTasks } from "./utils";
import { useAuth } from "../../contexts/authContext";
import Button from "../Button/Button";
import {
  createTask,
  deleteTask,
  editTask,
  getTasks,
} from "../../services/tasks";

function Authenticated() {
  const { isAuthenticated, logout } = useAuth();
  const [status, setStatus] = React.useState("idle");
  const [formStatus, setFormStatus] = React.useState("idle");
  const [tasks, setTasks] = React.useState([]);
  const [edit, setEdit] = React.useState(false);
  React.useEffect(() => {
    console.log(tasks);
    setStatus("loading");
    getTasks()
      .then((tasks) => {
        // setFormStatus("loading");
        setTasks(tasks);
        setStatus("success");
        console.log("executing task");
      })
      .catch((error) => {
        setStatus("error");
        console.log(error);
      });
  }, [isAuthenticated, edit]);

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus("loading");
    const formData = new FormData(event.target);
    const taskData = Object.fromEntries(formData.entries());

    // crear task
    createTask(taskData)
      .then((body) => {
        const nextTasks = [...tasks, body];
        setTasks(nextTasks);
        setFormStatus("success");
      })
      .catch((error) => {
        setFormStatus("error");
        console.log(error);
      });
  }

  async function handleEdit(id, updates) {
    // editar task
  }

  async function handleDelete(id) {
    // eliminar task
  }

  const isLoading = status === "loading";
  const isCreating = formStatus === "loading";

  const filteredTasks = filterTasks(tasks, {});
  const sortedTasks = sortTasks(filteredTasks, "");

  return (
    <>
      <form className={s["task-form"]} onSubmit={handleSubmit}>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="do the dishes"
          required
          aria-label="title"
          disabled={isCreating}
        />
        <input
          id="due_date"
          type="date"
          name="due_date"
          aria-label="due_date"
          disabled={isCreating}
        />
        <button disabled={isCreating}>
          {isCreating ? "Adding..." : "Add task"}
        </button>
      </form>

      <div className={s["tasks-wrapper"]}>
        <aside className={s.aside}>
          <div className={s["input-group"]}>
            <label htmlFor="sort_by">Sort by</label>
            <select id="sort_by">
              <option value="due_date-asc">Due Date (old first)</option>
              <option value="due_date-desc">Due Date (new first)</option>
              <option value="alphabetical-asc">Alphabetical (a-z)</option>
              <option value="alphabetical-desc">Alphabetical (z-a)</option>
            </select>
          </div>
          <div className={s["input-group"]}>
            <label>Filter</label>
            <div className={s.checkbox}>
              <input type="checkbox" id="pending" />
              <label htmlFor="pending">Only pending</label>
            </div>
            <div className={s.checkbox}>
              <input type="checkbox" id="important" />
              <label htmlFor="important">Only important</label>
            </div>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              /* completar */
              logout();
            }}
          >
            Logout
          </Button>
        </aside>
        <div className={s["tasks-list"]}>
          {isLoading && <p>Loading...</p>}
          {tasks.length > 0 &&
            sortedTasks.map((task) => (
              <div key={task.id} className={s["task-wrapper"]}>
                <div className={s["task-data"]}>
                  <input
                    type="checkbox"
                    id={task.id}
                    checked={task.completed}
                    onChange={() => {
                      /* completar */
                      setStatus("loading");
                      editTask(task.id, { completed: !task.completed }).then(
                        (body) => {
                          setEdit(!edit);
                          setStatus("success");
                        }
                      );
                    }}
                  />
                  <div className={s["title-wrapper"]}>
                    <label htmlFor={task.id} className={s["task-title"]}>
                      {task.title}
                    </label>
                    <small className={s["task-due_date"]}>
                      {task["due_date"]}
                    </small>
                  </div>
                </div>
                <div className={s.actions}>
                  <Button
                    size="icon"
                    variant={task.important ? "primary" : "secondary"}
                    onClick={() => {
                      setStatus("loading");
                      editTask(task.id, { important: !task.important }).then(
                        (body) => {
                          setEdit(!edit);
                          setStatus("success");
                        }
                      );
                    }}
                  >
                    <BadgeAlert />
                  </Button>
                  <Button size="icon" variant={"secondary"} style={{background: `var(--red-400)`}}
                    onClick={() => {
                      /* completar */
                      setStatus("loading");
                      deleteTask(task.id).then((body) => {
                        setEdit(!edit)
                        setStatus("success")
                      });
                    }}
                  >
                    <Trash2 />
                  </Button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}

export default Authenticated;
