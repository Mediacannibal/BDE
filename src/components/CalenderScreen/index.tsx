import React, { useState } from 'react'
import moment from 'moment';
import './style.css'
import { useAuth } from 'store/authStore';

const CalenderScreen = () => {
  const { auth } = useAuth();
  const [month, setmonth] = useState(moment())
  const [selected, setselected] = useState(moment("2020-03-02").startOf('day'))


  const previous = () => {

    setmonth(month.subtract(1, 'month'))

  }

  const next = () => {
    setmonth(month.add(1, 'month'));
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
          select={(day: any) => select(day)}
          selected={selected} />
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

const Week = ({ month, selected, select, date }) => {

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
      <span
        key={date.toString()}
        className={"day" + (day.isToday ? " today" : "") +
          (day.isCurrentMonth ? "" : " different-month") +
          (date.isSame(selected) ? " selected" : "")}
        onClick={() => select(day)}>{day.number}
      </span>
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

export default CalenderScreen;
