import type { APIContext } from "astro";

export async function GET({params, request}: APIContext) {

  const testing123 = import.meta.env.TEST

  const testparam = new URL(request.url).searchParams.get("test")

  const response = new Response(`Hello, from ${request.url} I'm now an Edge Function! also ${testing123} and ${import.meta.env.BASE_HOST} and ${testparam}`);
  response.headers.append('Access-Control-Allow-Origin', '*');
  return response;
}