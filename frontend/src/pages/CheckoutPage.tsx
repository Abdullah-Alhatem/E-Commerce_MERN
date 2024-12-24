import { useCart } from "../context/Cart/CartContext";
import { Box, Container, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRef } from "react";
import { BASE_URL } from "../constants/baseUrl";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/Auth/AuthContext";

const CheckoutPage = () => {
  const { cartItems, totalAmount } = useCart();
  const { token } = useAuth();

  const addressRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handleConfirmOrder = async () => {
    const address = addressRef.current?.value;

    if (!address) return;

    const response = await fetch(`${BASE_URL}/cart/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        address,
      }),
    });

    if (!response.ok) return;

    navigate("/order-success");
  };

  const renderCartItems = () => (
    <div className="flex gap-3 flex-col border border-gray-200 border-solid p-4 rounded-3xl">
      {cartItems.map(item => (
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width="100%"
        >
          <Box
            display="flex"
            flexDirection="row"
            alignItems="center"
            gap={1}
            width="100%"
          >
            <img src={item.image} width={50} />
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Typography variant="h6">{item.title}</Typography>
              <Typography>
                {item.quantity} x {item.unitPrice} EGP
              </Typography>
            </Box>
          </Box>
        </Box>
      ))}
      <Box>
        <Typography variant="body1" sx={{ textAlign: "right" }}>
          Total Amount: {totalAmount.toFixed(2)} EGP
        </Typography>
      </Box>
    </div>
  );

  return (
    <>
      <Container
        fixed
        sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}
      >
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          sx={{ mb: 2 }}
        >
          <Typography variant="h4">Checkout</Typography>
        </Box>
        <TextField
          inputRef={addressRef}
          label="Delivery Address"
          name="address"
          fullWidth
        />
        {renderCartItems()}
        <Button variant="contained" fullWidth onClick={handleConfirmOrder}>
          Pay Now
        </Button>
      </Container>
    </>
  );
};

export default CheckoutPage;
