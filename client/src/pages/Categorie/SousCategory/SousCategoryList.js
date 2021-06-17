/* eslint-disable array-callback-return */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getCategories } from "../../../JS/actions/category";
import Loading from "../../Spinner/Spinner";
import SousCategorie from "./SousCategorie ";

const SousCategoryList = () => {
  const { idd } = useParams();
  const loading = useSelector((state) => state.categoryReducer.loading);
  const categories = useSelector((state) => state.categoryReducer.categories);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="category-list">
          {categories

            .filter((category) => {
              if (category.parentId === idd) return category;
            })

            .map((category) => (
              <SousCategorie key={category.id} category={category} />
            ))}
        </div>
      )}
    </div>
  );
};

export default SousCategoryList;
