import { useCart } from "../context/Cart/CartContext";
import { Box, Container, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const CartPage = () => {
  const { cartItems, totalAmount, updateItemInCart } = useCart();

  const handelQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      return;
    }
    updateItemInCart(productId, quantity);
  };

  return (
    <>
      <Container fixed sx={{ mt: 2 }}>
        <div className="flex gap-5 flex-col">
          <Typography variant="h4">my cart</Typography>
          {cartItems.map(item => (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
              sx={{
                border: "1px solid #f2f2f2",
                borderRadius: 4,
                marginBottom: 4,
                paddingTop: 1,
                paddingBottom: 1,
                paddingLeft: 3,
                paddingRight: 3,
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                gap={1}
              >
                <img src={item.image} width={100} />
                <Box>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography>
                    {item.quantity} x {item.unitPrice} EGP
                  </Typography>
                  <Button>Remove item</Button>
                </Box>
              </Box>
              <ButtonGroup variant="contained" aria-label="Basic button group">
                <Button
                  onClick={() =>
                    handelQuantity(item.productId, item.quantity - 1)
                  }
                >
                  -
                </Button>
                <Button
                  onClick={() =>
                    handelQuantity(item.productId, item.quantity + 1)
                  }
                >
                  +
                </Button>
              </ButtonGroup>
            </Box>
          ))}
          <Box>
            <Typography variant="h4">
              {" "}
              Total Amount: {totalAmount.toFixed(2)} EGP
            </Typography>
          </Box>
        </div>
      </Container>
    </>
  );
};

export default CartPage;
