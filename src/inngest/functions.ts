import { inngest } from "./client";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "test/hello.world" },
  async ({ event, step }) => {
    await step.sleep("wait-a-moment", "10s");

    await step.sleep("going-to-gym", "30s");

    await step.sleep("watching-a-movie", "60s");
    return { message: `Hello ${event.data.email}!` };
  },
);
