import bcrypt from "bcryptjs";

// Node-only (bcryptjs). Import this from the login route handler only —
// never from middleware.ts, which runs on the Edge runtime.
export async function verifyCredentials(
  email: string,
  password: string,
): Promise<boolean> {
  const adminEmail = process.env.ADMIN_EMAIL;
  const adminPasswordHash = process.env.ADMIN_PASSWORD_HASH;
  if (!adminEmail || !adminPasswordHash) return false;
  if (email.trim().toLowerCase() !== adminEmail.trim().toLowerCase()) {
    return false;
  }
  return bcrypt.compare(password, adminPasswordHash);
}
