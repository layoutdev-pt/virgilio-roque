import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Vercel environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, subject, source, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Faltam campos obrigatórios (nome, email, mensagem).' });
    }

    const data = await resend.emails.send({
      from: 'Virgílio Roque Contactos <geral@virgilioroque.co>',
      to: 'geral@virgilioroque.co',
      replyTo: email,
      subject: `[Site - Contacto] ${subject || 'Sem Assunto'} - de ${name}`,
      html: `
        <h2>Novo contacto através do site!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Assunto:</strong> ${subject || 'Não especificado'}</p>
        <p><strong>Como nos conheceu:</strong> ${source || 'Não especificado'}</p>
        <br/>
        <h3>Mensagem:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return res.status(500).json({ error: 'Erro interno ao tentar enviar o email.' });
  }
}
