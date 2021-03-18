import React from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.itemsNavbar}>
            <a className="" href="#">
              <Image
                src="/logo.svg"
                alt="Logo de glavi inmobiliaria"
                width={200}
                height={150}
              />
            </a>

            <div className="">
              <ul className="">
                <li className="">
                  <a className="" href="#">
                    Home
                  </a>
                </li>
                <li className="">
                  <a className="" href="#">
                    Link
                  </a>
                </li>
                <li className="">
                  <Button
                  className={styles.textLink}
                    aria-controls="simple-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                  >
                    Comprar
                  </Button>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Casa</MenuItem>
                    <MenuItem onClick={handleClose}>Departamento</MenuItem>
                    <MenuItem onClick={handleClose}>Oficina</MenuItem>
                  </Menu>
                  
                </li>
               
              </ul>
            </div>
          </div>
          <form className="">
            <input
              className={styles.input_search}
              type="search"
              placeholder="Buscar por código"
              aria-label="Search"
            />
            <button className={styles.button_navbar} type="button">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default Header;
