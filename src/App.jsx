// import React from "react";
// import "./App.css";
// import PersistentDrawerLeft from "./components/Sidebar";

// function App() {
//   return (
//     <>
//       <PersistentDrawerLeft />
//     </>
//   );
// }

// export default App;

import React from "react";
import "./App.css";
import PersistentDrawerLeft from "./components/Sidebar";
import CostTotal from "./components/CostTotal";
import PopularDrinks from "./components/TopDrinks";
import Customers from "./components/CustomerRoster";
// import BasicGrid from "./components/Grid";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#FFC0CB",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

function App() {
  return (
    <>
      ]
      <PersistentDrawerLeft />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} columns={16}>
          <Grid xs={8}>
            <Item>
              Total Monthly Sales <CostTotal />
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item>
              Top Ordered Drinks
              {/* <PopularDrinks /> */}
            </Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
