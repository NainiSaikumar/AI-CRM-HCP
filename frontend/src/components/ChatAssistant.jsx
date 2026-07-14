import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Stack,
  Box,
  CircularProgress,
} from "@mui/material";

import { useState } from "react";
import { generateSummary } from "../services/api";

function ChatAssistant() {
  const [text, setText] = useState("");
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!text.trim()) {
      alert("Please enter interaction details");
      return;
    }

    try {
      setLoading(true);

      const response = await generateSummary(text);

      setSummary(response.summary);
    } catch (error) {
      console.error(error);
      alert("AI generation failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card elevation={3}>
      <CardContent>

        <Typography
          variant="h5"
          fontWeight="bold"
          mb={3}
        >
          AI Assistant
        </Typography>

        <Stack spacing={2}>

          <TextField
            label="Interaction Notes"
            multiline
            rows={8}
            value={text}
            onChange={(e) => setText(e.target.value)}
            fullWidth
          />

          <Button
            variant="contained"
            color="success"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                size={24}
                color="inherit"
              />
            ) : (
              "Generate AI Summary"
            )}
          </Button>

          <Box
            sx={{
              minHeight: 260,
              p: 2,
              border: "1px solid #ddd",
              borderRadius: 2,
              bgcolor: "#fafafa",
              overflow: "auto",
            }}
          >
            <Typography
              whiteSpace="pre-wrap"
              fontSize={15}
            >
              {summary || "AI response will appear here..."}
            </Typography>
          </Box>

        </Stack>

      </CardContent>
    </Card>
  );
}

export default ChatAssistant;