import { getGame } from '@/lib/games'


export default async function GamePage({ params }: { params: { GameId: string } }) {
    const game = await getGame(params.GameId)

    if (!game) {
        return <div>Game not found</div>
    }

    return <div>
        <h1 className="text-2xl font-bold mb-4">{game.name}</h1>
        <p className="mb-4">{game.description}</p>
        <h2 className="text-xl font-semibold mb-2">Tests</h2>
        <ul>
            {game.tests.map((test: Test) => (
                <li key={test.id} className="mb-2">
                    <h3 className="font-semibold">{test.title}</h3>
                    <p>{test.description}</p>
                </li>
            ))}
        </ul>
    </div>
}