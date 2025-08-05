import { Container } from "./styles";

import { FaGithub, FaInstagram, FaLinkedin, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiCodeFill } from "react-icons/pi";


export function Footer() {
  return (
    <Container>
      <div className="line-footer">
        <div className="flex">

          <div className="btn-social">

            <a href="https://www.instagram.com/lauanderson.rael?igsh=MWMxNDZjN3VhdjA3Nw==" target="blank">
              <button style={{ color: 'DeepPink' }}>
                <FaInstagram />
              </button>
            </a>
            <a href="https://www.youtube.com/@lau_dicas" target="blank">
              <button style={{ color: 'red' }} >
                <FaYoutube />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/lauanderson-rael-a68b2b16a/" target="blank">
              <button style={{ color: 'RoyalBlue' }}>
                <FaLinkedin />
              </button>
            </a>
            <a href="https://github.com/lauanderson-rael" target="blank">
              <button style={{ color: 'gray' }}>
                <FaGithub />
              </button>
            </a>

            <a href="https://api.whatsapp.com/send?phone=98985571212&text=Ol%C3%A1,%20vim%20falar%20com%20voc%C3%AA" target="blank">
              <button style={{ color: 'lime' }}>
                <FaWhatsapp />
              </button>
            </a>

            <a href="mailto:lauanderson38@gmail.com" target="blank">
              <button style={{ color: 'brown' }}>
                <IoIosMail />
              </button>
            </a>



          </div>

          <div className="logo-footer">
            <div style={{ color: 'var(--text-color-blue-green)', fontSize: '40px' }}>  <PiCodeFill /> </div>
          </div>
        </div>
      </div>
      <div className="line-footer">
        <span>© 2024 Lauanderson Rael. Todos os direitos reservados</span>
      </div>
    </Container>
  )
}




// import { Link } from "react-router-dom";
// import { IoMdClose } from "react-icons/io";
// import { BsList } from "react-icons/bs";
// import { PiCodeFill } from "react-icons/pi";
// import "../../pages/Main/index"

// import { useRef } from "react";

// export function Header2() {
//   // Iniciando const com o tipo HTMLDivElement | null
//   const referencia1 = useRef<HTMLDivElement | null>(null);
//   const AbrirMenu = () => {
//     if (referencia1.current) {
//       referencia1.current.classList.add("abrir-menu");
//     }
//   };

//   const referencia2 = useRef<HTMLDivElement | null>(null);
//   const FecharMenu = () => {
//     if (referencia1.current) {
//       referencia1.current.classList.remove("abrir-menu");
//     }
//   };

//   return (
//     <section>
//       <div className="interface">
//         <div className="logo">
//           <a href="#">
//           <div style={{color: '#00ff08', fontSize: '40px'}}>  <PiCodeFill/> </div>
//           </a>
//         </div>

//         <nav className="menu-desktop">
//           <ul>
//             <li>
//               <a href="#">Início</a>
//             </li>
//             <li>
//               <a href="#especialidades">Especialidades</a>
//             </li>
//             <li>
//               <a href="#sobre">Sobre</a>
//             </li>
//             <li>
//               <a href="#projetos">Projetos</a>
//             </li>
//             <li>
//               <Link to={'/blog'}>Blog</Link>
//             </li>
//           </ul>
//         </nav>

//         <div className="btn-contato">
//           <a href="#formulario">
//             <button>Contato</button>
//           </a>
//         </div>

//         <div className="barra-lateral">
//           <div className="btn-abrir-menu" onClick={AbrirMenu} ref={referencia2}>
//             <i>
//               <BsList />
//             </i>
//           </div>



//           <div className="menu-mobile" ref={referencia1} onClick={FecharMenu}>
//             <div className="btn-fechar">
//               <i>
//                 <IoMdClose />
//               </i>
//             </div>

//             <nav>
//               <ul>
//                 <li>
//                   <a href="#">Início</a>
//                 </li>
//                 <li>
//                   <a href="#especialidades">Especialidades</a>
//                 </li>
//                 <li>
//                   <a href="#sobre">Sobre</a>
//                 </li>
//                 <li>
//                   <a href="#projetos">Projetos</a>
//                 </li>
//                 <li>
//                   <a href="#formulario">Contato</a>
//                 </li>
//               </ul>
//             </nav>
//           </div>
//           <div className="overlay-menu" onClick={FecharMenu}></div>
//         </div>
//       </div>
//     </section>
//   );
// }
