import { serialize } from "cookie";

export async function POST(request: Request, params: { slug: string }) {
  const data: { password: string } = await request.json();
  const password = data.password;
  const cookie = serialize("kieranhurleyauth", "true", {
    httpOnly: true,
    path: "/",
  });

  if (process.env.USERPASSWORD !== password) {
    return new Response("incorrect password", {
      status: 401,
    });
  }

  return new Response("password correct", {
    status: 200,
    headers: {
      "Set-Cookie": cookie,
    },
  });
}
