import { BoxUI } from "@/modules/shared/components/atoms/box/box";
import { TextFieldUI } from "@/modules/shared/components/atoms/forms";
import { PaperUI } from "@/modules/shared/components/atoms/paper/paper";
import { Search } from "@mui/icons-material";
import {
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@mui/material";
import { useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useGetPokemon } from "../hooks/useGetPokemon";

export function PokemonView() {
  const [pokemon, setPokemon] = useState<string>("");

  const { data } = useGetPokemon(pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPokemon(event.target.value);
  };

  return (
    <BoxUI
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      <PaperUI
        elevation={2}
        sx={{
          padding: 2,
          width: { sm: "70%", md: "50%", lg: "30%" },
          display: "flex",
        }}
      >
        <TextFieldUI
          label="Pokemon (Nombre o Id)"
          onChange={useDebouncedCallback(handleChange, 500)}
          InputProps={{
            endAdornment: <Search color="primary" />,
          }}
        />
      </PaperUI>

      {data ? (
        <Card
          sx={{
            width: { sm: "70%", md: "50%", lg: "30%" },
            marginTop: "10px",
          }}
          elevation={2}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={data?.sprites?.front_default}
            title={data.name}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
              id: {data.id}
            </Typography>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ textTransform: "capitalize" }}
            >
              Nombre: {data.name}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <PaperUI
          elevation={2}
          sx={{
            padding: 2,
            width: { sm: "70%", md: "50%", lg: "30%" },
            display: "flex",
            marginTop: "10px",
          }}
        >
          <Typography variant="h6" component="div">
            No se ha encontrado el Pokemon
          </Typography>
        </PaperUI>
      )}
    </BoxUI>
  );
}
