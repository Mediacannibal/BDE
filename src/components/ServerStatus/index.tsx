import React, { useEffect, useState } from 'react'
import './style.css'
import '../../components/app.css'
import { ProgressBar } from 'components/Common/Spinner';
import Card from 'components/Common/Card';
import Footer from '../Common/Footer';
import ReactGA from 'react-ga';
import { ColourObject } from 'store/ColourStore';
import McInput from 'components/Common/McInput';
import { taskStore } from 'store/taskStore';

const ServerStatus = (props: any) => {
  // STORE
  const { Colour, colourObj, setcolourObj, setColour, loadColour } = ColourObject()
  const { taskField, settaskField, loadTaskDetail, loadTaskDetail_byvalues, loadTaskDetail_withcallback } = taskStore()
  const [project_ref, setproject_ref] = useState('')
  const [project_list, setproject_list] = useState([])
  // *******
  const [spinner, setspinner] = useState(false)

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);

    // props.setheader_options(screen_header_elements)

    if (!Colour) {
      loadColour();
    }

    if (!taskField) {
      loadTaskDetail()
    }

    if (!taskField) {
      loadTaskDetail_withcallback((list: any) => {
        setproject_list(list.map(
          (element: any) =>
            ({ "key": element.id, "value": element.project_ref })
        ).reduce(
          (unique: any, item: any) => {
            // console.log(unique);
            const getifunique = (list: any, obj: any) => {
              let found = false
              list.map((obj1: any) => {
                if (obj1.value === obj.value)
                  found = true;
              })
              return found
            }
            let check = getifunique(unique, item)
            return check ? unique : [...unique, item]
          },
          [],
        ))
      });
    }

  }, [])




  return (
    <div className="main">
      <div className="body">
        {spinner ?
          <div className="spinner_fullscreen_div">
            <ProgressBar />
          </div> :
          <>
            <div className='inputfield_sub_container'>
              <McInput
                type={'picker'}
                name={'Project'}
                id='task_project_data'
                value={project_ref?.value}
                onChange={(data: any) => {
                  setproject_ref(data)
                }}
                options={project_list}
              />
            </div>

            <Card
              card_title="Back-End Server Status"
              card_body={
                <>
                  <div className="state-wrap">
                    <div className="server-title">GUNICORN:</div>
                    <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div>

                    {/* <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div> */}
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">DAPHNE:</div>
                    {/* <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div> */}

                    <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div>
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">NGINX:</div>
                    <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div>

                    {/* <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div> */}
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">REDIS-SERVER:</div>
                    <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div>

                    {/* <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div> */}
                  </div>
                </>

              }
            />

            <Card
              card_title="Front-End Server Status"
              card_body={
                <>
                  <div className="state-wrap">
                    <div className="server-title">WEB-UI:</div>
                    {/* <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div> */}

                    <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div>
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">Mobile-UI:</div>
                    <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div>

                    {/* <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div> */}
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">Web Notification:</div>
                    <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div>

                    {/* <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div> */}
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">Android Notification:</div>
                    {/* <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div> */}

                    <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div>
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">IOS Notification:</div>
                    <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div>

                    {/* <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div> */}
                  </div>

                  <div className="state-wrap">
                    <div className="server-title">CHAT:</div>
                    {/* <div className="status-state active">
                      <div className="state-text">Active</div>
                    </div> */}

                    <div className="status-state inactive">
                      <div className="state-text">Inactive</div>
                    </div>
                  </div>

                </>

              }
            />
          </>
        }
      </div>
      <Footer />
    </div >
  );
}

export default ServerStatus;



