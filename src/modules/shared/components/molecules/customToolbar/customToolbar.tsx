import {
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";
import { BoxUI } from "../../atoms/box/box";

export const CustomToolbarUI = () => {
  return (
    <GridToolbarContainer
      sx={{
        marginLeft: "10px",
        marginBottom: "20px",
        justifyContent: "space-between",
      }}
    >
      <BoxUI>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
      </BoxUI>
      <GridToolbarQuickFilter />
    </GridToolbarContainer>
  );
};
