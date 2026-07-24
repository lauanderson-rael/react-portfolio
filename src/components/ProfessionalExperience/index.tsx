import { FaLink } from "react-icons/fa";
import styles from "./styles.module.css";

export function ProfessionalExperience() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Experiência Profissional</h2>

      {/* Card OKN */}
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <h3 className={styles.company}>OKN</h3>
          <span className={styles.period}>Ago/2025 – Atual</span>
        </div>

        <div className={styles.progressGroup}>
          <div className={styles.progressItem}>
            <div className={styles.progressMarker}>
              <span className={`${styles.dot} ${styles.dotActive}`} />
              <span className={styles.line} />
            </div>
            <div>
              <h4 className={styles.role}>
                Desenvolvedor Júnior Full Stack
                <span className={styles.period}>(Jun/2026 – Atual)</span>
                <span className={styles.currentBadge}>Atual</span>
              </h4>
              <ul className={styles.description}>
                <li className={styles.point}>Desenvolvimento full stack com foco em soluções escaláveis.</li>
                <li className={styles.point}>IA aplicada ao desenvolvimento de software (SDD, agentes, automações).</li>
                <li className={styles.point}>Utilização de ferramentas de IA como SpecKit, Codex e MCP no fluxo de trabalho.</li>
              </ul>
            </div>
          </div>

          <div className={styles.progressItem}>
            <div className={styles.progressMarker}>
              <span className={styles.dot} />
            </div>
            <div>
              <h4 className={styles.role}>
                Estagiário de Desenvolvimento Web
                <span className={styles.period}>(Ago/2025 – Jun/2026)</span>
              </h4>
              <ul className={styles.description}>
                <li className={styles.point}>Auxílio no desenvolvimento de aplicações web utilizando TypeScript e Node.js.</li>
                <li className={styles.point}>Implementação de testes end-to-end com Cypress.</li>
                <li className={styles.point}>Automação de processos com Python e Selenium.</li>
                <li className={styles.point}>Criação de plugins para WordPress.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Card Freelancer */}
      <div className={styles.item}>
        <div className={styles.itemHeader}>
          <h3 className={styles.role}>Freelancer Python</h3>
          <span className={styles.period}>Jan/2025 – Fev/2025</span>
        </div>
        <p className={styles.note}>Projeto AutoDocs</p>
        <ul className={styles.description}>
          <li className={styles.point}>Desenvolvi uma automação para otimizar processos de manipulação de documentos PDF e Word, para uma empresa local.</li>
          <li className={styles.point}>Implementei interface gráfica desktop para facilitar o uso por pessoas não técnicas.</li>
        </ul>
        <div>
          <button style={{ padding: "0px 5px", display: "flex", alignItems: "center", gap: "5px" }}>
            <FaLink />
            <a href="https://github.com/lauanderson-rael/auto-docs" target="blank" style={{ textDecoration: "none", color: "#383838ff" }}>Ver Projeto</a>
          </button>
        </div>
      </div>
    </section>
  );
}
