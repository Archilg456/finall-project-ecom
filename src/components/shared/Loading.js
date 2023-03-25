import { LinearProgress } from "@mui/material";

const Loading = () => {
  return (
    <LinearProgress
      color="success"
      sx={{
        width: 500,
        display: "flex",
        margin: "auto",
        marginTop: 50,
        marginBottom: 100,
      }}
    />
  );
};

export const LoadingWrapper = ({ isLoading, children }) => {
  if (isLoading) {
    return <Loading />;
  }
  return children;
};
