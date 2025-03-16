import { useCharactersQuery } from "../../services/hooks.generated.ts"
import { Character } from "../../services/types.generated.ts"

const HomePage = () => {
  const { data, isLoading } = useCharactersQuery()

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h1>Harry potter chaacters</h1>
      <div>
        {data?.characters.map((character: Character) => (
          <div>
            {character.name}: {character.actor}
            <img src={character.image || ""} alt={character.name} />
          </div>
        ))}
      </div>
    </>
  )
}

export default HomePage
