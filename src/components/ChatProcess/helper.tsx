import { Task } from "../ganttchart/types/public-types";
import React, { useEffect, useState } from 'react'
import { getMainTask } from "utils/api";
import { useAuth } from "store/authStore";




// export function initTasks() {
//   const currentDate = new Date();

//   //   const { auth } = useAuth();
//   //   const task = ''
//   //   const users = 'all'
//   //   const parent_child = ''
//   //   const project = '1'
//   //   const task_priority = ''
//   //   const task_domain = ''


//   //   let tasks: Task[] = [
//   //     {
//   //       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//   //       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//   //       name: "aaaa",
//   //       id: "ProjectSample",
//   //       progress: 25,
//   //       type: "project",
//   //     },
//   //   ];


//   //   getMainTask(async (data: any, errorresponse: any) => {
//   //     if (data.status === 200) {
//   //       console.log("Task Results: ", data.data.results)
//   //       data.data.results.forEach((obj: any) => {
//   //         tasks.push(
//   //           {
//   //             start: (new Date(currentDate.getFullYear(), currentDate.getMonth(), 2)),
//   //             end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
//   //             name: obj.title,
//   //             id: obj.id,
//   //             progress: obj.progress,
//   //             dependencies: obj.dependencies,
//   //             type: "task",
//   //             project: obj.project_ref,
//   //           }
//   //         )
//   //         // console.log("???for????", tasks);

//   //       });
//   //     }
//   //     else {
//   //       console.log('error ' + JSON.stringify(data));
//   //       console.log('error ' + JSON.stringify(errorresponse));
//   //     }
//   //   }, auth, task, users, parent_child, task_domain, task_priority, project)


//   const tasks: Task[] = [
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "aaaa",
//       id: "ProjectSample",
//       progress: 25,
//       type: "project",
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 1),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2, 12, 28),
//       name: "Idea",
//       id: "0",
//       progress: 45,
//       type: "task",
//       project: "ProjectSample",
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 2),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4, 0, 0),
//       name: "Research",
//       id: "1",
//       progress: 25,
//       dependencies: "0",
//       type: "task",
//       project: "ProjectSample",
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 4),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8, 0, 0),
//       name: "Discussion with team",
//       id: "2",
//       progress: 10,
//       dependencies: "0",
//       type: "task",
//       project: "ProjectSample",
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 9, 0, 0),
//       name: "Developing",
//       id: "3",
//       progress: 2,
//       dependencies: "0",
//       type: "task",
//       project: "ProjectSample",
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 10),
//       name: "Review",
//       id: "4",
//       type: "task",
//       progress: 70,
//       dependencies: "0",
//       project: "ProjectSample",
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 15),
//       name: "Release",
//       id: "5",
//       progress: currentDate.getMonth(),
//       type: "milestone",
//       dependencies: "0",
//       project: "ProjectSample",
//     },
//     {
//       start: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
//       end: new Date(currentDate.getFullYear(), currentDate.getMonth(), 19),
//       name: "Party Time",
//       id: "6",
//       progress: 40,
//       dependencies: "0,1",
//       isDisabled: false,
//       type: "task",
//       project: "ProjectSample",
//     },
//   ];

//   return tasks;

// }

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
