import CharacterComponent from "./CharacterComponent";
import type { Tcharacter } from "../module/TypeCharacter";

interface FamilyProps {
  simpsons: Tcharacter[];
}

function FamilyComponent({ simpsons }: FamilyProps) {
  return (
    <div className="family">
      {simpsons.map((nameKey, surnameKey) => (
        <CharacterComponent
          key={surnameKey}
          name={nameKey.name}
          surname={nameKey.surname}
          age={nameKey.age}
          info={nameKey.info}
          photo={nameKey.photo}
        >
          <p>{nameKey.name} {nameKey.surname} is part of the Simpsons family.</p>
        </CharacterComponent>
      ))}
    </div>
  );
}

export default FamilyComponent;
