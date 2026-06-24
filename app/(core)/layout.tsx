import { LeftSidebar } from "@/components/layout/left-sidebar";
import { Navbar } from "@/components/layout/navbar";

export default function CoreGroupLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Navbar />
            <div className="mx-auto flex max-w-[1200px] gap-6 px-4 py-6">
                <LeftSidebar showCta={true} tagsWithCounts={[]} />
                <div className="min-w-0 flex-1">
                    {children}
                </div>
            </div>
        </>
    );
}