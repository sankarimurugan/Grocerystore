import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteList } from "../../DataStore/Redux/slice/objectGetSlice";

const Header = () => {
  const navigate = useNavigate();
  const object = useSelector((state) => state?.object);
  const dispatch = useDispatch();

  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const [cartList, setCartList] = useState(false);
  const [profileIcon, setProfileIcon] = useState(false);
  const searchToggle = () => {
    setSearch(!search);
    setCartList(false);
    setProfileIcon(false);
    setMenu(false);
  };
  const menuToggle = () => {
    setMenu(!menu);
    setSearch(false);
    setCartList(false);
    setProfileIcon(false);
  };

  const cartTogggle = () => {
    setCartList(!cartList);
    setSearch(false);
    setProfileIcon(false);
    setMenu(false);
  };
  const profileTogglt = () => {
    setProfileIcon(!profileIcon);
    setSearch(false);
    setCartList(false);
    setMenu(false);
  };
  console.log("length", object?.length);

  const handleDeleteItem = (id) => {
    dispatch(deleteList([id]));
  };
  return (
    <div>
      <header className="header">
        <a className="logo cp">
          <i className="fas fa-shopping-basket"></i> sagi
        </a>
        <nav className={`${menu ? "active" : "navbar"} navbar `}>
          <a className="cp" onClick={() => navigate("/home")}>
            Home
          </a>
          <a className="cp" onClick={() => navigate("/shop")}>
            Shop
          </a>
          <a className="cp" onClick={() => navigate("/about")}>
            About
          </a>
          <a className="cp" onClick={() => navigate("/review")}>
            Review
          </a>
          <a className="cp" onClick={() => navigate("/blog")}>
            Blog
          </a>
          <a className="cp" onClick={() => navigate("/contact")}>
            Contact
          </a>
        </nav>
        <div className="icons">
          <div
            id="menu-btn"
            className="fas fa-bars"
            onClick={() => menuToggle()}
          />
          <div
            id="search-btn"
            className="fas fa-search "
            onClick={() => searchToggle()}
          />
          <div
            style={{ position: "relative" }}
            id="cart-btn"
            className="fas fa-shopping-cart"
            onClick={() => cartTogggle()}
          >
            {object?.length > 0 && (
              <div
                style={{
                  position: "absolute",
                  top: -10,
                  zIndex: 100,
                  background: "#ff3c00",
                  left: 0,
                  borderRadius: "100px",
                  height: "25px",
                  width: "25px",
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              >
                <h4 style={{ color: "#fff", fontSize: "14px" }}>
                  {object?.length}
                </h4>
              </div>
            )}
          </div>
          <div
            id="login-btn"
            className="fas fa-user"
            onClick={() => profileTogglt()}
          />
        </div>
        <form
          action=""
          className={`${search ? "active" : "search-form"} search-form`}
        >
          <input type="search" placeholder="search here..." id="search-box" />
          <label for="search-box" className="fas fa-search"></label>
        </form>
        <div
          className={`${cartList ? "active" : "shopping-cart"} shopping-cart `}
          style={{
            overflow: "scroll",
            height: "500px",
            scrollBehavior: "smooth",
          }}
        >
          {object?.map((item) => {
            return (
              <div className="box">
                <i
                  className="fas fa-times"
                  onClick={() => handleDeleteItem(item?.id)}
                ></i>
                <img src={item?.img} alt="" />
                <div className="content">
                  <h3>{item?.name}</h3>
                  <span className="quantity">1</span>
                  <span className="multiply">x</span>
                  <span className="price">{item?.amount}</span>
                </div>
              </div>
            );
          })}

          {object?.length > 0 && (
            <h3 className="total">
              {" "}
              total : <span>56.97</span>{" "}
            </h3>
          )}
          {object?.length > 0 && (
            <a href="#" className="btn">
              checkout cart
            </a>
          )}
          {object?.length == 0 && (
            <div
              style={{
                height: "100%",
                width: "100%",
                flexDirection: "column",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                style={{ width: "400px", height: "400px" }}
                alt="Empty cart"
                src="https://assets.materialup.com/uploads/66fb8bdf-29db-40a2-996b-60f3192ea7f0/preview.png"
              />
            </div>
          )}
        </div>
        <form
          action=""
          class={`${profileIcon ? "active" : "login-form"} login-form`}
        >
          <h3>login form</h3>
          <input type="email" placeholder="enter your email" class="box" />
          <input
            type="password"
            placeholder="enter your password"
            class="box"
          />
          <div class="remember">
            <input type="checkbox" name="" id="remember-me" />
            <label for="remember-me">remember me</label>
          </div>
          <input type="submit" value="login now" class="btn" />
          <p>
            forget password? <a href="#">click here</a>
          </p>
          <p>
            don't have an account? <a href="#">create one</a>
          </p>
        </form>
      </header>
    </div>
  );
};

export default Header;
