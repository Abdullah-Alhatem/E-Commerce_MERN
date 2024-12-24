import { useCart } from "../context/Cart/CartContext";
import { Box, Container, TextField, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useRef } from "react";

const CheckoutPage = () => {
  const { cartItems, totalAmount } = useCart();

  const addressRef = useRef<HTMLInputElement>(null);

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
        <Button variant="contained" fullWidth>
          Pay Now
        </Button>
      </Container>
    </>
  );
};

export default CheckoutPage;
