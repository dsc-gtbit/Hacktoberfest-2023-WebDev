import { Typography, Box } from "@mui/material";
import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
    //finds the error in routing
  const error = useRouteError();
  console.log(error);

  return (
    <Box style={{ marginLeft: 250 }}>
      <Typography variant="h4">There was error loading this page</Typography>
    </Box>
  );
};

export default ErrorComponent;
