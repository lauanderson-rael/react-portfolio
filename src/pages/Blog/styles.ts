import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--background-color);

body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}


.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

}

.center{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main{
  margin-bottom: 100px;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 0 15%;
}

header{
  display: flex;
  justify-content: center;
  gap: 10px;
  align-items: center;
  background-color: var(--background-color2);
  color: var(--text-color2);
  padding: 0 5px;

  position: fixed;
  top:80px;
  width: 100vw;

  z-index: 100;
}

article{
  border: 1px solid #d3d3d3;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 0px 0px 7px var(--background-color2);

  h2{
    color: var(--text-color);
  }
}
article img{
  border-radius: 7px;
  margin: 10px 0;
  width: 100%;

}

article p, article span{
  color: var(--text-color);
  font-size: medium;
}

article button{
  margin-top: 10px;
  background-color: #d3d3d3;
  background-color: #00ff08;
  padding: 10px 0;
  border-radius: 7px;
  font-weight: 700;
  color: black;
  transition: all 0.3s;
  transform: scale(1.02);
  width: 100%;
  border: 2px solid #00ff08;
}
article button:hover{
  background-color:rgb(5, 194, 11);
  border: 2px solid rgb(5, 194, 11);
}

article a{
  margin-top: auto;
}


footer {
  margin-top: 50px;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgb(1, 65, 1);
  color: white;
  text-align: center;
}



@media (max-width: 1020px) {
  article{
  border: 1px solid #d3d3d3;
  width: 40%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  margin-bottom: 30px;
  padding: 20px;
  box-shadow: 0px 0px 7px var(--background-color2);

  h2{
    color: var(--text-color);
  }

}
  main{
    grid-template-columns: 1fr;
    padding: 0 2%;
    place-items: center;

  }

  header{
    top:70px;

  }
  h2{
    font-size: large;
  }

  article{
    width: 95%;
  }
   main, header, footer{
    width: 100%;
   }
}

`
