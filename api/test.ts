export const config = {
    runtime: 'edge',
};

export default (request: Request) => {

  const testing123 = process.env.TEST

  const response = new Response(`Hello, from ${request.url} I'm now an Edge Function! also ${testing123}`);
  response.headers.append('Access-Control-Allow-Origin', '*');
  return response;
};