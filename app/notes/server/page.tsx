import CreateForm from "./create";

type Note = {
  id: number;
  title: string;
  description: string;
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
    <>
      <CreateForm />
      <div className="grid grid-cols-4 gap-4">
        {(notes.data as Note[]).map((el) => (
          <div key={el.id} className="p-4 bg-white shadow-sm rounded-lg">
            <h1>{el.title}</h1>
            <p>{el.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
