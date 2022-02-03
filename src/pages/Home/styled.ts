import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  margin: 0 auto;
  height:100vh;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  grid-auto-flow: column;

  grid-template-areas:
    "LEFT RIGHT"
    ;

`;

export const Main =styled.div`
  grid-area: RIGHT;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .titulo-box-modal{
    display: flex;
    padding-bottom:1.9rem;

    >h1{
    font-size: 4rem;
    font-weight: 100;
  }
  }
  
 
.box-simulator{
  visibility: hidden;
  opacity:0;
  padding-bottom:10rem;

  >section{
    display:grid;
    justify-content: center;
    align-items: center;
    width: 45rem;
    height: 40rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    border-radius: 1rem;

    .form-inputs{

      >div{
        padding-bottom:1.9rem;
      }
      >h1{
        font-size: 1.6rem;
        padding-left: 1rem;
        padding-bottom: 0.2rem;
      }
      
      input{
        font-size: 1.6rem;
        background: #EDF0EF;
        height: 6.4rem;
        width: 39rem;
        color: #28405B;
        border-radius: 1.6rem;
        padding: 2rem;
        outline: none;

        ::placeholder {
        color: #28405B;
      }
      }

      select{
        font-size: 1.6rem;
        background: #EDF0EF;
        height: 6.4rem;
        width: 39rem;
        color: #28405B;
        border-radius: 1.6rem;
        padding: 2rem;
        outline: none;

        ::placeholder {
        color: #28405B;
      }
      }

        button{ 
        display:flex;
        align-items: center;
        justify-content: center;

        height: 5rem;
        width: 39rem;

        border-radius: 1.6rem;
        border: 0.1rem solid rgba(168,168,179,0.5);
        background-color: #1E40AF;
        color: #fff;

        font-size: 1.6rem;
        font-weight: bold;
      
        transition: filter 0.2s;

        >img{
          padding: 1rem;
        }

        &:hover {
        filter: brightness(0.9);
      }
        
      }

    

   
    
  }
  }
}

.box-simulator.active{
   visibility: visible;
   opacity:1;
}

`

export const ModalResultSimulator = styled.div`

.box-result-simulator{
    position: fixed;
    width:150vw;
    height:100vh;
    top: 0;
    left: 0;

    display:flex;
    justify-content: center;
    align-items: center;
  
    visibility: hidden;
    opacity:0;
}

.box-result-simulator.active{
 visibility: visible;
 opacity:1;
}

`

export const Aside = styled.div`
  grid-area: LEFT;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  background: url('/images/img-background.svg') no-repeat top/contain;
  background-position-x: -2rem;
  background-position-y: 8rem;

  .img-background-boll{
    width: 20rem;
    height: 40rem;
    background: #008DCE;
    clip-path: circle();
    opacity: 0.1;  

    position: fixed;

    top: -46rem;
    width: 63.3rem;
    right: -35rem;
    height: 63.3rem;
  }

  .img-background-boll2{
    width: 20rem;
    height: 40rem;
    background: #008DCE;
    clip-path: circle();
    opacity: 0.1;  

    position: fixed;

    bottom: -15rem;
    right: 5.6rem
  }
`
