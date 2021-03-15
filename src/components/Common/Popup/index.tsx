import React, { useEffect } from 'react'
import { useState } from 'react';
import './style.css'

const Popup = ({ title, mic, videoscreen, desc1, desc2, listitems, confirmClick1, cancelClick2, bracketentry_values }) => {

  const [backendresponse_popup, setbackendresponse_popup] = useState(false);
  const [backendresponse, setbackendresponse] = useState('');
  const [popup_Title_Text, setpopup_Title_Text] = useState(true);
  const [popup_description_Text, setpopup_description_Text] = useState(true);
  const [internal_table, setinternal_table] = useState(true);
  const [popup, setpopup] = useState(true)
  const [result_container, setresult_container] = useState([])
  const [popup_buttons, setpopup_buttons] = useState(true)
  const [popup_videoscreen, setpopup_videoscreen] = useState(true)


  const [list, setlist] = useState(listitems)
  const [activetab, setactivetab] = useState(true)
  const renderHeader = () => {
    let headerElement = ['Name', 'Date', 'Slot', 'Combi', 'Number', 'Amount']

    return headerElement.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  }

  const calculateres = (data: any, position: any) => {
    let temp = String(data).split("")
    let a = Number(temp[0]) + Number(temp[1]) + Number(temp[2])
    if (position !== undefined) {
      let p = position.split("")
      let xa = ""
      if (p[0] === "L")
        xa = String(a).padStart(2, "0").substr(0, 1)
      else
        xa = String(a).padStart(2, "0").slice(-1)

      return (String(data) === "XXX") ? "X" : xa

    } else {
      let xa = (String(a).length === 2) ? String(a).slice(-1) : String(a)
      return (String(data) === "XXX") ? "X" : xa
    }
  }
  useEffect(() => {
    console.log(bracketentry_values);
    if (bracketentry_values !== undefined) {
      let a = String(bracketentry_values.Daynumber).split(",")
      console.log(a);
      let b = String(bracketentry_values.Nightnumber).split(",")
      console.log(a);
      setresult_container([...a, ...b])
      console.log([...a, ...b]);
    }

  },
    []
  )

  const renderBody = (element: any) => {
    console.log(element, "===")
    return (
      <>
        <tr key={element.Name}>
          <td>{element.Name}</td>
          <td>{element.BookedDate}</td>
          <td>{element.DayNight}</td>
          <td>{element.BracketCombination}</td>
          <td>{element.Number}</td>
          <td>{element.Amount}</td>
        </tr>
      </>
    )
  }

  return (

    <div>
      {popup ?
        <div className="popup_bg">
          <div className="popup_container">
            <div className="popup">

              {backendresponse_popup ?
                <>
                  <div className='title'>{backendresponse}</div>
                  {/* <div className='popup_description'>
                  <div className='popup_Text'>The following Bracket Entry will be updated!</div>
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
                    < div className='popup_Title'>
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
                      <div className='popup_Text'>
                        {desc1}
                      </div>
                      <div className='popup_Text'>
                        {desc2}
                      </div>
                    </div>
                    :
                    null
                  }
                  {listitems.length !== 0 ?
                    <>
                      {internal_table ?
                        <div className="internal_table">
                          <table id='internal_table'>
                            <thead>
                              <tr>{renderHeader()}</tr>
                            </thead>
                            <tbody>
                              {
                                list.map(renderBody)
                              }
                            </tbody>
                          </table>
                        </div>
                        :
                        null
                      }
                    </>
                    :
                    null
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
                      className='popup_submit_button'>Join</div>
                    <div
                      onClick={cancelClick2}
                      className='popup_cancel_button'>Cancel</div>
                  </div>
                </>
              }
            </div>
          </div>
        </div >
        :
        null
      }
    </div>
  )
}

export default Popup


