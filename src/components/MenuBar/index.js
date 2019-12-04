import React, { useState, useEffect } from "react"

import { Home } from "styled-icons/boxicons-solid/Home"
import { SearchAlt2 as Search } from "styled-icons/boxicons-regular/SearchAlt2"
import { UpArrowAlt as Arrow } from "styled-icons/boxicons-regular/UpArrowAlt"
import { LightBulb as Light } from "styled-icons/octicons/LightBulb"
import { Grid } from "styled-icons/boxicons-solid/Grid"
import { ThList as List } from "styled-icons/typicons/ThList"

import {
  MenuBarWrapper,
  MenuBarGroup,
  MenuBarLink,
  MenuBarItem,
} from "./styles"

const MenuBar = () => {
  const [theme, setTheme] = useState(null);
  const [display, setDisplay] = useState(null);

  const isDarkMode = theme === 'dark';
  const isListMode = display === 'list';

  const getThemeColor = () => isDarkMode ? 'light' : 'dark';

  useEffect(() => {
    setTheme(window.__theme);
    setDisplay(window.__display);

    window.__onThemeChange = () => setTheme(window.__theme);
    window.__onDisplayChange = () => setDisplay(window.__display);
  }, []);

  return (
    <MenuBarWrapper>
      <MenuBarGroup>
        <MenuBarLink to="/" title="Voltar para Home">
          <MenuBarItem>
            <Home />
          </MenuBarItem>
        </MenuBarLink>
        <MenuBarLink to="/search/" title="Pesquisar">
          <MenuBarItem>
            <Search />
          </MenuBarItem>
        </MenuBarLink>
      </MenuBarGroup>
      <MenuBarGroup>
        <MenuBarItem
          title="Mudar o tema"
          className={theme}
          onClick={() => {
            window.__setPreferredTheme(getThemeColor());
          }}
        >
          <Light />
        </MenuBarItem>
        <MenuBarItem
          title="Mudar visualização"
          onClick={() => {
            window.__setPreferredDisplay(isListMode ? 'grid' : 'list')
          }}
        >
          {isListMode ? <Grid /> : <List />}
        </MenuBarItem>
        <MenuBarItem title="Ir para o Topo">
          <Arrow />
        </MenuBarItem>
      </MenuBarGroup>
    </MenuBarWrapper>
  );
}

export default MenuBar