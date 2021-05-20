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

//   // const tasks1 = listItems1.map((obj: any) => {
//   //   console.log(">>>>>>>>objext:", obj);
//   //   return (
//   //     {
//   //       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
//   //       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
//   //       name: obj.title,
//   //       id: obj.id,
//   //       // progress: 25,
//   //       dependencies: obj.dependencies,
//   //       type: "task",
//   //       project: obj.project_ref,
//   //     }
//   //   )
//   // })

//   const tasks: Task[] = []
//   listItems1.map((obj: any) => {
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
//   return tasks;
// }

export function initTasks() {
  const currentDate = new Date();
  const tasks: Task[] = [
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Some Project",
      id: "ProjectSample",
      progress: 25,
      type: "project",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
      end: new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        2,
        12,
        28
      ),
      name: "Idea",
      id: "Task 0",
      progress: 45,
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
      name: "Research",
      id: "Task 1",
      progress: 25,
      dependencies: "Task 0",
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
      name: "Discussion with team",
      id: "Task 2",
      progress: 10,
      dependencies: "Task 1",
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
      name: "Developing",
      id: "Task 3",
      progress: 2,
      dependencies: "Task 1",
      type: "task",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
      name: "Review",
      id: "Task 4",
      type: "task",
      progress: 70,
      dependencies: "Task 1",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
      name: "Release",
      id: "Task 5",
      progress: currentDate.getMonth(),
      type: "milestone",
      dependencies: "Task 1",
      project: "ProjectSample",
    },
    {
      start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
      end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
      name: "Party Time",
      id: "Task 6",
      progress: 40,
      dependencies: "Task 1",
      isDisabled: false,
      type: "task",
      project: "ProjectSample",
    },
  ];
  return tasks;
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
