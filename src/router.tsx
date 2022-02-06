import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from 'App';
import { Questions } from 'pages/questions';

export const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/questions" element={<Questions />} />
        </Routes>
      </App>
    </BrowserRouter>
  );
};
