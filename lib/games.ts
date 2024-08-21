import gamesData from '@/data/games.json'

export async function getGames(): Promise<Game[]> {
  return (gamesData.games as Game[])
}

export async function getGame(id: string): Promise<Game | undefined> {
  return (gamesData.games.find((game) => game.id === id) as Game)
}