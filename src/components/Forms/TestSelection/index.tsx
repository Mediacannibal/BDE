import React, { useEffect, useState } from 'react'
import './style.css'
import { useHistory } from 'react-router-dom';
import '../../../components/app.css'
import { useForm } from 'react-hook-form';
import Popup from 'components/Common/Popup'
import McInput from 'components/Common/McInput';


const TestSelection = ({ setTest }) => {
  const history = useHistory();
  const { register, handleSubmit, errors, reset } = useForm();

  const [domain, setdomain] = useState('')
  const [isselectslot, setisselectslot] = useState('')

  const [domainvalid, setdomainvalid] = useState(false)
  const [projectvalid, setprojectvalid] = useState(false)

  const [preSendValidator, setPreSendValidator] = useState(false)

  const onSubmit = (data: any, e: { target: { reset: () => void; }; }) => {
    e.target.reset(); // reset after form submit
    console.log(data);
  };

  const Validate = () => {

    if (domainvalid === true
      && projectvalid === true
    ) {
    }
    else {
      setPreSendValidator(true)
    }

    // console.log(document.getElementById("firstname_data").valid,
    //   String(document.getElementById("firstname_data").valid))

  }

  return (
    <>
      <Popup
        title={"Begin Testing"}
        desc1={"Please confirm which project u begin to testing."}
        popup_body={
          <form className="inputfield_main_container" onSubmit={handleSubmit(onSubmit)}>

            <div className="inputfield_sub_container">
              <div >
                <McInput
                  type={"picker"}
                  name={"DOMAIN"}
                  id="usertype_data"
                  required={true}
                  valid={setdomainvalid}
                  sendcheck={preSendValidator}
                  value={domain}
                  onchange={setdomain}
                  options={[
                    { "key": "0", "value": "FRONT END" },
                    { "key": "1", "value": "BACK END" },
                    { "key": "1", "value": "UI" }]}
                />
              </div>
            </div>

            <div className="inputfield_sub_container">
              <div >
                <McInput
                  type={"picker"}
                  name={"PROJECT"}
                  id="usertype_data"
                  required={true}
                  valid={setdomainvalid}
                  sendcheck={preSendValidator}
                  value={isselectslot}
                  onchange={setisselectslot}
                  options={[
                    { "key": "0", "value": "DAY" }]}
                />
              </div>
            </div>

          </form>
        }
        confirmClick={() => {
          Validate()
          history.replace('/TestSelectionForm')
        }}
        cancelClick={setTest}
      />
    </>
  )
}

export default TestSelection
