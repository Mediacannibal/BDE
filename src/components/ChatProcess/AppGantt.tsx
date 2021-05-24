import React, { useEffect } from "react";
import { ViewSwitcher } from "./components/view-switcher";
import { getStartEndDateForProject } from "./helper";
// import "gantt-task-react/dist/index.css";
import { Gantt } from "../ganttchart/components/gantt/gantt";
import { ViewMode } from "../ganttchart/types/public-types";
import type { Task } from "../ganttchart/types/public-types";
import { getMainTask } from "utils/api";
import { useAuth } from "store/authStore";

//Init
const AppGantt = () => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(true);
  let columnWidth = 60;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const currentDate = new Date();

  const { auth } = useAuth();
  const task = ''
  const users = 'all'
  const parent_child = ''
  const project = '1'
  const task_priority = ''
  const task_domain = ''

  useEffect(() => {

    getMainTask(async (data: any, errorresponse: any) => {
      if (data.status === 200) {
        console.log("Task Results: ", data.data.results)
        let task: any = []
        data.data.results.forEach((obj: any) => {
          task.push(
            {
              start: new Date(obj.created_at),
              end: new Date(obj.updated_at),
              name: obj.title,
              id: obj.id,
              progress: obj.progress,
              dependencies: obj.dependencies,
              type: "task",
              project: obj.project_ref,
            }
          )
          console.log("???for????", JSON.stringify(new Date(currentDate.getFullYear(), currentDate.getMonth(), 2)));
        });
        setTasks(task)

      }
      else {
        console.log('error ' + JSON.stringify(data));
        console.log('error ' + JSON.stringify(errorresponse));
      }
    }, auth, task, users, parent_child, task_domain, task_priority, project)

  }, []);

  const onTaskChange = (task: Task) => {
    console.log("On date change Id:" + task.id);
    let newTasks = tasks.map(t => (task.id === task.id ? task : t));
    if (task.project) {
      const [start, end] = getStartEndDateForProject(newTasks, task.project);
      const project = newTasks[newTasks.findIndex(t => t.id === task.project)];
      if (
        project.start.getTime() !== start.getTime() ||
        project.end.getTime() !== end.getTime()
      ) {
        const changedProject = { ...project, start, end };
        newTasks = newTasks.map(t =>
          t.id === task.project ? changedProject : t
        );
      }
    }
    // setTasks(newTasks);
  };

  // const onTaskDelete = (task: Task) => {
  //   const conf = window.confirm("Are you sure about " + task.name + " ?");
  //   if (conf) {
  //     setTasks(tasks.filter(t => t.id !== task.id));
  //   }
  //   return conf;
  // };

  // const onProgressChange = async (task: Task) => {
  //   setTasks(tasks.map(t => (t.id === task.id ? task : t)));
  //   console.log("On progress change Id:" + task.id);
  // };

  const onDblClick = (task: Task) => {
    alert("On Double Click event Id:" + task.id);
  };

  const onSelect = (task: Task, isSelected: boolean) => {
    console.log(task.name + " has " + (isSelected ? "selected" : "unselected"));
  };

  return (
    <div>
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      <h3>Gantt With Unlimited Height</h3>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={onTaskChange}
        // onDelete={onTaskDelete}
        // onProgressChange={onProgressChange}
        onDoubleClick={onDblClick}
        onSelect={onSelect}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      />
      {/* <h3>Gantt With Limited Height</h3>
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={onTaskChange}
        onDelete={onTaskDelete}
        onProgressChange={onProgressChange}
        onDoubleClick={onDblClick}
        onSelect={onSelect}
        listCellWidth={isChecked ? "155px" : ""}
        ganttHeight={300}
        columnWidth={columnWidth}
      /> */}
    </div>
  );
};

export default AppGantt;
1