/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonIcon from '@mui/icons-material/Person';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import GradingIcon from '@mui/icons-material/Grading';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Inicio",
      icon: <HomeIcon />,
      url: "/"
    },
    {
      text: "Perfil del candidato",
      icon: <PersonIcon />,
      url: "/"
    },
    {
      text: "Programa de gobierno",
      icon: <GradingIcon />,
      url: "/"
    },
    {
      text: "Equipo",
      icon: <GroupsIcon />,
      url: "/"
    },
    {
      text: "Noticias",
      icon: <NewspaperIcon />,
      url: "/"
    },
    {
      text: "Tu aporte",
      icon: <ThumbUpIcon />,
      url: "/"
    }
    
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <a href="/">Inicio</a>
        <a href="/">Perfil del candidato</a>
        <a href="/">Programa de Gobierno</a>
        <a href="/">Equipo</a>
        <a href="/">Noticias</a>
        <a href="/">
          <button className="primary-button">Tu aporte</button>
        </a>
        
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton href= {item.url}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
