import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
} from "@mui/material";

import SearchBar from "./SearchBar";
import SentimentFilter from "./SentimentFilter";
import { getInteractions } from "../services/api";

function InteractionList() {
  const [interactions, setInteractions] = useState([]);
  const [search, setSearch] = useState("");
  const [sentiment, setSentiment] = useState("");

  useEffect(() => {
    loadInteractions();
  }, []);

  const loadInteractions = async () => {
    try {
      const data = await getInteractions();
      setInteractions(data);
    } catch (err) {
      console.log(err);
    }
  };

  const filtered = interactions.filter((item) => {
    const matchName = item.hcp_name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchSentiment =
      sentiment === "" || item.sentiment === sentiment;

    return matchName && matchSentiment;
  });

  return (
    <Card elevation={3}>
      <CardContent>

        <Typography variant="h5" fontWeight="bold" mb={3}>
          Interaction History
        </Typography>

        <SearchBar
          search={search}
          setSearch={setSearch}
        />

        <SentimentFilter
          sentiment={sentiment}
          setSentiment={setSentiment}
        />

        {filtered.map((item) => (
          <Box key={item.id} mb={3}>

            <Typography fontWeight="bold">
              {item.hcp_name}
            </Typography>

            <Typography>
              {item.interaction_type}
            </Typography>

            <Typography>
              {item.sentiment}
            </Typography>

            <Typography>
              {item.topics}
            </Typography>

            <Typography>
              {item.follow_up}
            </Typography>

            <Divider sx={{ mt: 2 }} />

          </Box>
        ))}

      </CardContent>
    </Card>
  );
}

export default InteractionList;