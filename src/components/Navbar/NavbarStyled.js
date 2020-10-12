import styled from "styled-components";

const NavbarStyled = styled.header`
  background-color: #282828;
.navbar-toggler[aria-expanded="false"] img {
    display: block;
    border-style: none;
    outline: none;

}

.navbar-toggler[aria-expanded="false"] span {
    display: none;

}

.navbar-toggler[aria-expanded="true"] img {
    display: none;

}

.navbar-toggler[aria-expanded="true"] span {
    display: block;

}

.dg-navbar {
    font-weight: 400;
    display: flex;
    align-items: center;
    max-width: 1390px;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;
    color: white;
}


.dg-navbar.navbar-expand-lg .navbar-nav .nav-link {
    position: relative;
    color: #fff;
    transition: color .2s ease-in-out;
    padding: 20px 15px;;
}

.navbar-search {
    margin-left: 16px;
}

.navbar-search .search-input {
    background: transparent;
    border: 2px solid white;
    border-radius: 25px;
    padding: 3px 31px 3px 11px;
    color: white;
    max-width: 189px;
}

.navbar-search .search-input::placeholder {
    color: white;
}

.navbar-search .search-input:focus {
    outline: none;
    box-shadow: none;
}

.search-btn {
    border: none;
    background-color: #00aabe;
    border-radius: 25px;
    padding: 5px 20px;
    margin-left: -39px;
}

.dropdown-menu.dropdown-menu-right {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    float: left;
    min-width: 10rem;
    padding: 0 0;
    margin: .125rem 0 0;
    font-size: 1rem;
    color: #fff;
    text-align: left;
    list-style: none;
    background-color: #282828;
    background-clip: padding-box;
    border: 0 solid rgba(0, 0, 0, .15);
    border-radius: 0;

}

[data-sal|=slide].sal-animate, body.sal-disabled [data-sal|=slide] {
    opacity: 1;
    transform: none;
}

@media (hover: hover) {
    .btn-icon:focus, .btn-icon:hover, .content-blocks--text a:focus, .content-blocks--text a:hover, .hover-opacity:focus, .hover-opacity:hover {
        opacity: .7;
    }
}

.dropdown-item {
    /* color: white; */
    display: block;
    width: 100%;
    padding: 12px 16px;
    clear: both;
    font-weight: 400;
    color: #fff;
    text-align: inherit;
    white-space: nowrap;
    background-color: transparent;
    border: 0;
}

.dropdown-item:hover {
    background-color: #00aabe;
    color: white;

}

img {
    vertical-align: middle;
    border-style: none;
}

@media (max-width: 992px) {
    .navbar-search {
        display: none;
    }

    .dropdown-item {
        display: flex;
        align-items: center;
        height: 48px;
    }

    .dropdown-menu-right {
        margin-top: 0;
    }
}

@media (min-width: 992px) {
    .dg-navbar .dropdown-toggle::after {
        display: none;
    }

    .dg-navbar .nav-item.dropdown:hover .dropdown-menu {
        display: block;

    }

    .dropdown-menu.dropdown-menu-right {
        position: absolute;
        float: unset;
        margin-top: 0;
    }

}



`;

export default NavbarStyled;
