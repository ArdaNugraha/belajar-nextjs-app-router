type ListNotes = {
  id: number;
  title: string;
  description: string;
  created_at: string;
  updated_at: string;
};

type Notes = {
  data: ListNotes[];
  message: string;
  status: string;
};

type DetailNotes = {
  data: ListNotes;
  message: string;
  status: string;
};

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 3;

export const dynamicParams = true;

export async function generateStaticParams() {
  const notes: Notes = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/notes`
  ).then((res) => res.json());
  return notes.data.map((note: ListNotes) => ({
    id: String(note.id),
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const notes: DetailNotes = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/note/${id}`
  ).then((res) => res.json());
  return (
    <main>
      <h1>{notes.data.title}</h1>
      <p>{notes.data.description}</p>
    </main>
  );
}
