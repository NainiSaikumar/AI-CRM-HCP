import { Grid, Card, CardContent, Typography } from "@mui/material";

function DashboardCards({ interactions }) {
  const total = interactions.length;

  const positive = interactions.filter(
    (item) => item.sentiment === "Positive"
  ).length;

  const neutral = interactions.filter(
    (item) => item.sentiment === "Neutral"
  ).length;

  const negative = interactions.filter(
    (item) => item.sentiment === "Negative"
  ).length;

  const cards = [
    {
      title: "Total Interactions",
      value: total,
      color: "#1976d2",
    },
    {
      title: "Positive",
      value: positive,
      color: "#2e7d32",
    },
    {
      title: "Neutral",
      value: neutral,
      color: "#ed6c02",
    },
    {
      title: "Negative",
      value: negative,
      color: "#d32f2f",
    },
  ];

  return (
    <Grid container spacing={2} mb={3}>
      {cards.map((card) => (
        <Grid item xs={12} sm={6} md={3} key={card.title}>
          <Card
            sx={{
              background: card.color,
              color: "#fff",
            }}
          >
            <CardContent>
              <Typography variant="h6">
                {card.title}
              </Typography>

              <Typography
                variant="h3"
                fontWeight="bold"
              >
                {card.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default DashboardCards;