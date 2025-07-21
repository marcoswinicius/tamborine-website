import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { nome, email, cnpj, telefone, assunto, mensagem } = body;

    // Validação básica
    if (!nome || !email || !telefone || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos.' },
        { status: 400 }
      );
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Email inválido.' },
        { status: 400 }
      );
    }

    // Template do email para notificação interna
    const emailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1e293b 0%, #334155 100%);">
        <div style="background-color: white; padding: 30px; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);">
          <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #a7e97f;">
            <svg width="150" height="28" viewBox="0 0 189 36" style="margin-bottom: 10px;">
              <path d="M0 0V36H9.92078L14.2718 18.0032L9.92078 0H0Z" fill="#a7e97f"/>
              <path d="M14.2718 0V18.0032V36H19.6837L24.0347 18.0032L19.6837 0H14.2718Z" fill="#a7e97f"/>
              <path d="M24.0347 0V18.0032V36H26.7754L31.1327 18.0032L26.7754 0H24.0347Z" fill="#a7e97f"/>
              <path d="M31.1958 0H31.1327V18.0032V36H31.1958L35.5468 18.0032L31.1958 0Z" fill="#a7e97f"/>
              <path d="M50.9174 28.4469C50.5374 28.4811 50.1546 28.4305 49.796 28.2987C49.4374 28.1668 49.1117 27.9569 48.8419 27.6836C48.5721 27.4104 48.3648 27.0806 48.2346 26.7174C48.1044 26.3542 48.0545 25.9666 48.0883 25.5817V15.899H43.8762V13.4943H48.0883V8.37793H50.8858V13.4943H55.4831V15.899H50.8858V25.1276C50.8858 25.7672 51.1574 26.0422 51.7573 26.0422H54.9148V28.4469H50.9174Z" fill="#1e293b"/>
              <path d="M57.8891 24.1556C57.8891 21.105 60.2635 19.5829 63.4841 19.5829H68.2014V18.5468C68.2014 16.6602 67.0837 15.445 64.804 15.445C62.5243 15.445 61.4002 16.6282 61.015 18.3677L58.4006 17.5108C59.1205 15.0805 61.0782 13.0659 64.8355 13.0659C68.5929 13.0659 70.9421 15.1061 70.9421 18.7323V25.1597C70.9421 25.7673 71.2452 26.0743 71.782 26.0743H73.045V28.447H70.8537C69.496 28.447 68.5677 27.6539 68.5677 26.3749V26.2533H68.1446C67.6015 27.3214 66.4901 28.8755 63.421 28.8755C60.3519 28.8755 57.8891 27.1679 57.8891 24.1556ZM68.2014 22.1411V21.8085H63.6294C61.8865 21.8085 60.6803 22.5696 60.6803 24.0597C60.6803 25.5498 61.8865 26.4964 63.8378 26.4964C66.4016 26.4964 68.2014 24.8527 68.2014 22.1411Z" fill="#1e293b"/>
              <path d="M75.8741 28.4471V13.4945H78.6084V15.2916H79.0631C79.6315 14.2236 80.806 13.2195 83.0289 13.2195C85.2518 13.2195 86.6095 14.3131 87.2725 15.7457H87.7209C88.384 14.3131 89.647 13.2195 92.0845 13.2195C94.9705 13.2195 97.0733 15.1061 97.0733 18.3998V28.4471H94.2758V18.6428C94.2758 16.7242 93.1644 15.6242 91.2699 15.6242C89.2554 15.6242 87.8725 16.9992 87.8725 19.4934V28.4471H85.0749V18.6428C85.0749 16.7242 83.9635 15.6242 82.069 15.6242C80.0546 15.6242 78.6716 16.9992 78.6716 19.4934V28.4471H75.8741Z" fill="#1e293b"/>
              <path d="M104.563 26.1637H104.108V28.4469H101.374V7.13086H104.197V15.656H104.645C105.365 14.3769 106.843 13.0658 109.792 13.0658C113.581 13.0658 116.675 15.931 116.675 20.7404V21.1689C116.675 26.0102 113.549 28.8434 109.792 28.8434C106.817 28.8754 105.34 27.5643 104.563 26.1637ZM113.821 21.1049V20.8363C113.821 17.4851 111.806 15.5665 108.983 15.5665C106.161 15.5665 104.14 17.4851 104.14 20.8363V21.1049C104.14 24.4561 106.186 26.3748 108.983 26.3748C111.781 26.3748 113.821 24.4561 113.821 21.1049Z" fill="#1e293b"/>
              <path d="M119.656 21.169V20.7405C119.656 16.0206 122.813 13.0659 127.265 13.0659C131.717 13.0659 134.875 16.0206 134.875 20.7405V21.169C134.875 25.8888 131.717 28.8435 127.265 28.8435C122.813 28.8435 119.656 25.8888 119.656 21.169ZM132.077 21.105V20.8364C132.077 17.5747 130.151 15.5921 127.265 15.5921C124.379 15.5921 122.453 17.5747 122.453 20.8364V21.105C122.453 24.3027 124.411 26.3493 127.265 26.3493C130.119 26.3493 132.077 24.3347 132.077 21.105Z" fill="#1e293b"/>
              <path d="M138.6 28.4469V13.4944H141.341V15.2595H141.789C142.269 13.9804 143.356 13.4304 145.01 13.4304H146.778V15.9886H144.884C142.812 15.9886 141.398 17.1206 141.398 19.5253V28.4469H138.6Z" fill="#1e293b"/>
              <path d="M149.216 9.31823C149.21 9.05006 149.258 8.78344 149.357 8.53482C149.457 8.2862 149.605 8.06085 149.794 7.87268C149.983 7.68451 150.208 7.5375 150.455 7.44074C150.702 7.34397 150.966 7.2995 151.23 7.31006C151.494 7.29727 151.758 7.34046 152.004 7.43686C152.25 7.53326 152.474 7.68073 152.66 7.86982C152.847 8.0589 152.993 8.28543 153.088 8.53486C153.183 8.78429 153.226 9.05112 153.213 9.31823C153.227 9.58585 153.185 9.85339 153.09 10.1036C152.995 10.3538 152.85 10.5811 152.663 10.7709C152.476 10.9607 152.252 11.1087 152.005 11.2055C151.759 11.3023 151.495 11.3457 151.23 11.3328C150.965 11.3434 150.701 11.2987 150.453 11.2016C150.206 11.1044 149.981 10.9569 149.792 10.768C149.603 10.5791 149.454 10.353 149.355 10.1036C149.256 9.85424 149.209 9.58693 149.216 9.31823ZM149.847 28.447V13.4945H152.645V28.447H149.847Z" fill="#1e293b"/>
              <path d="M157.065 28.4471V13.4945H159.8V15.8416H160.254C160.854 14.5306 162.206 13.2195 165.123 13.2195C168.432 13.2195 170.927 15.5027 170.927 19.4359V28.4471H168.129V19.6469C168.129 16.8713 166.689 15.6561 164.34 15.6561C161.669 15.6561 159.863 17.4852 159.863 20.894V28.4471H157.065Z" fill="#1e293b"/>
              <path d="M174.507 21.137V20.7724C174.507 16.1421 177.545 13.0979 181.877 13.0979C186.209 13.0979 189 16.0526 189 20.619V21.7446H177.33C177.319 22.3699 177.435 22.991 177.67 23.5693C177.905 24.1477 178.255 24.6712 178.697 25.1074C179.14 25.5437 179.666 25.8835 180.243 26.1059C180.82 26.3282 181.437 26.4285 182.054 26.4004C182.964 26.464 183.87 26.2256 184.634 25.7214C185.399 25.2171 185.98 24.4744 186.291 23.6056L188.634 24.7952C187.762 26.6179 186.019 28.8755 182.022 28.8755C177.513 28.8755 174.507 25.7993 174.507 21.137ZM186.146 19.4934C185.994 17.0247 184.308 15.5665 181.845 15.5665C180.739 15.4974 179.651 15.8698 178.813 16.6038C177.974 17.3378 177.454 18.3751 177.362 19.4934H186.146Z" fill="#1e293b"/>
            </svg>
            <h1 style="color: #1e293b; margin: 10px 0 0 0; font-size: 24px; font-weight: 700;">Nova Mensagem de Contato</h1>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Formulário do Website</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #a7e97f 0%, #84cc16 100%); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <h2 style="color: #1e293b; margin: 0 0 15px 0; font-size: 18px; font-weight: 600;">📋 Informações do Contato</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1e293b; width: 120px;">👤 Nome:</td>
                <td style="padding: 8px 0; color: #1e293b;">${nome}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">📧 Email:</td>
                <td style="padding: 8px 0; color: #1e293b;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">📱 Telefone:</td>
                <td style="padding: 8px 0; color: #1e293b;">${telefone}</td>
              </tr>
              ${cnpj ? `
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">🏢 CNPJ:</td>
                <td style="padding: 8px 0; color: #1e293b;">${cnpj}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: 600; color: #1e293b;">📋 Assunto:</td>
                <td style="padding: 8px 0; color: #1e293b;">${assunto}</td>
              </tr>
            </table>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #a7e97f;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">💬 Mensagem:</h3>
            <p style="color: #334155; line-height: 1.6; margin: 0; white-space: pre-wrap; background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">${mensagem}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 2px solid #e2e8f0; text-align: center;">
            <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 15px; border-radius: 12px; margin-bottom: 15px;">
              <p style="margin: 0; font-weight: 600; font-size: 14px;">⚡ Ação Necessária</p>
              <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.9;">Responda este cliente em até 24 horas para manter nossa excelência no atendimento.</p>
            </div>
            <p style="color: #64748b; font-size: 12px; margin: 0;">
              📅 Enviado em: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
            </p>
            <p style="color: #64748b; font-size: 12px; margin: 5px 0 0 0;">
              🌐 Formulário de contato do site Tamborine
            </p>
          </div>
        </div>
      </div>
    `;

    // Enviar email de notificação interna
    const { data, error } = await resend.emails.send({
      from: 'Tamborine Website <noreply@tamborine.com.br>',
      to: ['gabriel.melao@tamborine.com.br'],
      subject: `🔔 [Site] ${assunto} - ${nome}`,
      html: emailHtml,
      replyTo: email,
    });

    if (error) {
      console.error('Erro do Resend ao enviar notificação interna:', error);
      return NextResponse.json(
        { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
        { status: 500 }
      );
    }

    // Email de confirmação para o usuário
    const confirmationEmailHtml = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #1e293b 0%, #334155 100%);">
        <div style="background-color: white; padding: 30px; border-radius: 16px; box-shadow: 0 8px 25px rgba(0,0,0,0.15);">
          <div style="text-align: center; margin-bottom: 30px; padding-bottom: 20px; border-bottom: 2px solid #a7e97f;">
            <svg width="150" height="28" viewBox="0 0 189 36" style="margin-bottom: 10px;">
              <path d="M0 0V36H9.92078L14.2718 18.0032L9.92078 0H0Z" fill="#a7e97f"/>
              <path d="M14.2718 0V18.0032V36H19.6837L24.0347 18.0032L19.6837 0H14.2718Z" fill="#a7e97f"/>
              <path d="M24.0347 0V18.0032V36H26.7754L31.1327 18.0032L26.7754 0H24.0347Z" fill="#a7e97f"/>
              <path d="M31.1958 0H31.1327V18.0032V36H31.1958L35.5468 18.0032L31.1958 0Z" fill="#a7e97f"/>
              <path d="M50.9174 28.4469C50.5374 28.4811 50.1546 28.4305 49.796 28.2987C49.4374 28.1668 49.1117 27.9569 48.8419 27.6836C48.5721 27.4104 48.3648 27.0806 48.2346 26.7174C48.1044 26.3542 48.0545 25.9666 48.0883 25.5817V15.899H43.8762V13.4943H48.0883V8.37793H50.8858V13.4943H55.4831V15.899H50.8858V25.1276C50.8858 25.7672 51.1574 26.0422 51.7573 26.0422H54.9148V28.4469H50.9174Z" fill="#1e293b"/>
              <path d="M57.8891 24.1556C57.8891 21.105 60.2635 19.5829 63.4841 19.5829H68.2014V18.5468C68.2014 16.6602 67.0837 15.445 64.804 15.445C62.5243 15.445 61.4002 16.6282 61.015 18.3677L58.4006 17.5108C59.1205 15.0805 61.0782 13.0659 64.8355 13.0659C68.5929 13.0659 70.9421 15.1061 70.9421 18.7323V25.1597C70.9421 25.7673 71.2452 26.0743 71.782 26.0743H73.045V28.447H70.8537C69.496 28.447 68.5677 27.6539 68.5677 26.3749V26.2533H68.1446C67.6015 27.3214 66.4901 28.8755 63.421 28.8755C60.3519 28.8755 57.8891 27.1679 57.8891 24.1556ZM68.2014 22.1411V21.8085H63.6294C61.8865 21.8085 60.6803 22.5696 60.6803 24.0597C60.6803 25.5498 61.8865 26.4964 63.8378 26.4964C66.4016 26.4964 68.2014 24.8527 68.2014 22.1411Z" fill="#1e293b"/>
              <path d="M75.8741 28.4471V13.4945H78.6084V15.2916H79.0631C79.6315 14.2236 80.806 13.2195 83.0289 13.2195C85.2518 13.2195 86.6095 14.3131 87.2725 15.7457H87.7209C88.384 14.3131 89.647 13.2195 92.0845 13.2195C94.9705 13.2195 97.0733 15.1061 97.0733 18.3998V28.4471H94.2758V18.6428C94.2758 16.7242 93.1644 15.6242 91.2699 15.6242C89.2554 15.6242 87.8725 16.9992 87.8725 19.4934V28.4471H85.0749V18.6428C85.0749 16.7242 83.9635 15.6242 82.069 15.6242C80.0546 15.6242 78.6716 16.9992 78.6716 19.4934V28.4471H75.8741Z" fill="#1e293b"/>
              <path d="M104.563 26.1637H104.108V28.4469H101.374V7.13086H104.197V15.656H104.645C105.365 14.3769 106.843 13.0658 109.792 13.0658C113.581 13.0658 116.675 15.931 116.675 20.7404V21.1689C116.675 26.0102 113.549 28.8434 109.792 28.8434C106.817 28.8754 105.34 27.5643 104.563 26.1637ZM113.821 21.1049V20.8363C113.821 17.4851 111.806 15.5665 108.983 15.5665C106.161 15.5665 104.14 17.4851 104.14 20.8363V21.1049C104.14 24.4561 106.186 26.3748 108.983 26.3748C111.781 26.3748 113.821 24.4561 113.821 21.1049Z" fill="#1e293b"/>
              <path d="M119.656 21.169V20.7405C119.656 16.0206 122.813 13.0659 127.265 13.0659C131.717 13.0659 134.875 16.0206 134.875 20.7405V21.169C134.875 25.8888 131.717 28.8435 127.265 28.8435C122.813 28.8435 119.656 25.8888 119.656 21.169ZM132.077 21.105V20.8364C132.077 17.5747 130.151 15.5921 127.265 15.5921C124.379 15.5921 122.453 17.5747 122.453 20.8364V21.105C122.453 24.3027 124.411 26.3493 127.265 26.3493C130.119 26.3493 132.077 24.3347 132.077 21.105Z" fill="#1e293b"/>
              <path d="M138.6 28.4469V13.4944H141.341V15.2595H141.789C142.269 13.9804 143.356 13.4304 145.01 13.4304H146.778V15.9886H144.884C142.812 15.9886 141.398 17.1206 141.398 19.5253V28.4469H138.6Z" fill="#1e293b"/>
              <path d="M149.216 9.31823C149.21 9.05006 149.258 8.78344 149.357 8.53482C149.457 8.2862 149.605 8.06085 149.794 7.87268C149.983 7.68451 150.208 7.5375 150.455 7.44074C150.702 7.34397 150.966 7.2995 151.23 7.31006C151.494 7.29727 151.758 7.34046 152.004 7.43686C152.25 7.53326 152.474 7.68073 152.66 7.86982C152.847 8.0589 152.993 8.28543 153.088 8.53486C153.183 8.78429 153.226 9.05112 153.213 9.31823C153.227 9.58585 153.185 9.85339 153.09 10.1036C152.995 10.3538 152.85 10.5811 152.663 10.7709C152.476 10.9607 152.252 11.1087 152.005 11.2055C151.759 11.3023 151.495 11.3457 151.23 11.3328C150.965 11.3434 150.701 11.2987 150.453 11.2016C150.206 11.1044 149.981 10.9569 149.792 10.768C149.603 10.5791 149.454 10.353 149.355 10.1036C149.256 9.85424 149.209 9.58693 149.216 9.31823ZM149.847 28.447V13.4945H152.645V28.447H149.847Z" fill="#1e293b"/>
              <path d="M157.065 28.4471V13.4945H159.8V15.8416H160.254C160.854 14.5306 162.206 13.2195 165.123 13.2195C168.432 13.2195 170.927 15.5027 170.927 19.4359V28.4471H168.129V19.6469C168.129 16.8713 166.689 15.6561 164.34 15.6561C161.669 15.6561 159.863 17.4852 159.863 20.894V28.4471H157.065Z" fill="#1e293b"/>
              <path d="M174.507 21.137V20.7724C174.507 16.1421 177.545 13.0979 181.877 13.0979C186.209 13.0979 189 16.0526 189 20.619V21.7446H177.33C177.319 22.3699 177.435 22.991 177.67 23.5693C177.905 24.1477 178.255 24.6712 178.697 25.1074C179.14 25.5437 179.666 25.8835 180.243 26.1059C180.82 26.3282 181.437 26.4285 182.054 26.4004C182.964 26.464 183.87 26.2256 184.634 25.7214C185.399 25.2171 185.98 24.4744 186.291 23.6056L188.634 24.7952C187.762 26.6179 186.019 28.8755 182.022 28.8755C177.513 28.8755 174.507 25.7993 174.507 21.137ZM186.146 19.4934C185.994 17.0247 184.308 15.5665 181.845 15.5665C180.739 15.4974 179.651 15.8698 178.813 16.6038C177.974 17.3378 177.454 18.3751 177.362 19.4934H186.146Z" fill="#1e293b"/>
            </svg>
            <h1 style="color: #1e293b; margin: 10px 0 0 0; font-size: 24px; font-weight: 700;">✅ Mensagem Recebida!</h1>
            <p style="color: #64748b; margin: 5px 0 0 0; font-size: 14px;">Obrigado por entrar em contato conosco</p>
          </div>
          
          <div style="background: linear-gradient(135deg, #a7e97f 0%, #84cc16 100%); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
            <div style="text-align: center;">
              <h2 style="color: #1e293b; margin: 0 0 10px 0; font-size: 18px; font-weight: 600;">🎉 Olá, ${nome}!</h2>
              <p style="color: #1e293b; margin: 0; line-height: 1.6; font-weight: 500;">
                Recebemos sua mensagem com sucesso e nossa equipe já foi notificada. 
                Você receberá uma resposta em seu email em até <strong>24 horas durante dias úteis</strong>.
              </p>
            </div>
          </div>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 12px; border-left: 4px solid #a7e97f; margin-bottom: 20px;">
            <h3 style="color: #1e293b; margin: 0 0 15px 0; font-size: 16px; font-weight: 600;">📋 Resumo da sua mensagem:</h3>
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <p style="color: #334155; margin: 0 0 8px 0;"><strong>📌 Assunto:</strong> ${assunto}</p>
              <p style="color: #334155; margin: 0 0 8px 0;"><strong>📅 Enviado em:</strong> ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
              <p style="color: #334155; margin: 0;"><strong>🆔 Protocolo:</strong> #${data?.id?.substring(0, 8) || Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
            </div>
          </div>

          <div style="background: linear-gradient(135deg, #1e293b 0%, #334155 100%); color: white; padding: 20px; border-radius: 12px; text-align: center; margin-bottom: 20px;">
            <h3 style="margin: 0 0 10px 0; font-size: 16px; font-weight: 600;">🚀 Enquanto você espera...</h3>
            <p style="margin: 0 0 15px 0; font-size: 14px; opacity: 0.9; line-height: 1.5;">
              Conheça nossas soluções em pagamentos digitais e descubra como podemos acelerar o crescimento do seu negócio.
            </p>
            <a href="https://tamborine.com.br" style="display: inline-block; background: #a7e97f; color: #1e293b; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
              🌐 Visitar Site
            </a>
          </div>
          
          <div style="text-align: center; padding-top: 20px; border-top: 2px solid #e2e8f0;">
            <p style="color: #1e293b; font-size: 16px; margin: 0 0 10px 0; font-weight: 600;">
              <strong>Tamborine</strong>
            </p>
            <p style="color: #64748b; font-size: 14px; margin: 0 0 10px 0;">
              Soluções inteligentes em pagamentos digitais
            </p>
            <div style="margin: 15px 0;">
              <a href="mailto:contato@tamborine.com.br" style="color: #a7e97f; text-decoration: none; margin: 0 10px;">📧 contato@tamborine.com.br</a>
              <a href="tel:+551130001234" style="color: #a7e97f; text-decoration: none; margin: 0 10px;">📱 (11) 3000-1234</a>
            </div>
            <p style="color: #94a3b8; font-size: 12px; margin: 10px 0 0 0;">
              © 2024 Tamborine. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    `;

    // Enviar email de confirmação para o usuário
    const confirmationResult = await resend.emails.send({
      from: 'Tamborine <noreply@tamborine.com.br>',
      to: [email],
      subject: '✅ Confirmação: Sua mensagem foi recebida - Tamborine',
      html: confirmationEmailHtml,
    });

    
    if (confirmationResult.error) {
      console.error('Erro do Resend ao enviar confirmação:', confirmationResult.error);
      // Não falhamos a requisição se apenas o email de confirmação falhar
      // pois o email principal (notificação) já foi enviado com sucesso
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Email enviado com sucesso!',
      emailId: data?.id,
      confirmationEmailId: confirmationResult.data?.id
    });

  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor. Tente novamente mais tarde.' },
      { status: 500 }
    );
  }
}
