
import { RightTrending } from "@/components/layout/right-trending";
import { getTrendingToday } from "@/lib/trending";
import { FeedSort, Tag } from "@/lib/types";
import Image from "next/image";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ sort?: string; tag?: string }>;
}) {
  const sp = await searchParams;
  const sortRaw = sp.sort;
  const sort: FeedSort =
    sortRaw === "new" || sortRaw === "top" ? sortRaw : "hot";

  const tagFilter = sp.tag?.toLowerCase();

  


  const trending = getTrendingToday();

  
  return (
    <div className="flex gap-8">
      <div className="min-w-0 flex-1">
       
        <div className="space-y-4">
          { (
            <p className="rounded-xl border border-border bg-card p-8 text-center text-sm text-muted-foreground">
              No posts match this filter.
            </p>
          )}
        </div>
      </div>
      <aside className="hidden w-72 shrink-0 space-y-6 lg:block">
        <RightTrending items={trending} />
        {/* <RightTopTags /> */}
      </aside>
    </div>
  );
}