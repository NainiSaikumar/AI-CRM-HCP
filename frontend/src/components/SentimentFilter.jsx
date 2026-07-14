import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SentimentFilter({ sentiment, setSentiment }) {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <InputLabel>Sentiment</InputLabel>

      <Select
        value={sentiment}
        label="Sentiment"
        onChange={(e) => setSentiment(e.target.value)}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="Positive">Positive</MenuItem>
        <MenuItem value="Neutral">Neutral</MenuItem>
        <MenuItem value="Negative">Negative</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SentimentFilter;