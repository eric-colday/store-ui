"use client";

import Button from "@/components/Button/Button";
import { ThemeContext } from "@/context/ThemeContext";
import { Products } from "@/data";
import { addToCart } from "@/redux/cartReducer";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./produit.module.css";

const getData = (slug) => {
  const data = Products.find((item) => item.slug === slug);

  if (data) {
    return data;
  }

  return notFound();
};

const Produit = ({ params }) => {
  const { slug } = params;
  const data = getData(slug);

  const { theme } = useContext(ThemeContext);
  const [image, setImage] = useState(data.image[0]);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const changeImage = (e) => {
    setImage(e.target.src);
  };

  return (
    <div className={styles.item}>
      <div className={styles.itemImgContainer}>
        <img src={image} alt="" className={styles.itemImg} />
        <div className={styles.itemImgContainerSmall}>
          <img
            src={data.image[0]}
            alt=""
            className={styles.itemImgSmall}
            onMouseOver={changeImage}
          />
          <img
            src={data.image[1]}
            alt=""
            className={styles.itemImgSmall}
            onMouseOver={changeImage}
          />
          <img
            src={data.image[2]}
            alt=""
            className={styles.itemImgSmall}
            onMouseOver={changeImage}
          />
        </div>
      </div>
      <div className={styles.itemInfo}>
        <h2 className={styles.itemTitle}>{data.name}</h2>
        <p className={styles.itemPrice}> {data.price} €</p>
        <p className={styles.itemDesc}>{data.description}</p>
        <div className={styles.itemFilter}>
          <p className={styles.itemFilterTitle}>Couleur</p>
          <div className={styles.itemWrap}>
            {data.color?.map((c) => (
              <div
                className={styles.itemColor}
                style={{
                  backgroundColor: c,
                  cursor: "pointer",
                  border:
                    color === c ? "5px solid #C2E5FF" : "1px solid #C2E5FF",
                }}
                key={c}
                onClick={() => setColor(c)}
              >
                {/* {color === c && (
                  <img
                    src="https://img.icons8.com/ios/50/000000/checkmark.png"
                    alt=""
                    className={styles.itemCheckmark} 
                  />
                )} */}
              </div>
            ))}
          </div>
          <div className={styles.itemSize}>
            <h4 className={styles.itemFilterTitle}>Size</h4>
            <Box
              sx={{
                minWidth: 120,
                border: "1px solid white",
                borderRadius: "5px",
              }}
              style={
                theme === "dark"
                  ? {
                      color: "white",
                    }
                  : {
                      color: "black",
                    }
              }
            >
              <FormControl
                fullWidth
                style={
                  theme === "dark"
                    ? {
                        color: "white",
                      }
                    : {
                        color: "black",
                      }
                }
              >
                <InputLabel
                  id="demo-simple-select-label"
                  style={
                    theme === "dark"
                      ? {
                          color: "white",
                        }
                      : {
                          color: "black",
                        }
                  }
                >
                  Taille
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  name="size"
                  value={size}
                  id="size"
                  label="Taille"
                  onChange={(e) => setSize(e.target.value)}
                  style={
                    theme === "dark"
                      ? {
                          color: "white",
                        }
                      : {
                          color: "black",
                        }
                  }
                >
                  {data.size?.map((s) => (
                    <MenuItem value={s} key={s}>
                      {s}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
        <div className={styles.ButtonFlex}>
          <button
            className={styles.itemButton}
            onClick={() =>
              dispatch(
                addToCart({
                  id: data.id,
                  title: data.title,
                  price: data.price,
                  image: data.image[0],
                  color,
                  size,
                  quantity,
                })
              )
            }
            disabled={!color || !size}
          >
            {data.inStock > 0 ? "Ajouter au panier" : "Rupture de stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Produit;
