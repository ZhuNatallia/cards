import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/* First level: Необходимо реализовать React приложение. 
Оно должно отображать карточки с пользователями. 
Данные должны храниться в массиве.
Карточки могут быть стилизованы произвольно
Работу необходимо сдать в виде ссылки на GIT репозиторий. Напомню, что git init необходимо вызывать прямо внутри папки app.  */

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
