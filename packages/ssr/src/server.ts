import { serve } from "bun";
import { render } from "my-jsx";
import { App } from "./index";

serve({
  port: 3002,
  async fetch(req) {
    const body = await render(await App());
    return new Response(
      `
     <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Bun Server</title>
      </head>
      <body>
        ${body}
      </body>
      </html>

      `,
      {
        headers: { "Content-Type": "text/html" },
      }
    );
  },
});
