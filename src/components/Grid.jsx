import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

// export default function BasicGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={3}>
//           <Item>Sales Obtained</Item>
//         </Grid>
//         <Grid item xs={3}>
//           <Item>New Clients</Item>
//         </Grid>
//         <Grid item xs={3}>
//           <Item>Traffic Received</Item>
//         </Grid>
//         <Grid item xs={5}>
//           <Item>Revenue Generated</Item>
//         </Grid>
//         <Grid item xs={3}>
//           <Item>Recent Transactions</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// import * as React from "react";
// import { styled } from "@mui/material/styles";
// import Box from "@mui/material/Box";
// import Paper from "@mui/material/Paper";
// import Grid from "@mui/material/Grid";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));

// export default function FullWidthGrid() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item xs={6} md={8}>
//           <Item>xs=6 md=8</Item>
//         </Grid>
//         <Grid item xs={6} md={4}>
//           <Item>xs=6 md=4</Item>
//         </Grid>
//         <Grid item xs={6} md={4}>
//           <Item>xs=6 md=4</Item>
//         </Grid>
//         <Grid item xs={6} md={8}>
//           <Item>xs=6 md=8</Item>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }
