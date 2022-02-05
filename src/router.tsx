import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { App } from 'App';
import { Questions } from 'pages/questions/questions';

export const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/questions" element={<Questions />} />
          <Route
            path="/questions/:id"
            element={
              <div>
                <h1>Detail</h1>
                <Link to={'/'}>Back to List</Link>
              </div>
            }
          />
        </Routes>
      </App>
    </BrowserRouter>
  );
};
