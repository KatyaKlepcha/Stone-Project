import React, {FC} from 'react';
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

type ModalPropsType = {
    isOpen: boolean
    setIsOpen: (open: boolean) => void
}

export const Modal: FC<ModalPropsType> = ({isOpen, setIsOpen}) => {
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <StyledModal onClick={closeModal} isOpen={isOpen}>
            <ModalContent onClick={(e) => e.stopPropagation()} isOpen={isOpen}>
                <span className="close">&times;</span>
                <h2>Модальное окно</h2>
                <p>Это пример модального окна.</p>
                <p>Вы можете добавить здесь любое содержимое, которое вам нужно.</p>
            </ModalContent>
        </StyledModal>
    );
}

const StyledModal = styled.div<{ isOpen: boolean }>`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${props => props.isOpen ? '1' : '0'};
  transition: 0.5s;
  pointer-events: ${props => props.isOpen ? 'all' : 'none'};
  z-index: 4;
`

const ModalContent = styled.div<{ isOpen: boolean }>`
  padding: 20px;
  border-radius: 12px;
  background-color: ${theme.colors.font};
  transition: 0.4s all;
  transform: ${props => props.isOpen ? 'scale(1)' : 'scale(0.5)'};
`