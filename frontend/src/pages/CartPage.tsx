import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";
import { useCart } from "../context/Cart/CartContext";
import { Box } from "@mui/material";

const CartPage = () => {
  const { token } = useAuth();
  const { cartItems, totalAmount } = useCart();
  const [error, setError] = useState("");

  // useEffect(() => {
  //   if (!token) {
  //     return;
  //   }
  //   const fetchCart = async () => {
  //     const response = await fetch(`${BASE_URL}/cart`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     if (!response.ok) {
  //       setError("Failed to fetch user cart. please try again");
  //     }
  //     const data = await response.json();
  //     setCart(data);
  //   };

  //   fetchCart();
  // }, [token]);
  
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2, ml: 4, mr: 4 }}>
        <Typography variant="h4">my cart</Typography>
        {cartItems.map(item => (
          <Box>{item.title}</Box>
        ))}
      </Grid>
    </>
  );
};

export default CartPage;
