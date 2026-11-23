export type ContactFields = { name: string; email: string; subject: string; message: string };

// Long mailto URLs are inconsistently supported by mail applications. Keep the
// complete text available separately instead of silently dropping user content.
export const MAILTO_URL_LIMIT = 1800;
export function prepareContact(fields: ContactFields) {
  const name = fields.name.trim();
  const email = fields.email.trim();
  const subject = fields.subject.trim();
  if (!name || !email || !subject) return null;
  const body = `Bonjour Julien,\n\n${fields.message.trim() || "Je souhaite échanger avec vous sur ce sujet."}\n\n${name}\n${email}`;
  const href = `mailto:julien@picqtures.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return { subject, body, href: href.length <= MAILTO_URL_LIMIT ? href : null };
}
