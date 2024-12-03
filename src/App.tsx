
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Main } from "./pages/Main";
import Blog from "./pages/Blog";


// function Layout() {
//   return (
//     <div>
//       <Header></Header>
//       <main>
//         <Outlet /> {/* Renderiza as rotas filhas */}
//       </main>
//     </div>
//   );
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} /> {/* Rota inicial */}
          <Route path="/blog" element={<Blog/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
