import 'react-app-polyfill/ie11';
import './styles.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ActivityIcon, BellIcon, NewBellIcon } from '../dist'
const App = () => {
  return (
    <div>
      <h1>Testing ...</h1>
      <ActivityIcon label='test' />
      <BellIcon width={150} height={150} strokeColor="#333333" fillColor='#585858' />
      <div className='button'>
        <NewBellIcon strokeColor="#ffffff" fillColor="#ffffff0" />
        Test Icon
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
