import { CheckCircleOutline } from "@mui/icons-material";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderSuccessPage = () => {
  const navigate = useNavigate();

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
      }}
    >
      <CheckCircleOutline
        sx={{ fontSize: "80px" }}
        className=" text-green-500"
      />
      <Typography variant="h4">Thanks for your order.</Typography>
      <Typography>
        We started processing it, and we will get back to you soon
      </Typography>
      <Button sx={{ mt: 3 }} variant="contained" onClick={() => navigate("/")}>
        Go to Home
      </Button>
    </Container>
  );
};

export default OrderSuccessPage;
