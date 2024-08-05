import { useQuery } from "@tanstack/react-query";
import { getPokemon } from "../services/getPokemon";

export function useGetPokemon(pokemon: string | number) {
  const { data, isLoading } = useQuery({
    queryKey: ["pokemon", pokemon],
    queryFn: () => getPokemon(pokemon),
  });

  return { data, isLoading };
}
