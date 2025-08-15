"use client";

import { useEffect, useState } from "react";

type Note = {
  id: number;
  title: string;
};

export default function Notes() {
  const [data, setData] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_APP_URL}/notes`)
      .then((res) => res.json())
      .then((data) => setData(data?.data || []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Loading...</div>;

  return <ul>{data?.map((el) => <li key={el.id}>{el.title}</li>) || []}</ul>;
}
