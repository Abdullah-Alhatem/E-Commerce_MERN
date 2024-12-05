import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useAuth } from "../context/Auth/AuthContext";

const CartPage = () => {
  const { token } = useAuth();
  const [cart, setCart] = useState();
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) {
      return;
    }
    const fetchCart = async () => {
      const response = await fetch(`${BASE_URL}/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) {
        setError("Failed to fetch user cart. please try again");
      }
      const data = await response.json();
      setCart(data);
    };

    fetchCart();
  }, [token]);
  console.log({ cart });
  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2, ml: 4, mr: 4 }}>
        <Typography variant="h4">my cart</Typography>
      </Grid>
    </>
  );
};

export default CartPage;
