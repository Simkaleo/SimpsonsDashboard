import "./App.css";
// import FullWidthGrid from "./components/Grid";
import ResponsiveDrawer from "./components/Sidebar";
import "./style.css";

function App() {
  return (
    <>
      <ResponsiveDrawer />
      <h1>Dashboard</h1>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          {/* <Heading /> */}
        </Grid>
        <Grid item xs={1}>
          <Item>New Clients</Item>
        </Grid>
        <Grid item xs={11}>
          <Item>Traffic Received</Item>
        </Grid>
        <Grid item xs={5}>
          <h2>Transactions</h2>
          <Item>Revenue Generated</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>Recent Transactions</Item>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
