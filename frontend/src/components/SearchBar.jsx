import { TextField } from "@mui/material";

function SearchBar({ search, setSearch }) {
  return (
    <TextField
      label="Search by HCP Name"
      variant="outlined"
      fullWidth
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{ mb: 3 }}
    />
  );
}

export default SearchBar;