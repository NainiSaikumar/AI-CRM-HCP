
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

function ExportButton({ interactions }) {
  const exportPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("AI CRM HCP Report", 14, 20);

    autoTable(doc, {
      startY: 30,
      head: [[
        "HCP",
        "Type",
        "Sentiment",
        "Topics",
        "Follow Up"
      ]],
      body: interactions.map((item) => [
        item.hcp_name,
        item.interaction_type,
        item.sentiment,
        item.topics,
        item.follow_up,
      ]),
    });

    doc.save("AI_CRM_Report.pdf");
  };

  return (
    <Button
      variant="contained"
      color="secondary"
      startIcon={<DownloadIcon />}
      onClick={exportPDF}
      sx={{ mb: 3 }}
    >
      Export PDF
    </Button>
  );
}

export default ExportButton;