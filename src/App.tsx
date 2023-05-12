import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import { HomePage } from './components/Pages/HomePage';
import LoadDataMock from './data-mock'
import { PostPage } from './components/Pages/PostPage';
import { PostFormPage } from './components/Pages/PostFormPage';

LoadDataMock();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<HomePage />} />
      <Route path="/Post/:id" element={<PostPage />} />
      <Route path="/Post/Create" element={<PostFormPage />} />
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
