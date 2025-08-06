interface RecipeProps {
  handleDelete: (id: string) => void;
  id: string;
  name: string;
  ingredients: string[];
}
export default function Recipe({
  handleDelete,
  id,
  name,
  ingredients,
}: RecipeProps) {
  return (
    <>
      <h1>{name}</h1>
      {ingredients.map((value) => (
        <p key={value}>{value}</p>
      ))}
      <button onClick={() => handleDelete(id)}>삭제</button>
    </>
  );
}
