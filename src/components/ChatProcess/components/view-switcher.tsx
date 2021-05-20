import React, { useEffect, useState } from 'react'
// import "gantt-task-react/dist/index.css";
import { ViewMode } from "../../ganttchart/types/public-types";
type ViewSwitcherProps = {
  isChecked: boolean;
  onViewListChange: (isChecked: boolean) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};
export const ViewSwitcher: React.SFC<ViewSwitcherProps> = ({
  onViewModeChange,
  onViewListChange,
  isChecked,
}) => {

  useEffect(() => {


  }, [])

  const [unique_project_ref, setunique_project_ref] = useState([])
  const [all_project_ref, setall_project_ref] = useState("")

  return (
    <>
      <div className="ViewContainer">
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.QuarterDay)}
        >
          Quarter of Day
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.HalfDay)}
        >
          Half of Day
        </button>
        <button className="Button" onClick={() => onViewModeChange(ViewMode.Day)}>
          Day
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.Week)}
        >
          Week
        </button>
        <button
          className="Button"
          onClick={() => onViewModeChange(ViewMode.Month)}
        >
          Month
        </button>

        <div className="Switch">
          <label className="Switch_Toggle">
            <input
              type="checkbox"
              defaultChecked={isChecked}
              onClick={() => onViewListChange(!isChecked)} />
            <span className="Slider" />
          </label>
          Show Task List
        </div>
      </div>

      <div className='main_selector_div'>
        <select
          className="projectname_dropdown"
          id="noformat_dropdown"
          value={all_project_ref}
          onChange={(e) => {
            // console.log(e.target.value)
            setall_project_ref(e.target.value);
          }}>
          <option hidden value="">Project Name</option>
          {unique_project_ref.map((element) => {
            return <option key={element} value={element}>{element}</option>;
          })}
        </select>
      </div>
    </>
  );
};
