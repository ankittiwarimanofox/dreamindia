export async function POST() {
  return new Response(JSON.stringify({ message: "Use Formspree instead" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}