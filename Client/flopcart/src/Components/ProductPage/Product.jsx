import React from "react";
import styles from "./ProductComp.module.css";
import { useParams } from "react-router-dom";
import { Filter } from "./Filter/Filter";
import { Productlist } from "./Productlist";
export const ProductComp = () => {
  const { name } = useParams();

  return (
    <div className={styles.productcomp}>
      <div className={styles.filtercomp}>
        <Filter />
      </div>
      <div className={styles.productlist}>
        <Productlist />
      </div>
    </div>
  );
};
