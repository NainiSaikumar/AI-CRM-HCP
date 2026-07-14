import { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Header from "../components/Header";
import InteractionForm from "../components/InteractionForm";
import ChatAssistant from "../components/ChatAssistant";
import InteractionList from "../components/InteractionList";
import DashboardCards from "../components/DashboardCards";
import ExportButton from "../components/ExportButton";

import { getInteractions } from "../services/api";

function Dashboard() {
  const [interactions, setInteractions] = useState([]);

  const loadData = async () => {
    try {
      const data = await getInteractions();
      setInteractions(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <Header />

      <Box sx={{ p: 4 }}>
        <DashboardCards interactions={interactions} />

        <ExportButton interactions={interactions} />

        <Grid container spacing={3}>
          <Grid item xs={12} md={7}>
            <InteractionForm />
          </Grid>

          <Grid item xs={12} md={5}>
            <ChatAssistant />
          </Grid>

          <Grid item xs={12}>
            <InteractionList />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Dashboard;