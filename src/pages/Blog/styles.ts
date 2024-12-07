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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}

header{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  background-color: var(--background-color2);
  color: var(--text-color2);
  width: 100%;
}

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
article img{
  border-radius: 7px;
  margin: 10px 0;
  width: 100%;

}

article p, article span{
  color: var(--text-color);
}

article button{
  margin-top: 10px;
  border: 2px solid #d3d3d3;
  background-color: #d3d3d3;
  padding: 10px 0;
  border-radius: 7px;
  font-weight: 700;
  color: black;
  transition: all 0.3s;
  width: 100%;
}
article button:hover{
  color: white;
  background-color: #00ff08;
  border: 2px solid #00ff08;
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



@media (max-width: 720px) {
  article{
    width: 95%;
  }
   main, header, footer{
    width: 100%;
   }
}

`
