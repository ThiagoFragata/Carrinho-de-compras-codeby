import React from "react";
import { Link } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";

import logo from "../../assets/logo.svg";
import { Container, Cart } from "./styles";
import { useCart } from "../../hooks/useCart";

export function Header() {
  const { cart } = useCart();
  const cartSize = cart.length;

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Vite Trufas" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span data-testid="cart-size">
            {cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}
          </span>
        </div>
        <MdShoppingCart size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}
