import React, { BaseSyntheticEvent, useState } from 'react';
import './todo-form.style.css';
import { useStore } from '../../store';

export default function TODOForm() {
  const options = ['select', 'test1', 'test2', 'test3'];
  const formStore = useStore().formStore;

  const [form, setForm] = useState(formStore.todoForm);

  const inputHandler = (ev: BaseSyntheticEvent) => {
    setForm({
      ...form,
      [ev.target.name]: ev.target.value
    });
  };

  const submitButton = () => {
    console.log('submit');
  };

  const typeOptions = options.map((option, index) => {
    return (
      <option key={index} value={option}>
        {option}
      </option>
    );
  });

  return (
    <div className={'todo_form'}>
      <div>
        <div className={'tmp_spacer'}>
          <input
            name={'name'}
            placeholder={'Give name to your task'}
            value={form.name}
            onChange={inputHandler}
            className={'todo_input'}
          />
        </div>
        <div className={'tmp_spacer'}>
          <textarea
            placeholder={'write description'}
            name={'description'}
            value={form.description}
            onChange={inputHandler}
            className={'todo_textarea'}
          />
        </div>
        <div className={'tmp_spacer'}>
          <select
            name={'type'}
            placeholder={'select type'}
            value={form.type}
            onChange={inputHandler}
            className={'todo_selector'}>
            {typeOptions}
          </select>
        </div>
        <button
          onClick={() => submitButton()}
          className={'todo_submit'}
          type={'submit'}>
          save
        </button>
      </div>
    </div>
  );
}
