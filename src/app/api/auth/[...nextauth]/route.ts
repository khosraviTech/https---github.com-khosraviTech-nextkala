import { handlers } from "@/auth"

export const { GET, POST } = handlers
// ↑ This creates automatic API routes
// POST /api/auth/callback/credentials → handles login
// GET  /api/auth/session              → returns current user
// POST /api/auth/signout              → handles logout