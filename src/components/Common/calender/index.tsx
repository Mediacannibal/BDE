import React, { useState } from 'react';
import moment from 'moment';
import './style.css';

const CalendarInput = ({ selected1, data }) => {
  const [month, setmonth] = useState(moment())
  const [selected, setselected] = useState(moment(selected1).startOf('day'))

  const next = () => {
    let day = {
      date: month.clone().add(1, 'month')
    };
    setmonth(day.date.clone());
  }

  const previous = () => {
    let day = {
      date: month.clone().subtract(1, 'months')
    };
    setmonth(day.date.clone());
  }

  const select = (day: any) => {
    setselected(day.date)
    setmonth(day.date.clone())

  }

  const renderWeeks = () => {
    let weeks = [];
    let done = false;
    let date = month.clone().startOf("month").add("w" - 1).day("Sunday");
    let count = 0;
    let monthIndex = date.month();

    while (!done) {
      weeks.push(
        <Week
          key={date}
          date={date.clone()}
          month={month}
          select={(day) => select(day)}
          selected={selected}
          data={data}
        />
      );

      date.add(1, "w");

      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  };

  const rendermonthLabel = () => {
    return <span className="month-label">{month.format('MMMM YYYY')}</span>;
  }


  return (
    <div className="calendar" id="Home_table">
      <header className="CalHeader">
        <div className="month-display row">
          <i className="chevron left button" onClick={previous} />
          {rendermonthLabel()}
          <i className="chevron right button" onClick={next} />
        </div>
        <DayNames />
      </header>
      {renderWeeks()}
    </div>
  );
}

const DayNames = () => {
  return (
    <div className="row day-names">
      <span className="day">Su</span>
      <span className="day">Mo</span>
      <span className="day">Tu</span>
      <span className="day">We</span>
      <span className="day">Th</span>
      <span className="day">Fr</span>
      <span className="day">Sa</span>
    </div>
  );
}

const getnumbers = (date, data) => {

  const [daypani, setdaypani] = useState(false)
  const [nightpani, setnightpani] = useState(false)

  let a = "XX"
  let b = "XX"
  let c = "daynumber"
  let d = "nightnumber"
  let e = "separator"

  data.forEach(element => {
    if (String(date.format("YYYY-MM-DD")) === element.date) {
      a = element.num1
      if ((a ===  "05") || (a === "16") || (a === "27") || (a === "38") || (a === "49") || (a === "50") || (a === "61") || (a === "72") || (a === "83") || (a === "94") || (a === "00") || (a === "11") || (a === "22") || (a === "33") || (a === "44") || (a === "55") || (a === "66") || (a === "77") || (a === "88") || (a === "99") ) {
        c = "highlighted"
      }
    }
  });

  data.forEach(element => {
    if (String(date.format("YYYY-MM-DD")) === element.date) {
      b = element.num2
      if ((b ===  "05") || (b === "16") || (b === "27") || (b === "38") || (b === "49") || (b === "50") || (b === "61") || (b === "72") || (b === "83") || (b === "94") || (b === "00") || (b === "11") || (b === "22") || (b === "33") || (b === "44") || (b === "55") || (b === "66") || (b === "77") || (b === "88") || (b === "99") ) {
        d = "highlighted"
      }
    }
  });

  if ((c == "highlighted") && (d == "highlighted")) {
    e = "highlighted"
  }

  if ((a === "XX") || (b === "XX")) {
    return <div className="highlighted"> * </div>
  }
  else {
    return (
      <>
        <span className={c}>{a}</span><span className={e}> | </span><span className={d}>{b}</span>
      </>
    )
  }
}


const Week = ({ month, selected, select, date, data }) => {

  let days = [];

  for (var i = 0; i < 7; i++) {
    let day = {
      name: date.format("dd").substring(0, 1),
      number: date.date(),
      isCurrentMonth: date.month() === month.month(),
      isToday: date.isSame(new Date(), "day"),
      date: date
    };
    days.push(
      <div className={"day_number" + (day.isToday ? " today" : "")}>
        <span
          key={date.toString()}
          className={"day_number1"+ (day.isToday ? " today" : "") + (day.isCurrentMonth ? "" : " different-month") + (date.isSame(selected) ? " selected" : "")}
          onClick={() => select(day)}>{day.number}
        </span>
        <div>
          {getnumbers(date, data)}
        </div>
      </div>
    );

    date = date.clone();
    date.add(1, "day");
  }

  return (
    <div className="row week" key={days[0]}>
      {days}
    </div>
  );
}


export default CalendarInput;
