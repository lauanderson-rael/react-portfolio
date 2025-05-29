import React from 'react';
import styles from './styles.module.css';

type AcademicEntry = {
  degree: string;
  institution: string;
  period: string;
};

const academicData: AcademicEntry[] = [
  {
    degree: 'Técnologo em Análise e Desenvolvimento de Sistemas',
    institution: 'Instituto Federal do Maranhão - IFMA',
    period: 'Mar/2022 - Jan/2026',
  },
  {
    degree: 'Técnico em Informática',
    institution: 'Instituto Federal do Maranhão - IFMA',
    period: 'Fev/2019 - Jan/2022',
  },
];

export function AcademicHistory() {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Formação Acadêmica</h2>
      <ul className={styles.list}>
        {academicData.map((entry, index) => (
          <li key={index} className={styles.item}>
            <h3 className={styles.degree}>{entry.degree}</h3>
            <p className={styles.institution}>{entry.institution}</p>
            <span className={styles.period}>{entry.period}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
