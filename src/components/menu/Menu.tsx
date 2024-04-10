import React, {useState} from 'react';
import styled from "styled-components";

export const Menu = () => {
    const [selectedItem, setSelectedItem] = useState('');

    const handleItemClick = (item: string) => {
        setSelectedItem(item);
    };

    return (
        <StyledMenu>
            <ul>
                <li ><a href={''} className={selectedItem === 'Каталог' ? 'selected' : ''}
                        onClick={() => handleItemClick('Каталог')}>Каталог</a></li>
                <li className={selectedItem === 'Акции' ? 'selected' : ''}
                    onClick={() => handleItemClick('Акции')}><a href={''}>Акции</a></li>
                <li className={selectedItem === 'Блог' ? 'selected' : ''}
                    onClick={() => handleItemClick('Блог')}><a href={''}>Блог</a></li>
                <li className={selectedItem === 'Сотрудничество' ? 'selected' : ''}
                    onClick={() => handleItemClick('Сотрудничество')}><a href={''}>Сотрудничество</a></li>
                <li className={selectedItem === 'Оплата и доставка' ? 'selected' : ''}
                    onClick={() => handleItemClick('Оплата и доставка')}><a href={''}>Оплата и доставка</a></li>
            </ul>
        </StyledMenu>
    );
};

export const StyledMenu = styled.nav`
  display: flex;
  align-items: flex-end;
  padding: 13px 103px 14px 38px;
  background-color: rgba(0, 0, 0, 1);

  ul {
    display: flex;
    gap: 30px;
    list-style: none;

    li a {
      text-decoration: none;
      text-transform: uppercase;
      color: #fff;


      &:active {
        text-decoration: underline;
      }

      &.selected {
        text-decoration: underline;
      }

    }

  }
`
