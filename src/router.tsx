import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from 'App';
import { QuestionDetail } from 'pages/question';
import { Questions } from 'pages/questions';

export const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/questions/:id" element={<QuestionDetail />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};
