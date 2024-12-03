import styled from "styled-components";

export const Container = styled.div`

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
}

header{
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(0, 198, 0);
  width: 100%;
  color: white;
}

article{
  width: 60%;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  margin-bottom: 30px;
}
article img{
  border-radius: 7px;
}

article p, article span{
  color: rgb(110, 110, 110);
}

article button{
  margin-top: 10px;
  border: 2px solid green;
  background-color: white;
  padding: 10px 0;
  border-radius: 7px;
  font-weight: 700;
  color: green;
  transition: all 0.3s;
}
article button:hover{
  color: white;
  background-color: green;
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

footer a{
  color: gray;
}

footer a:hover{
  color: white;
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
