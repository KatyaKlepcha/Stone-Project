import useBreadcrumbs from "use-react-router-breadcrumbs";
import {PRODUCTS} from "../../common/constants/Constants";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Icon} from "../icon/Icon";
import {theme} from "../../styles/Theme.styled";

const DynamicUserBreadcrumb = ({match}: { match: any }) => {
    const catalogId = match.params.catalogId;
    const currentCatalog = PRODUCTS.find(product => product.id === +catalogId)

    return (
        <span>{currentCatalog?.description}</span>
    );
}


const routes = [
    {path: "/catalog/:catalogId", breadcrumb: DynamicUserBreadcrumb},
];

export const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs(routes);


    return (
        <StyledBreadcrumbs>
            {breadcrumbs.map(({match, breadcrumb}) => (
                <NavLink key={match.pathname} to={match.pathname}>
                    {breadcrumb}
                    <Icon iconId={'arrowList'} width={'5'} height={'10'}/>
                </NavLink>
            ))}
        </StyledBreadcrumbs>
    );
};

export const StyledBreadcrumbs = styled.div`
  padding: 24px 0 28px;

  a {
    font-size: 16px;
    line-height: 18px;
    color: ${theme.colors.accent};
    margin-right: 10px;

    span {
      margin-right: 5px;
    }

    &:first-child {
      color: rgba(156, 156, 156, 1);
    }

    &:last-child {
      svg {
        display: none;
      }
    }
  }
`