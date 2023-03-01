import React from 'react';
import './App.css';
import Header from './components/header/header';
import Calendar from './components/calendar';
import EventsBlock from './components/events-block';
import ModalWindow from './reusable-components/modal-window/modal-window';
import TODOForm from './components/todo-form/todo-form';

function App() {
  return (
    <div className="app_container">
      <Header />
      <div className="main_screen">
        <Calendar />
        <EventsBlock />
        <ModalWindow>
          <TODOForm />
        </ModalWindow>
      </div>
    </div>
  );
}

export default App;
