import {
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addInteraction } from "../redux/interactionSlice";
import { saveInteraction } from "../services/api";

function InteractionForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    hcp_name: "",
    interaction_type: "",
    interaction_date: "",
    interaction_time: "",
    topics: "",
    materials: "",
    sentiment: "",
    follow_up: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await saveInteraction(formData);

      dispatch(addInteraction(response));

      alert("Interaction Saved Successfully!");

      setFormData({
        hcp_name: "",
        interaction_type: "",
        interaction_date: "",
        interaction_time: "",
        topics: "",
        materials: "",
        sentiment: "",
        follow_up: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to save interaction");
    }
  };

  return (
    <Card elevation={3}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" mb={3}>
          Log Interaction
        </Typography>

        <Stack spacing={2}>
          <TextField
            label="HCP Name"
            name="hcp_name"
            value={formData.hcp_name}
            onChange={handleChange}
            fullWidth
          />

          <TextField
            label="Date"
            type="date"
            name="interaction_date"
            value={formData.interaction_date}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <TextField
            label="Time"
            type="time"
            name="interaction_time"
            value={formData.interaction_time}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          <TextField
            select
            label="Interaction Type"
            name="interaction_type"
            value={formData.interaction_type}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Meeting">Meeting</MenuItem>
            <MenuItem value="Call">Call</MenuItem>
            <MenuItem value="Email">Email</MenuItem>
            <MenuItem value="Conference">Conference</MenuItem>
          </TextField>

          <TextField
            label="Topics Discussed"
            name="topics"
            value={formData.topics}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
          />

          <TextField
            label="Materials Shared"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            multiline
            rows={2}
            fullWidth
          />

          <TextField
            select
            label="Sentiment"
            name="sentiment"
            value={formData.sentiment}
            onChange={handleChange}
            fullWidth
          >
            <MenuItem value="Positive">Positive</MenuItem>
            <MenuItem value="Neutral">Neutral</MenuItem>
            <MenuItem value="Negative">Negative</MenuItem>
          </TextField>

          <TextField
            label="Follow Up"
            name="follow_up"
            value={formData.follow_up}
            onChange={handleChange}
            multiline
            rows={3}
            fullWidth
          />

          <Button
            variant="contained"
            size="large"
            onClick={handleSubmit}
          >
            Save Interaction
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
}

export default InteractionForm;