import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// Vercel environment variable
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { 
      name, email, phone, location, 
      role, experience, availability, 
      contractType, link, about 
    } = req.body;

    if (!name || !email || !role || !experience || !availability || !contractType) {
      return res.status(400).json({ error: 'Faltam campos obrigatórios na candidatura.' });
    }

    const data = await resend.emails.send({
      from: 'Virgílio Roque Recrutamento <geral@virgilioroque.co>',
      to: 'geral@virgilioroque.co',
      replyTo: email,
      subject: `[Site - Recrutamento] Candidatura para ${role} - ${name}`,
      html: `
        <h2>Nova candidatura recebida do site!</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone || 'Não especificado'}</p>
        <p><strong>Localidade/Residência:</strong> ${location || 'Não especificado'}</p>
        
        <h3>Detalhes Profissionais</h3>
        <p><strong>Área de Interesse:</strong> ${role}</p>
        <p><strong>Anos de Experiência:</strong> ${experience}</p>
        <p><strong>Disponibilidade:</strong> ${availability}</p>
        <p><strong>Tipo de Contrato:</strong> ${contractType}</p>
        <p><strong>Anexos (Link):</strong> ${link || 'Sem anexo fornecido'}</p>
        
        <h3>Fale-nos de si:</h3>
        <p>${about ? about.replace(/\n/g, '<br/>') : 'Não preenchido'}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Erro ao enviar email de recrutamento:', error);
    return res.status(500).json({ error: 'Erro interno ao tentar enviar a candidatura.' });
  }
}
