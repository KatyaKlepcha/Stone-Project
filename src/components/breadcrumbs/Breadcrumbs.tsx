import React from 'react';
import {Link, useLocation} from 'react-router-dom';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme.styled";

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathNames: string[] = location.pathname.split('/').filter((pathName: string) => pathName);

    return (
        <StyledBreadcrumbs>
            <Link to="/">Главная</Link>
            {pathNames.map((pathName, index) => {
                const url = `/${pathNames.slice(0, index + 1).join('/')}`;
                return (
                    <span key={url}>
                        <Icon iconId={'arrowList'} width={'5'} height={'10'}/>
                        <Link to={url}>{pathName}</Link>
                    </span>
                );
            })}
        </StyledBreadcrumbs>
    );
};

const StyledBreadcrumbs = styled.div`

  a {
    font-size: 16px;
    line-height: 18px;
    color: ${theme.colors.accent};


    &:first-child {
      margin-right: 10px;
      color: rgba(156, 156, 156, 1);
    }

    &:not(:first-child) {
      margin-left: 8px;
    }
  }

`