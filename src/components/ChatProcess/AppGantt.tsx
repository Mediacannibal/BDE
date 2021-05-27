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
        // console.log("Task Results: ", data.data.results)
        let task: any = []
        data.data.results.forEach((obj: any) => {
          task.push(
            {
              start: new Date(obj.created_at),
              end: new Date(obj.updated_at),
              name: obj.title,
              id: String(obj.id),
              progress: obj.progress,
              dependencies: obj.dependencies,
              type: "task",
              project: obj.project_ref,
            }
          )
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
    console.log("On date change Id:" + task.id, task.start, task.end);

  };

  const onProgressChange = async (task: Task) => {

    console.log("On progress change Id:" + task.id, task.progress);

    // let temp = []
    // exarr.forEach(element => {
    //   if(element.id === id)
    //   {
    //     let temp1 = element 
    //     temp1.something ="newvalue"
    //     temp.push(temp1)
    //   }
    //   else
    //   {temp.push(element)}
    // });
    // setexarr(temp)

  };


  return (
    <div>
      <ViewSwitcher
        onViewModeChange={viewMode => setView(viewMode)}
        onViewListChange={setIsChecked}
        isChecked={isChecked}
      />
      <Gantt
        tasks={tasks}
        viewMode={view}
        onDateChange={onTaskChange}
        // onProgressChange={onProgressChange}
        listCellWidth={isChecked ? "155px" : ""}
        columnWidth={columnWidth}
      />
    </div>
  );
};

export default AppGantt;