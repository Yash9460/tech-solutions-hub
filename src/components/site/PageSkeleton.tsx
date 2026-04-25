import { Skeleton } from "@/components/ui/skeleton";
import { Layout } from "@/components/site/Layout";

export function PageSkeleton() {
  return (
    <Layout>
      <section className="relative pt-20 pb-12">
        <div className="absolute inset-0 grid-pattern opacity-30 [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
        <div className="relative mx-auto max-w-5xl px-6">
          <div className="flex flex-col items-center text-center space-y-5">
            <Skeleton className="h-7 w-48 rounded-full bg-secondary/60" />
            <Skeleton className="h-12 sm:h-16 w-full max-w-2xl bg-secondary/60" />
            <Skeleton className="h-12 sm:h-16 w-3/4 max-w-xl bg-secondary/60" />
            <div className="w-full max-w-xl space-y-3 pt-2">
              <Skeleton className="h-4 w-full bg-secondary/40" />
              <Skeleton className="h-4 w-5/6 mx-auto bg-secondary/40" />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-24">
        <div className="mx-auto max-w-6xl px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="rounded-3xl glass-card p-6 space-y-4">
              <Skeleton className="h-12 w-12 rounded-xl bg-secondary/60" />
              <Skeleton className="h-5 w-2/3 bg-secondary/60" />
              <div className="space-y-2">
                <Skeleton className="h-3 w-full bg-secondary/40" />
                <Skeleton className="h-3 w-5/6 bg-secondary/40" />
                <Skeleton className="h-3 w-4/6 bg-secondary/40" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
