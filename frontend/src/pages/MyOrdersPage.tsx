import { Box, Container, Typography } from "@mui/material";
import { useAuth } from "../context/Auth/AuthContext";
import { useEffect } from "react";

const MyOrdersPage = () => {
  const { myOrders, getMyOrders } = useAuth();

  useEffect(() => {
    getMyOrders();
  }, []);

  console.log(myOrders);

  return (
    <Container
      fixed
      sx={{
        mt: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width:"700px"
      }}
    >
      <Typography>My Orders</Typography>
      {myOrders.map(({ address, orderItems, total }) => (
        <Box
          sx={{ border: 1, borderColor: "gray", borderRadius: 2, padding: 1 }}
        >
          <Typography>The order Items are: </Typography>
          {orderItems.map(({ productTitle }: any) => (
            <Typography sx={{textAlign:"right", fontSize:"14px"}}>{productTitle}</Typography>
          ))}
          <Typography>Address: {address}</Typography>
          <Typography>Items: {orderItems.length}</Typography>
          <Typography>Total: {total}</Typography>
        </Box>
      ))}
    </Container>
  );
};

export default MyOrdersPage;
