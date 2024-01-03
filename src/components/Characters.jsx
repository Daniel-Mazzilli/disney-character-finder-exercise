import "./Characters.css";

export default function Characters({ characters }) {
  return (
    <div className="characters">
      {characters.map((character) => (
        <div key={character["_id"]} className="card">
          <div className="name">{character.name}</div>
          <div className="image">
            <img src={character.imageUrl} alt={character.name} />
          </div>
        </div>
      ))}
    </div>
  );
}
