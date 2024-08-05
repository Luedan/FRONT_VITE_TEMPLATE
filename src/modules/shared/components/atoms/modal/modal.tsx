import { Modal, ModalProps, useTheme } from "@mui/material";
import { BoxUI } from "../box/box";
import React from "react";

interface ModalUIProps extends ModalProps {
  variant?: "sm" | "md" | "lg" | "xl";
  width?: string | number;
  height?: string | number;
  bgcolor?: string;
}

const widthByVariant = {
  sm: { xs: "40%", sm: "35%", md: "30%", lg: "25%", xl: "20%" },
  md: { xs: "60%", sm: "50%", md: "45%", lg: "40%", xl: "35%" },
  lg: { xs: "80%", sm: "70%", md: "60%", lg: "55%", xl: "50%" },
  xl: { xs: "95%", sm: "85%", md: "75%", lg: "70%", xl: "65%" },
};

export const ModalUI = React.forwardRef<HTMLDivElement, ModalUIProps>(
  ({ height = "auto", ...props }, ref) => {
    const theme = useTheme();
    return (
      <Modal ref={ref} {...props}>
        <BoxUI
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: {
              ...(widthByVariant[props.variant ?? "md"] ?? {}),
            },
            height,
            backgroundColor: theme.palette.mode === "dark" ? "#333" : "#fff",
            borderRadius: "5px",
          }}
        >
          {props.children}
        </BoxUI>
      </Modal>
    );
  }
);
