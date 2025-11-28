// api/lead-quiz.ts
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const {
    firstname,
    lastname,
    email,
    phone,
    sector,
    teamSize,
    painPoint,
  } = req.body || {};

  console.log("🧩 2ème partie lead (quiz) :", {
    firstname,
    lastname,
    email,
    phone,
    sector,
    teamSize,
    painPoint,
  });

  // Plus tard : enrichir le lead existant, envoyer vers n8n, etc.

  return res.status(201).json({ ok: true });
}