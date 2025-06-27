import {  getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Client } from "./client";
import { Suspense } from "react";

const Page = async () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.createAI.queryOptions({text : "HEllo Prefetching"}));

  return (
     <HydrationBoundary state={dehydrate(queryClient)}>
      <div className="">
         <Suspense fallback={<p>Loading....</p>}>
            <Client/>
         </Suspense>
       </div>
     </HydrationBoundary>
  )
}

export default Page;
