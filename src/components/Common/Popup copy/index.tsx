import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.css'

const Popup = ({ title, mic, videoscreen, desc1, desc2, listitems1, listitems2, confirmClick1, cancelClick2, bracketentry_values }) => {

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');
  const [popup_Title_Text, setpopup_Title_Text] = useState(true);
  const [popup_description_Text, setpopup_description_Text] = useState(true);
  const [internal_table, setinternal_table] = useState(true);
  const [ispopup, setispopup] = useState(true)
  const [result_container, setresult_container] = useState([])
  const [popup_buttons, setpopup_buttons] = useState(true)
  const [popup_videoscreen, setpopup_videoscreen] = useState(true)
  const [is_tableheader1, setis_tableheader1] = useState(false);
  const [is_tableheader2, setis_tableheader2] = useState(false);
  const [is_tableheader3, setis_tableheader3] = useState(false);


  const [list1, setlist1] = useState(listitems1)
  const [list2, setlist2] = useState(listitems2)

  const [activetab, setactivetab] = useState(true)

  useEffect(() => {

  }, [])

  const renderHeader1 = () => {
    let headerElement = ['Project Name', 'Title', 'Description', 'Assignee', 'Updated By']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody1 = (element: any) => {
    console.log(element, "===")
    return (
      <>
        <tr key={element.projectname}>
          <td>{element.project_name}</td>
          <td>{element.title}</td>
          <td>{element.description}</td>
          <td>{element.assignee}</td>
          <td>{element.updated_by}</td>
        </tr>
      </>
    )
  }

  const renderHeader2 = () => {
    let headerElement = ['bug title', 'orientation', 'device', 'remarks', 'image']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const renderBody2 = (element: any) => {
    console.log(element, "===")
    return (
      <>
        <tr key={element.bug_title}>
          <td>{element.bug_title}</td>
          <td>{element.orientation}</td>
          <td>{element.device}</td>
          <td>{element.remarks}</td>
          <td>{element.image_link}</td>
        </tr>
      </>
    )
  }


  return (

    <div>
      {ispopup ?
        <div className="popup_bg">
          <div className="popup_container">
            <div className="popup">

              {backendresponse_popup ?
                <>
                  <div className='title'>{backendresponse}</div>
                  {/* <div className='popup_description'>
                  <div className='popup_text'>The following Bracket Entry will be updated!</div>
                  </div> */}
                  <div className='popup_button_container'>
                    <div
                      onClick={() => {
                        console.log("***CANCEL***")
                        setbackendresponse_popup(false)
                      }}
                      className='popup_cancel_button'>OK</div>
                  </div>
                </>
                :
                <>
                  {popup_Title_Text ?
                    < div className='popup_title'>
                      {title}
                    </div>
                    :
                    null
                  }


                  {popup_videoscreen ?
                    <div>
                      {videoscreen}
                    </div>
                    :
                    null
                  }

                  {popup_buttons ?
                    <div>
                      {mic}
                    </div>
                    :
                    null
                  }

                  {popup_description_Text ?
                    <div className='popup_description'>
                      <div className='popup_text'>
                        {desc1}
                      </div>
                      <div className='popup_text'>
                        {desc2}
                      </div>
                    </div>
                    :
                    null
                  }
                  {listitems1 !== 0 ?
                    <>
                      {internal_table ?
                        <>
                          {is_tableheader1 ?
                            <div className="internal_table">
                              <table id='internal_table'>
                                <thead>
                                  <tr>{renderHeader1()}</tr>
                                </thead>
                                <tbody>
                                  {
                                    list1.map(renderBody1)
                                  }
                                </tbody>
                              </table>
                            </div>
                            : null
                          }
                        </>
                        :
                        null
                      }
                    </>
                    : null
                  }

                  {listitems2 !== 0 ?
                    <>
                      {internal_table ?
                        <>
                          {is_tableheader2 ?
                            <div className="internal_table">
                              <table id='internal_table'>
                                <thead>
                                  <tr>{renderHeader2()}</tr>
                                </thead>
                                <tbody>
                                  {
                                    list2.map(renderBody2)
                                  }
                                </tbody>
                              </table>
                            </div>
                            : null
                          }
                        </>
                        :
                        null
                      }
                    </>
                    : null
                  }

                  {title === "Bracket Entry" ?

                    <div className="results_container_main_div">

                      <div className="results_container_popup">
                        <div className="result_tab_container">

                          <div className="result_tab_popup">

                            <div className="tab_day_night_popup">
                              <div className="tab_active" >DAY</div>
                            </div>

                            <div className='result_number_popup'>{result_container[0] + result_container[1] + result_container[2] + "-" + calculateres(result_container[0] + result_container[1] + result_container[2], bracketentry_values.Day_Position) + calculateres(result_container[3] + result_container[4] + result_container[5], bracketentry_values.Day_Position) + "-" + result_container[3] + result_container[4] + result_container[5]}</div>
                            <div className='timings_container'>
                              <div className='timings'>02:00PM</div>
                              <div className='timings'>04:00PM</div>
                            </div>
                          </div>

                        </div>
                      </div>


                      <div className="results_container_popup">

                        <div className="result_tab_container">

                          <div className="result_tab_popup">
                            <div className="tab_day_night_popup">
                              <div className="tab_active">NIGHT</div>
                            </div>
                            <div className='result_number_popup'>{result_container[6] + result_container[7] + result_container[8] + "-" + calculateres(result_container[6] + result_container[7] + result_container[8], bracketentry_values.Night_Position) + calculateres(result_container[9] + result_container[10] + result_container[11], bracketentry_values.Night_Position) + "-" + result_container[9] + result_container[10] + result_container[11]}</div>
                            <div className='timings_container'>
                              <div className='timings'>08:00PM</div>
                              <div className='timings'>10:00PM</div>
                            </div>
                          </div>
                        </div>

                      </div>


                    </div>
                    :
                    null
                  }
                  <div className='popup_button_container'>
                    <div
                      onClick={confirmClick1}
                      className='popup_submit_button'>Comfirm</div>
                    <div
                      onClick={cancelClick2}
                      className='popup_cancel_button'>Cancel</div>
                  </div>
                </>

              }

            </div>
          </div >
        </div>
        : null
      }
    </div>
  )
}

export default Popup


