/* =============================================================
   CONFIGURAÇÃO DAS 6 ATIVIDADES
   Edite SOMENTE os valores abaixo para personalizar os cartões.

   IMAGEM: coloque um arquivo chamado imagem.jpg em cada pasta:
     imagens_atividade/atividade1/imagem.jpg
     imagens_atividade/atividade2/imagem.jpg
     ... até atividade6.
   Para PNG ou WEBP, troque a extensão no campo "imagem".

   PROJETO: o endereço aberto ao clicar na imagem do cartão.
   REPOSITORIO: o endereço do GitHub (ou outro repositório).
   Cole seus links entre as aspas, mantendo https://.
   ============================================================= */
const atividades = [
  {
    titulo: 'Atividade 01',
    descricao: 'A atividade consistiu no desenvolvimento e na análise de uma página web utilizando a ferramenta Lighthouse, do Google Chrome. Durante o processo, foram avaliados aspectos como desempenho, acessibilidade, boas práticas e SEO, permitindo identificar a qualidade e possíveis melhorias no site. Ao finalizar os testes, os arquivos e relatórios do projeto foram organizados e versionados utilizando Git e publicados em um repositório no GitHub.',
    imagem: 'imagens_atividade/atividade1/imagem.jpg',
    projeto: 'https://github.com/emilyalencar08-lgtm/testedeLighthouse', 
    repositorio: 'https://github.com/emilyalencar08-lgtm/testedeLighthouse'
  },
  {
    titulo: 'Atividade 02',
    descricao: 'Nesta atividade, realizamos a configuração das ferramentas ESLint e Prettier em um projeto JavaScript. O objetivo foi identificar possíveis erros no código e padronizar sua formatação, utilizando comandos no terminal. Também realizamos testes para verificar se as ferramentas estavam funcionando corretamente e, por fim, versionamos o projeto utilizando Git e GitHub..',
    imagem: 'imagens_atividade/atividade2/imagem.jpg',
    projeto: 'https://github.com/emilyalencar08-lgtm/ESLintePrettier',
    repositorio: 'https://github.com/emilyalencar08-lgtm/ESLintePrettier' 
  },
  {
    titulo: 'Atividade 03',
    descricao: 'A atividade consistiu no desenvolvimento de uma aplicação web integrada ao Firebase, com funcionalidades de cadastro, login e armazenamento de dados no Firestore. Também foram configurados testes automatizados e um pipeline de CI/CD utilizando GitHub Actions, permitindo verificar a aplicação e automatizar o processo de build. Por fim, o projeto foi versionado e enviado ao GitHub, com execução bem-sucedida do pipeline.',
    imagem: 'imagens_atividade/atividade3/imagem.jpg',
    projeto: 'https://github.com/emilyalencar08-lgtm/atividade-ci-cd-firebase',
    repositorio: 'https://github.com/emilyalencar08-lgtm/atividade-ci-cd-firebase' 
  },
  {
    titulo: 'Atividade 04',
    descricao: 'Nesta atividade, foi trabalhado o uso da ferramenta Cypress para realizar testes automatizados End-to-End (E2E). O objetivo foi verificar o funcionamento de um sistema de cadastro de usuários, testando o preenchimento dos campos, o envio do formulário e a exibição de mensagens de sucesso ou erro. Também foi abordada a execução dos testes e a integração com pipelines de CI/CD, contribuindo para garantir a qualidade e a confiabilidade da aplicação.',
    imagem: 'imagens_atividade/atividade4/imagem.jpg',
    projeto: 'https://github.com/emilyalencar08-lgtm/atividade-cypress-e2e',
    repositorio: 'https://github.com/emilyalencar08-lgtm/atividade-cypress-e2e'
  },
  {
    titulo: 'Atividade 05',
    descricao: 'A primeira aula reúne os conceitos essenciais de autenticação, OAuth/JWT, logging, monitoramento e PWA. A segunda aula implementa logs e tratamento de erros em uma aplicação React. A terceira transforma o mesmo projeto em uma PWA simples, com manifest, service worker e verificação no navegador.',
    imagem: 'imagens_atividade/atividade5/imagem.jpg',
    projeto: 'https://github.com/emilyalencar08-lgtm/semana21front',
    repositorio: 'https://github.com/emilyalencar08-lgtm/semana21front'
  },
  {
    titulo: 'Atividade 06',
    descricao: 'A primeira aula concentra os conceitos essenciais de CI/CD, testes automatizados e performance. As duas aulas seguintes trabalham uma prática progressiva, sem exigir instalação local de Jest, Cypress, JMeter ou k6: os estudantes usam JavaScript simples no navegador, DevTools e Lighthouse, mantendo o princípio pedagógico dos materiais originais.',
    imagem: 'imagens_atividade/atividade6/imagem.jpg',
    projeto: 'https://github.com/emilyalencar08-lgtm/semana18front', 
    repositorio: 'https://github.com/emilyalencar08-lgtm/semana18front' 
  }
];

const grid = document.getElementById('activities-grid');
const escapeHtml = (texto) => String(texto ?? '').replace(/[&<>"']/g, caractere => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[caractere]));
const safeLink = (link) => {
  try {
    const url = new URL(String(link).trim());
    return ['https:', 'http:'].includes(url.protocol) ? url.href : '';
  } catch { return ''; }
};

atividades.forEach((atividade, indice) => {
  const numero = String(indice + 1).padStart(2, '0');
  const projeto = safeLink(atividade.projeto);
  const repositorio = safeLink(atividade.repositorio);
  const cartao = document.createElement('article');
  cartao.className = 'activity-card';
  const imagem = `
    <div class="activity-image">
      <img src="${escapeHtml(atividade.imagem)}" alt="Imagem ilustrativa de ${escapeHtml(atividade.titulo)}" loading="lazy">
      <span class="image-placeholder" aria-hidden="true">INSIRA A IMAGEM<br><small>imagens_atividade/atividade${indice + 1}/imagem.jpg</small></span>
      ${projeto ? '<span class="image-overlay">Abrir projeto ↗</span>' : ''}
    </div>`;
  cartao.innerHTML = `
    <span class="card-number">${numero}</span>
    ${projeto
      ? `<a class="activity-image-link" href="${escapeHtml(projeto)}" target="_blank" rel="noopener noreferrer" aria-label="Abrir projeto: ${escapeHtml(atividade.titulo)}">${imagem}</a>`
      : `<div class="activity-image-link no-project" title="Adicione o link no campo projeto de script.js">${imagem}</div>`}
    <div class="activity-info">
      <h3>${escapeHtml(atividade.titulo)}</h3>
      <p>${escapeHtml(atividade.descricao)}</p>
      <div class="activity-links">
        ${projeto ? `<a href="${escapeHtml(projeto)}" target="_blank" rel="noopener noreferrer">Ver projeto ↗</a>` : '<span>Link do projeto pendente</span>'}
        ${repositorio ? `<a href="${escapeHtml(repositorio)}" target="_blank" rel="noopener noreferrer">Repositório ↗</a>` : '<span>Repositório pendente</span>'}
      </div>
    </div>`;
  grid.appendChild(cartao);
  const img = cartao.querySelector('img');
  img.addEventListener('load', () => cartao.querySelector('.activity-image').classList.add('image-loaded'));
  img.addEventListener('error', () => cartao.querySelector('.activity-image').classList.remove('image-loaded'));
});

document.getElementById('year').textContent = new Date().getFullYear();
