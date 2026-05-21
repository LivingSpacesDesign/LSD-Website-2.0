'use server';

import { put, list } from '@vercel/blob';
import { Resend } from 'resend';

interface Subscriber {
  name: string;
  email: string;
  interest: string | null;
  date: string;
}

export async function subscribeNewsletter(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const interest = formData.get('interest') as string | null;

  if (!email) return { error: 'Email lipsă' };

  const subscriber: Subscriber = {
    name: name || '',
    email,
    interest,
    date: new Date().toISOString(),
  };

  // Load existing subscribers
  let subscribers: Subscriber[] = [];
  try {
    const { blobs } = await list({ prefix: 'newsletter/' });
    const existing = blobs.find(b => b.pathname === 'newsletter/subscribers.json');
    if (existing) {
      const res = await fetch(existing.url);
      subscribers = await res.json();
    }
  } catch {
    // First time, empty list
  }

  // Check duplicate
  if (subscribers.some(s => s.email === email)) {
    return { success: true }; // Silent success, already subscribed
  }

  subscribers.push(subscriber);

  // Save back
  await put('newsletter/subscribers.json', JSON.stringify(subscribers, null, 2), {
    access: 'public',
    addRandomSuffix: false,
    contentType: 'application/json',
  });

  // Notify via email
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'LSD Newsletter <noreply@resend.dev>',
      to: process.env.NOTIFY_EMAIL || 'silviu@asap.ro',
      subject: `Nou subscriber LSD: ${email}`,
      html: `
        <h2>Subscriber nou pe LSD website</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nume:</strong> ${name || '—'}</p>
        <p><strong>Interes:</strong> ${interest || '—'}</p>
        <p><strong>Data:</strong> ${new Date().toLocaleString('ro-RO')}</p>
        <p style="color:#888">Total subscriberi: ${subscribers.length}</p>
      `,
    }).catch(() => {
      // Don't fail the subscription if notification fails
    });
  }

  return { success: true };
}
