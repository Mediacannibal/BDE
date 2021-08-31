import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { useHistory } from 'react-router-dom';
import ReactGA from 'react-ga';
import { useAuth } from 'store/authStore';
import McInput from 'components/Common/McInput';
import { projectStore } from 'store/projectStore';

const ApiRecords = (props: any) => {
  const { auth } = useAuth();
  const { projectField, setprojectField, loadProjectbyUserID, loadProjectsDetail } = projectStore()

  const [project_name, setproject_name] = useState('MCBDE');

  useEffect(() => {

    if (!projectField) {
      loadProjectsDetail();
    }

    ReactGA.pageview(window.location.pathname + window.location.search);
    if (auth)
    // history.replace("/Login")
    { }
    else {
      let usertype = JSON.parse(String(localStorage.getItem("UserDetails"))).user_type
      if (usertype !== "SUPERUSER") {
        // history.replace("/")
      }
    }
  }, [])

  const frame = (object: any) => {
    (object) && object.map((ele: any) => {
      let a = ele.title
      if (a === project_name?.value) {
        console.log(">>><<<<>>><<< :", ele.frontend_url, project_name?.value);
        return ele.frontend_url
      }
    })

  }

  return (
    <div className="main">
      <div className="body">
        <div>
          <McInput
            type="picker"
            id="input_projecttextbox"
            name={`PROJECT`}
            value={project_name?.value}
            onChange={(data: any) => {
              setproject_name(data)
            }}
            options={
              (projectField) && projectField.map(
                (obj: any) => {
                  return { "key": obj.id, "value": obj.title }
                })
            }
          />
        </div>

        <div>
          <iframe src={String(frame((projectField) && projectField))} name="targetframe" height="100%" width="100%" title="API-RECORDS"></iframe>
        </div>

      </div>
    </div>
  );
}

export default ApiRecords;
