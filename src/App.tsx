import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
export interface GameQuery{
  platform: Platform | null;
  genre: Genre | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  
  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, // large screen > 1024
        }}
        gridTemplateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area={"nav"} px={6}>
          <NavBar></NavBar>
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} px={6}>
            <GenreList
              onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"} px={10}>
          <PlatformSelector onSelectPlatform={(platform)=>setGameQuery({...gameQuery, platform})} selectedPlatform={gameQuery.platform}/>
          <GameGrid gameQuery={gameQuery}/>
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
