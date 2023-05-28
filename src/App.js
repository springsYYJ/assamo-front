import './App.css';
import Main from './page/Main';
import Board from './page/Board';
import { Route, Routes } from 'react-router-dom';
import GlobalNavigationBar from './component/GlobalNavigationBar';
import BoardDetail from './page/BoardDetail';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <GlobalNavigationBar/>
      <Routes> // 라우터 설정
        <Route path='/' element={<Main/>} /> //Route설정의 필수 요소 path, element값을 입력한다
        <Route path='/board' element={<Board/>} />
        <Route path='/board/:id' element={<BoardDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
