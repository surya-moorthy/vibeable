"use client"

import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query";

export const Client = () => {
    const tprc = useTRPC();
    const {data} = useSuspenseQuery(tprc.createAI.queryOptions({text : "HEllo Prefetching"}))

    return(
        <div>
             {JSON.stringify(data)}
        </div>
    )
}