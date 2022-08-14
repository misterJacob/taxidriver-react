import styled from 'styled-components'

export const BurgerButton = styled.button`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        pointer-events: all;
        cursor: pointer;
        position: relative;
        top: 10%;
        left: 90%;
        width: 40px;
        height: 40px;
        border-radius: 50%;
       

        &:hover {
          background: transparent;
          .burger {
            background-color: black;
            transform: rotate(2deg);
            transition: all 0.5s ease-in-out;
            &::before,
            &::after {
              background-color: black;
            }
          }
        }
        .burger {
          height: 5px;
          width: 30px;
          background-color: rgb(253, 2, 2);
          position: absolute;
          top: 18px;
          right:5px;
          border-radius: 5px;

          &::before {
            content: "";
            height: 5px;
            width: 20px;
            background-color: red;
            position: absolute;
            top: -10px;
            right: 5px;
            border-radius: 5px;
          }
          &::after {
            content: "";
            height: 5px;
            width: 20px;
            background-color: red;
            position: absolute;
            top: 10px;
            right: 5px;
            border-radius: 5px;
          }
        }
        `;  
