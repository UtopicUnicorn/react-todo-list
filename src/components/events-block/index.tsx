import React from 'react';

import { AiFillPlusCircle } from 'react-icons/ai';
import './events-block.style.css';
import { observer } from 'mobx-react-lite';
import { useStore } from '../../store';

const Todo = observer(() => {
  return (
    <div>
      <div className="todo_container">
        <h3>Todos Name</h3>
        <p>Todos description</p>
        <p>Todos type</p>
      </div>
    </div>
  );
});

const getMonthName = (month: number) => {
  const date = new Date();
  date.setMonth(month);
  return date.toLocaleDateString('en-US', { month: 'long' });
};

export const DisplayTODOS = observer(() => {
  const date = useStore().dateStore;

  return (
    <div>
      <div className="todo_title">
        <h1>
          {date.day} {getMonthName(date.month)}
        </h1>
      </div>
      <div className="todos-list">
        <Todo />
        <Todo />
        <Todo />
        <Todo />
        <Todo />
      </div>
    </div>
  );
});

export default function EventsBlock() {
  const form = useStore().formStore;

  const createTODO = () => {
    form.changeModal();
  };

  return (
    <div className="add_event_container">
      <div className="events_block">
        <button onClick={() => createTODO()} className="add_event_button">
          add event
          <AiFillPlusCircle className="plus_icon" />
        </button>
        <DisplayTODOS />
      </div>
    </div>
  );
}
