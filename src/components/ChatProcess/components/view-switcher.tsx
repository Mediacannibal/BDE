import React, { useEffect, useState } from 'react'
import { useAuth } from 'store/authStore'
import { getMainTask } from 'utils/api'
// import "gantt-task-react/dist/index.css";
import { ViewMode } from '../../ganttchart/types/public-types'
type ViewSwitcherProps = {
  isChecked: boolean
  onViewListChange: (isChecked: boolean) => void
  onViewModeChange: (viewMode: ViewMode) => void
  project_data: any
}
export const ViewSwitcher: React.SFC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
  project_data,
}) => {
  const { auth } = useAuth()

  useEffect(() => {
    if (project_data === undefined) {
    mainTask()
    }
  }, [])

  const mainTask = () => {
    // console.log("SELETED TASKTYPE: ", task);
    getMainTask(
      async (data: any, errorresponse: any) => {
        if (data.status === 200) {
          // console.log('Task Results in GC: ', data.data.results)
          // setunique_project_ref(data.data.results)
        } else {
          console.log('error ' + JSON.stringify(data))
          console.log('error ' + JSON.stringify(errorresponse))
        }
      },
      auth,
    )
  }

  return (
    <>
      <div className='ViewContainer'>
        <button
          className='Button'
          onClick={() => onViewModeChange(ViewMode.QuarterDay)}
        >
          Quarter of Day
        </button>
        <button
          className='Button'
          onClick={() => onViewModeChange(ViewMode.HalfDay)}
        >
          Half of Day
        </button>
        <button
          className='Button'
          onClick={() => onViewModeChange(ViewMode.Day)}
        >
          Day
        </button>
        <button
          className='Button'
          onClick={() => onViewModeChange(ViewMode.Week)}
        >
          Week
        </button>
        <button
          className='Button'
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Month
        </button>

        <div className='Switch'>
          <label className='Switch_Toggle'>
            <input
              type='checkbox'
              defaultChecked={isChecked}
              onClick={() => onViewListChange(!isChecked)}
            />
            <span className='Slider' />
          </label>
          Show Task List
        </div>
      </div>

      {/* <div className='main_selector_div'>
        <select
          className='projectname_dropdown'
          id='noformat_dropdown'
          value={all_project_ref}
          onChange={e => {
            // console.log(e.target.value)
            setall_project_ref(e.target.value)
          }}
        >
          <option hidden value=''>
            Project Name
          </option>
          {unique_project_ref.map(element => {
            return (
              <option key={element} value={element}>
                {element}
              </option>
            )
          })}
        </select>
      </div> */}
    </>
  )
}
