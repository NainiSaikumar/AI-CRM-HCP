// src/components/Header.jsx

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1976d2" }}>
      <Toolbar>
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant="h5" fontWeight="bold">
            AI-First CRM
          </Typography>

          <Typography variant="body2">
            Healthcare Professional Interaction Module
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;