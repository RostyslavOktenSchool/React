interface CharacterProps {
  name: string;
  surname: string;
  age: number;
  info: string;
  photo: string;
  children?: React.ReactNode;
}

function CharacterComponent({
  name,
  surname,
  age,
  info,
  photo,
  children,
}: CharacterProps) {
  return (
    <div className="character">
      <img src={photo} alt={`${name} ${surname}`} width={120} />
      <h2>
        {name} {surname}
      </h2>
      <p>Age: {age}</p>
      <p>{info}</p>
      <div className="description">{children}</div>
    </div>
  );
}

export default CharacterComponent;
