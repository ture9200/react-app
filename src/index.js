import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import '@fortawesome/fontawesome-free/js/all.js';


//리액트 돔이라는 라이브러리를 이용해서 인덱스에 있는 root라는 아이디를 가진 요소와 
// 최상위의 component를 연결 
//component는 app이라는 곳에서 시작 
ReactDOM.render( 
   <React.StrictMode>
   <App /> 
   </React.StrictMode>,
   document.getElementById('root')
);


