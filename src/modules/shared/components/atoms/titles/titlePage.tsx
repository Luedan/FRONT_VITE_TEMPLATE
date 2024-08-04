import { ReactNode } from "react";
import { BoxUI } from "../box/box";
import { TypographyUI } from "../typography/typography";

type TitlePageProps = {
  title: string;
  children?: ReactNode;
};

export function TitlePage({ title, children }: TitlePageProps) {
  return (
    <BoxUI sx={{ display: "flex", justifyContent: "space-between" }}>
      <TypographyUI variant="h6" fontWeight={500}>
        {title}
      </TypographyUI>
      <BoxUI
        sx={{
          display: "flex",
          alignItems: "center",
          width: "50%",
          justifyContent: "flex-end",
        }}
      >
        {children}
      </BoxUI>
    </BoxUI>
  );
}
