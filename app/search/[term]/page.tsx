import { getFetchUrl } from "@/app/lib/fetchUrl";
import ResultsList from "@/components/ResultsList";
import { PageResult, SearchParams } from "@/typings";
import { redirect } from "next/navigation";

export const revalidate = 300;

type Props = {
  searchParams: SearchParams;
  params: {
    term: string;
  };
};

export default async function SearchPage({
  searchParams,
  params: { term },
}: Props) {
  if (!term) {
    redirect("/");
  }
  const response = await fetch(getFetchUrl("api/search"), {
    method: "POST",
    body: JSON.stringify({ searchTerm: term, ...searchParams }),
  });
  const results = (await response.json()) as PageResult[];
  console.log(results);

  return (
    <div>
      <ResultsList results={results} term={term} />
    </div>
  );
}
