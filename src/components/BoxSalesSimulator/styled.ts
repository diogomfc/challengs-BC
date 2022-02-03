
import styled from 'styled-components';

export const Container = styled.div` 
    display:grid;
    justify-content: center;
    align-items: center;
    width: 45rem;
    height: 56rem;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    background: #fff;
    border-radius: 1rem;

    .form-inputs{

      >div{
        padding-bottom:1.9rem;
        h2{ 
          font-size: 1.6rem;
          font-weight: normal;
        }
        h1{
          font-size: 1.6rem;
        }
      }
      >h1{
        padding-bottom:1.9rem;
        color: #A5AEA7;
        font-weight: normal;
      }
      >img{
        padding-bottom:1.9rem;
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
`;

