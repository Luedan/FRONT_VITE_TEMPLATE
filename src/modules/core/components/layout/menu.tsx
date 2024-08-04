import { BoxUI } from "@/modules/shared/components/atoms/box/box";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const navigate = useNavigate();

  return (
    <BoxUI sx={{ width: 250 }} role="presentation">
      <List>
        {["Todo", "Pokemon"].map((text, index) => (
          <ListItem key={text + "_" + index} disablePadding onClick={() => navigate(`/app/${text}`)}>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </BoxUI>
  );
}
