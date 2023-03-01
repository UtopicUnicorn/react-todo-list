import React from 'react';

import './calendar.style.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';
import { differenceInDays, endOfMonth, startOfMonth } from 'date-fns';

const MonthDisplay = observer(() => {
  const date = useStore().dateStore;

  const startDate = startOfMonth(date.getDate());
  const endDate = endOfMonth(date.getDate());
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();

  const changeChosenDay = (id: number) => {
    date.selectDay(id);
  };

  return (
    <div className={'calendar_block'}>
      {Array.from({ length: prefixDays }).map((_, index) => (
        <div key={index} className="empty_cell" />
      ))}
      {Array.from({ length: numDays }).map((_, index) => {
        const day = index + 1;
        return (
          <div
            className={day === date.day ? 'day_cell today' : 'day_cell'}
            key={day}
            onClick={() => changeChosenDay(day)}>
            {day}
          </div>
        );
      })}
    </div>
  );
});

export default function Calendar() {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return (
    <div className="calendar_container">
      <div className="day_names_block">
        {days.map((day, index) => {
          return <div key={index}>{day}</div>;
        })}
      </div>
      <MonthDisplay />
    </div>
  );
}
