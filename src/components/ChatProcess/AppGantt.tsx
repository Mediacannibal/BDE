import React, { useEffect, useRef, useState } from "react";
import { ViewSwitcher } from "./components/view-switcher";
import { getStartEndDateForProject } from "./helper";
// import "gantt-task-react/dist/index.css";
import { Gantt } from "../ganttchart/components/gantt/gantt";
import { ViewMode } from "../ganttchart/types/public-types";
import type { Task } from "../ganttchart/types/public-types";
import { getMainTask, getProject } from "utils/api";
import { useAuth } from "store/authStore";

const AppGantt = ({ project_data }) => {
  const [view, setView] = React.useState<ViewMode>(ViewMode.Day);
  const [tasks, setTasks] = React.useState([]);
  const [isChecked, setIsChecked] = React.useState(false);
  const [listItems, setlistItems] = useState([])

  let columnWidth = 60;
  if (view === ViewMode.Month) {
    columnWidth = 300;
  } else if (view === ViewMode.Week) {
    columnWidth = 250;
  }

  const currentDate = new Date();

  const { auth } = useAuth();
  const task = ''
  const users = ''
  const parent_child = ''
  const project = '1'
  const task_priority = ''
  const task_domain = ''

  const isFirstRender = useRef(true)

  useEffect(() => {
    isFirstRender.current = false
    if (project_data !== undefined) {
      // console.log("Task Results: ", project_data.ProjectTasks)
      setlistItems(project_data.ProjectTasks)
    }
    else {
      getProject(async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          // console.log("Task Results: ", data.data.results)
          setlistItems(data.data.results)
        }
        else {
          console.log('error ' + JSON.stringify(data));
          console.log('error ' + JSON.stringify(errorresponse));
        }
      }, auth, users);
    }
  }, [tasks])

  useEffect(() => {
    if (!isFirstRender.current) {
      if (project_data !== undefined) {
        let task: any = []
        listItems.map((obj: any) => {
          // console.log("Object tasks", obj);
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
        listItems.map((element: any, key: any) => {
          // console.log("P tasks", listItems);
          let task: any = []
          element.ProjectTasks.map((obj: any) => {
            // console.log("Object tasks", obj);
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
        })
      }
    }
  }, [listItems])

  const findchild = (id: any, list: any, id_list: any) => {
    let newidlist = id_list
    let newTasks = list.map(
      (t: any) => {
        const func = async () => {
          let a = t;
          let arr = String(a.dependencies).split(',')
          let found = false
          arr.forEach(ele => {
            if (ele === id) {
              found = true;
            }
          });
          if (found) {
            let tem = a
            newidlist.push(a.id)
            await findchild(a.id, list, newidlist)
            a = tem
          }
          return a;
        }
        return (t.dependencies === null) ? t : func()
      }
    )
    return newidlist
  }

  const recurse = (task: Task) => {
    const [start, end] = getStartEndDateForProject(task, tasks);
    let newTasks: any = tasks.map(t => (t.id === task.id ? task : t));
    let id_list: any = []
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
            id_list.push(a.id)

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
    setTimeout(() => {
      id_list.forEach((element: any) => {
        console.log("id_list: ", id_list);

        let child_tree = findchild(element, newTasks, [])
        child_tree.forEach(ele => {
          newTasks = newTasks.map((t: any) => {
            const fun = () => {
              let tem = t
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
              return tem;
            }
            return (t.id === ele) ? fun() : t;
          })
          setTasks(newTasks);
        });
      });
    }, 200);
    setTasks(newTasks);
  }

  const onTaskChange = (task: Task) => {
    recurse(task);
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