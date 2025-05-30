import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "@components/Layout";
import VideoPage from "@pages/video-page";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
            <Route path='/' element={<VideoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

