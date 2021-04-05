import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'


const TestSelection = ({ setTest }) => {
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm();

  const [isslotemptyerror, setslotemptyerror] = useState(false)
  const [isselectslot, setisselectslot] = useState('value')

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  return (
    <>
      <Popup
        title={"Begin Testing"}
        desc1={"Please confirm which project u begin to testing."}
        popup_body={
          <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>

            <div className="inputfield_sub_container">
              <div className="Booking_slot_dropdown">
                <select id="task_type" className={isslotemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                  required={isslotemptyerror}
                  value={isselectslot}
                  onChange={(e) => {
                    setslotemptyerror(false)
                    setisselectslot(e.target.value)
                  }}
                >
                  <option hidden value="">DOMAIN</option>
                    <option value="frontend">FRONT END</option>
                    <option value="backend">BACK END</option>
                    <option value="ui">UI</option>
                </select>
              </div>
              {isslotemptyerror ? <div className="invalid_entry">Please select a Project</div> : null}
            </div>

            <div className="inputfield_sub_container">
              <div className="Booking_slot_dropdown">
                <select id="task_type" className={isslotemptyerror ? "dropdown_box invalid_entry_container" : "dropdown_box"}
                  required={isslotemptyerror}
                  value={isselectslot}
                  onChange={(e) => {
                    setslotemptyerror(false)
                    setisselectslot(e.target.value)
                  }}
                >
                  <option hidden value="">PROJECT</option>
                  <option value="DAY"></option>
                </select>
              </div>
              {isslotemptyerror ? <div className="invalid_entry">Please select a Project</div> : null}
            </div>

          </form>
        }
        confirmClick={() => {
          history.replace('/TestSelectionForm')
        }}
        cancelClick={setTest}
      />
    </>
  )
}

export default TestSelection
