import React from 'react';
import './InputText.css';

export default function InputText(prop) {
  return (
    <div>
      <form onSubmit={prop.handleSubmit}>
        <input
          className="inputUserName"
          name="userName"
          placeholder="ユーザー名"
        />
        <textarea
          className="message"
          name="message"
          placeholder="今日の出来事"
        />
        <div>
          <button className="send" type="submit">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
