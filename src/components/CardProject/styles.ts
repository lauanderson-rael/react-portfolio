import styled from "styled-components";

export const ContainerCards = styled.div`
h2{
  color: var(--text-color);
}

.project-card {
    border: 1px solid var(--text-color);;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-width: 340px;
    margin: 20px;
    transition: transform 0.2s ease-in-out;
  }

  .project-card:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 15px var(--text-color);;
  }

  .project-image {
    width: 100%;
    height: 188px;
  }

  .project-content {
    padding: 16px;
  }

  .project-title {
    font-size: 1rem;
    margin: 0;

  }

  .project-description {
    font-size: 0.8rem;
    color: gray;
    margin: 8px 0;
    height: 100px;
    display: -webkit-box;
  -webkit-line-clamp: 4; /* Define o número máximo de linhas */
  -webkit-box-orient: vertical;
  overflow: hidden;

  }

  .project-links {
    margin: 16px 0;
  }

  .project-link {
    display: inline-block;
    margin-right: 8px;
    color: var(--text-color-blue-green);
    text-decoration: none;
  }
  .project-link:hover{
    color: #00a206;
  }
  .icon-link{
    margin-right: 5px;
    align-items: center;

  }

  .project-link:hover {
    text-decoration: underline;
  }

  .project-technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .technology {
    background-color: #f1f1f1;
    background-color: #333;
    padding: 4px 8px;
    border-radius: 4px;
    font-size: 0.875rem;
    color: #333;
    color: rgba(255, 255, 255, 0.801);
  }

@media (max-width: 1020px) {
    .project-card {
    max-width: none;
    margin: 12px;
  }
}

@media(min-width: 769px){
  .project-card{
    //height: 500px;
  }
  .project-image{
    width: 338px;
    //height: 170px;
  }
  .project-description {

  }
}


`;
