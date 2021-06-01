import React, { useEffect, useState } from "react";
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
  const [isChecked, setIsChecked] = React.useState(false);
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
              start: new Date(obj.start_date),
              end: new Date(obj.end_date),
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

    console.log("On date change Id:" + task.id, task.barChildren, task.dependencies, '<><><><><><>', task.start, task.end);

    let newTasks: any = tasks.map(t => (t.id === task.id ? task : t));

    console.log("vvvvv", tasks, task.id)

    newTasks = newTasks.map(
      (t: any) => {
        const func = () => {
          let a = t;
          let arr = String(a.dependencies).split(',')
          let found = false
          arr.forEach(ele => {
            if (ele === task.id) {
              found = true;
            }
          });
          if (found) {
            let tem = a
            const [start, end] = getStartEndDateForProject(task, tasks);

            // console.log("OOOOOO", start, end, task, tasks);

            const getoldobj = (list: any, id: any) => {
              let obj = {}
              list.forEach((element: any) => {
                if (element.id === id)
                  obj = element
              });
              return obj
            }
            let oldobj = getoldobj(tasks, task.id)

            if (task.start > oldobj.start && task.end > oldobj.end) {
              tem.start.setSeconds(tem.start.getSeconds() + start)
              tem.end.setSeconds(tem.end.getSeconds() + end)
            }
            else if (task.start < oldobj.start && task.end < oldobj.end) {
              tem.start.setSeconds(tem.start.getSeconds() - start)
              tem.end.setSeconds(tem.end.getSeconds() - end)
            }
            else if (task.start > oldobj.start && task.end === oldobj.end) {
              tem.start.setSeconds(tem.start.getSeconds() + 0)
              tem.end.setSeconds(tem.end.getSeconds() + 0)
            }
            else if (task.start === oldobj.start && task.end > oldobj.end) {
              tem.start.setSeconds(tem.start.getSeconds() + end)
              tem.end.setSeconds(tem.end.getSeconds() + end)
            }
            else if (task.start < oldobj.start && task.end === oldobj.end) {
              tem.start.setSeconds(tem.start.getSeconds() + 0)
              tem.end.setSeconds(tem.end.getSeconds() + 0)
            }
            else if (task.start === oldobj.start && task.end < oldobj.end) {
              tem.start.setSeconds(tem.start.getSeconds() - end)
              tem.end.setSeconds(tem.end.getSeconds() - end)
            }
            a = tem
          }
          return a;
        }
        return (t.dependencies === null) ? t : func()
      }
    )
    // console.log("=======", newTasks);
    setTasks(newTasks);
  };

  const onProgressChange = async (task: Task) => {
    // console.log("On progress change Id:" + task.id, task.progress);
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