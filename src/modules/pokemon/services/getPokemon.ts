import { http } from "@/modules/shared/lib/http";
import { Pokemon } from "./types";

export async function getPokemon(pokemon: string | number) {
  if (!pokemon) return null;

  const _http = http;

  const { data } = await _http.get<Pokemon>(
    `https://pokeapi.co/api/v2/pokemon/${pokemon}`
  );

  return data;
}
