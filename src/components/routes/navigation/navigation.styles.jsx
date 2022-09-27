import styled from "styled-components";
import { Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../../assets/crown.svg";

export const Svg = styled(CrwnLogo)`
  flex-shrink: 0;
`;

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 0 25px;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`;

export const LogoSvg = styled.svg`
  flex-shrink: 0;
`;
