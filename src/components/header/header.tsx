import React from 'react';

import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import './header.style.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

export default function Header() {
  const date = useStore().dateStore;

  const MonthNameDisplay = observer(() => {
    const month = new Date();
    month.setMonth(date.month);
    const monthName = month.toLocaleDateString('en-US', { month: 'long' });
    return <span className={'select_month_name'}>{monthName}</span>;
  });

  return (
    <div className={'header_container'}>
      {/*month switch*/}
      <div className="month_switch_block">
        <button
          className="select_month_button"
          onClick={() => date.previousMonth()}>
          <IoChevronBackOutline className={'list_icon'} />
        </button>
        <MonthNameDisplay />
        <button
          className="select_month_button"
          onClick={() => date.nextMonth()}>
          <IoChevronForwardOutline className={'list_icon'} />
        </button>
      </div>
      <div>
        <button className={'today_button'} onClick={() => date.setToday()}>
          today
        </button>
      </div>
    </div>
  );
}
