import { BoxUI } from "@/modules/shared/components/atoms/box/box";
import { ButtonUI } from "@/modules/shared/components/atoms/button/button";
import { TypographyUI } from "@/modules/shared/components/atoms/typography/typography";
import { translate } from "@/modules/shared/lib/utils";
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
        <TypographyUI variant="h3">{translate("home.title")}</TypographyUI>
        <Divider />
      </BoxUI>
      <ButtonUI onClick={() => navigate("/app/pokemon")}>{translate('home.zustand')} <ArrowForward /></ButtonUI>
      <ButtonUI onClick={() => navigate("/app/todo")}>{translate('home.api')} <ArrowForward /></ButtonUI>
    </BoxUI>
  );
}
