import { Task } from "../ganttchart/types/public-types";
import React, { useEffect, useState } from 'react'
import { getMainTask } from "utils/api";
import { useAuth } from "store/authStore";

// export function initTasks() {
//   const { auth } = useAuth();
//   const currentDate = new Date();
//   const [listItems1, setlistItems1] = useState([])

//   const [task, settask] = useState('')
//   const [users, setusers] = useState('all')
//   const [parent_child, setparent_child] = useState('')
//   const [project, setproject] = useState('1')
//   const [task_priority, settask_priority] = useState('')
//   const [task_domain, settask_domain] = useState('')

//   useEffect(() => {
//     mainTask()
//   }, [])

//   const mainTask = () => {
//     // console.log("SELETED TASKTYPE: ", task);
//     getMainTask(async (data: any, errorresponse: any) => {
//       if (data.status === 200) {
//         console.log("Task Results: ", data.data.results)
//         setlistItems1(data.data.results)
//       }
//       else {
//         console.log('error ' + JSON.stringify(data));
//         console.log('error ' + JSON.stringify(errorresponse));
//       }
//     }, auth, task, users, parent_child, task_domain, task_priority, project)
//   }

//   const tasks1 = listItems1.map((obj: any) => {
//     console.log(">>>>>>>>objext:", obj);
//     return (
//       {
//         start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
//         end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
//         name: obj.title,
//         id: obj.id,
//         progress: 25,
//         dependencies: obj.dependencies,
//         type: "task",
//         project: obj.project_ref,
//       }
//     )
//   })

//   console.log("<><>??????/",tasks1);

//   const tasks: Task[] = tasks1

//   return tasks;

// }







export function initTasks() {
  const currentDate = new Date();

  const { auth } = useAuth();
  const task = ''
  const users = 'all'
  const parent_child = ''
  const project = '1'
  const task_priority = ''
  const task_domain = ''



  let tasks: Task[] = [];
  getMainTask(async (data: any, errorresponse: any) => {
    if (data.status === 200) {
      console.log("Task Results: ", data.data.results)
      data.data.results.forEach((obj: any) => {
        tasks.push(
          {
            start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
            end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
            name: obj.title,
            id: "1",
            progress: "25",
            dependencies: "1",
            type: "task",
            project: "hah",
          }
        )
        // console.log("???for????", tasks);

      });
    }
    else {
      console.log('error ' + JSON.stringify(data));
      console.log('error ' + JSON.stringify(errorresponse));
    }
  }, auth, task, users, parent_child, task_domain, task_priority, project)


  console.log("outside", tasks);

  setTimeout(() => {
    console.log("settimeout", tasks);
    return tasks;
  }, 1000);

}

export function getStartEndDateForProject(tasks: Task[], projectId: string) {
  const projectTasks = tasks.filter(t => t.project === projectId);
  let start = projectTasks[0].start;
  let end = projectTasks[0].end;

  for (let i = 0; i < projectTasks.length; i++) {
    const task = projectTasks[i];
    if (start.getTime() > task.start.getTime()) {
      start = task.start;
    }
    if (end.getTime() < task.end.getTime()) {
      end = task.end;
    }
  }
  return [start, end];
}
