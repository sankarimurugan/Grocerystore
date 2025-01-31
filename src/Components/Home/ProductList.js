import React from "react";
import { product_list } from "../../DataStore/Dummyjson";
import { useDispatch, useSelector } from "react-redux";
import { saveObjects } from "../../DataStore/Redux/slice/objectGetSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const object = useSelector((state) => state?.object);
  console.log("object ", object);
  const saveData = (e) => {};

  // userlogin(obj)
  //       .unwrap()
  //       .then(async res => {
  //         if (res?.status === 'success') {
  //           await AsyncStorage.setItem('token', res.token);
  //           if (res.user) {
  //             await AsyncStorage.setItem('userData', JSON.stringify(res.user));
  //           }

  //           console.log('Logged in successfully')

  // let token = await AsyncStorage.getItem('token')
  return (
    <section class="products">
      <h1 class="title cp">
        {" "}
        our <span>products</span> <a>view all {">>"}</a>{" "}
      </h1>

      <div class="box-container">
        {product_list?.map((item) => {
          return (
            <div class="box">
              <div class="icons">
                <a
                  class="fas fa-shopping-cart"
                  onClick={() => dispatch(saveObjects(item))}></a>
                <a class="fas fa-heart"></a>
                <a class="fas fa-eye"></a>
              </div>
              <div class="image">
                <img src={item?.img} alt="" />
              </div>
              <div class="content">
                <h3>{item?.name}</h3>
                <div class="price">{item?.amount}</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProductList;
