import { BoxUI } from "@/modules/shared/components/atoms/box/box";
import { ButtonUI } from "@/modules/shared/components/atoms/button/button";
import { TypographyUI } from "@/modules/shared/components/atoms/typography/typography";
import { ArrowForward } from "@mui/icons-material";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function HomeView() {
  const navigate = useNavigate();
  return (
    <BoxUI
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <BoxUI>
        <TypographyUI variant="h3">Home</TypographyUI>
        <Divider />
      </BoxUI>
      <ButtonUI onClick={() => navigate("/app/pokemon")}>Pokemon (Test API) <ArrowForward /></ButtonUI>
      <ButtonUI onClick={() => navigate("/app/todo")}>Todo (Test Zustand) <ArrowForward /></ButtonUI>
    </BoxUI>
  );
}
