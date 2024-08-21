
"use client"

import Link from 'next/link'
import { getGames } from '@/lib/games'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

export default async function GamesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const games = await getGames()


    return (
        <>
            <NavigationMenu>
                <NavigationMenuList>
                    {games.map((game: Game) => (
                        <NavigationMenuItem key={game.id}>
                            <Link href={`/games/${game.id}`} legacyBehavior passHref>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {game.name}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>



            <div className="flex-1 p-6 overflow-auto">
                {children}
            </div>
        </>
    )
}