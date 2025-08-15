type Note = {
  id: number;
  title: string;
  // add other fields if needed
};

async function getNotes() {
  const notes = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/notes`).then(
    (res) => res.json()
  );
  return notes;
}

export default async function Notes() {
  const notes = await getNotes();

  return (
    <ul>
      {(notes.data as Note[]).map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
}
