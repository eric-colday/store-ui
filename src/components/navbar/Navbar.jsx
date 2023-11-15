"use client";

import Link from "next/link";
import React, { useContext, useState } from "react";
import styles from "./navbar.module.css";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ThemeToggle from "../themeToggle/ThemeToggle";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { Badge } from "@mui/material";
import { ThemeContext } from "@/context/ThemeContext";
import { useSelector } from "react-redux";
import { Products } from "@/data";

import { notFound } from "next/navigation";

const getData = () => {
  const data = Products;

  if (data) {
    return data;
  }

  return notFound();
};

const links = [
  {
    id: 1,
    title: "Accueil",
    url: "/",
  },
  {
    id: 2,
    title: "Boutique",
    url: "/boutique",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
];

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const [showLinks, setShowLinks] = useState(false);
  const products = useSelector((state) => state.cart.products);
  const [search, setSearch] = useState(false);
  const [query, setQuery] = useState("");
  const data = getData();

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const handleSearch = (e) => {
    setSearch(true);
    setQuery(e.target.value.toLowerCase());
  };

  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "#0D1520" }
          : { backgroundColor: "#FBFDFF" }
      }
    >
      <Link href="/" className={styles.logo}>
        <span>NecStore</span>
      </Link>
      <div className={styles.content}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Rechercher un produit ..."
            className={styles.input}
            onChange={handleSearch}
            style={
              theme === "dark"
                ? { backgroundColor: "#0D1520" }
                : { backgroundColor: "#FBFDFF" }
            }
          />
        </div>
        {search && (
          <div
            className={styles.articleBox}
            onClick={() => {
              setSearch(false);
            }}
          >
            {data
              .filter((asd) => asd.title.toLowerCase().includes(query))
              .map((item) => (
                <div
                  className={styles.listItem}
                  key={item.id}
                  style={
                    theme === "dark"
                      ? { backgroundColor: "#0D1520" }
                      : { backgroundColor: "#FBFDFF" }
                  }
                >
                  <Link href={`/produit/${item.slug}`}>{item.title}</Link>
                </div>
              ))}
          </div>
        )}
        <ThemeToggle /> 
        {showLinks ? (
          <CloseIcon
            onClick={handleShowLinks}
            className={showLinks ? styles.closeIcon : styles.hiddenCloseIcon}
          />
        ) : (
          <Image
            src="/burger.svg"
            alt="menu"
            width={30}
            height={30}
            className={showLinks ? styles.hiddenBurger : styles.burger}
            onClick={handleShowLinks}
            style={
              theme === "dark"
                ? { filter: "invert(1)" }
                : { filter: "invert(0)" }
            }
          />
        )}
        <div
          className={showLinks ? styles.linksContainer : styles.links}
          style={
            theme === "dark"
              ? { backgroundColor: "#0D1520" }
              : { backgroundColor: "#FBFDFF" }
          }
        >
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.url}
              className={showLinks ? styles.link : styles.hiddenLink}
              onClick={
                showLinks
                  ? () => {
                      setShowLinks(false);
                    }
                  : null
              }
            >
              {link.title}
            </Link>
          ))}
        </div>
        <Link href="/connexion">
          <PersonIcon />
        </Link>
        <Link href="/panier">
          <Badge
            badgeContent={products.reduce((acc, product) => {
              return acc + product.quantity;
            }, 0)}
            color="primary"
          >
            <ShoppingCartIcon />
          </Badge>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
