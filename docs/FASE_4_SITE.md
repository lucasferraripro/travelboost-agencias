# Fase 4 — Site do Cliente

> Duração: ~10 minutos de preenchimento + deploy automático
> Objetivo: Gerar site profissional com dashboard admin para o cliente gerenciar

---

## Visão Geral

O cliente preenche um formulário com os dados da agência e o sistema gera um site completo com:
- Identidade visual personalizada (cores + logo)
- Página de pacotes e ofertas
- Formulário de contato integrado ao WhatsApp
- Dashboard admin para editar sozinho
- Deploy automático (Vercel/GitHub Pages)

---

## Formulário de Coleta de Dados

### Dados Básicos
| Campo | Tipo | Exemplo |
|-------|------|---------|
| Nome da agência | texto | Mundo Viagens |
| Nome do responsável | texto | Maria Silva |
| Cidade / Estado | texto | Fortaleza - CE |
| WhatsApp (com DDD) | texto | (85) 99999-9999 |
| @ Instagram | texto | @mundoviagens |
| Email de contato | email | contato@mundoviagens.com.br |

### Identidade Visual
| Campo | Tipo | Exemplo |
|-------|------|---------|
| Logo (upload) | arquivo PNG/JPG | logo.png |
| Cor principal | color picker | #FF6B35 |
| Cor secundária | color picker | #004E89 |
| Slogan / tagline | texto | "Sua viagem dos sonhos começa aqui" |

### Pacotes e Ofertas
| Campo | Tipo | Descrição |
|-------|------|-----------|
| Carro-chefe | select | Destino que mais vende |
| Pacote 1 | formulário | Nome, destino, preço, descrição, foto |
| Pacote 2 | formulário | Nome, destino, preço, descrição, foto |
| Pacote 3 | formulário | Nome, destino, preço, descrição, foto |

### Configurações do Site
| Campo | Tipo | Exemplo |
|-------|------|---------|
| Subdomínio desejado | texto | mundoviagens.travelboost.io |
| Senha do dashboard | senha | (definida pelo cliente) |

---

## Estrutura do Site Gerado

```
/
├── index.html          ← Página principal
├── pacotes.html        ← Lista de pacotes
├── contato.html        ← Formulário de contato
├── admin/              ← Dashboard admin (protegido por senha)
│   ├── index.html      ← Painel principal
│   ├── pacotes.html    ← Gerenciar pacotes
│   └── ofertas.html    ← Gerenciar ofertas
└── assets/
    ├── logo.png        ← Logo do cliente
    ├── style.css       ← CSS com cores do cliente
    └── images/         ← Fotos dos destinos
```

---

## Seções da Página Principal

### 1. Header
- Logo do cliente
- Menu: Início, Pacotes, Sobre, Contato
- Botão CTA: "Fale no WhatsApp" (link direto)

### 2. Hero Section
- Headline personalizada com nome da agência
- Subheadline com slogan
- Botão CTA principal
- Imagem de destino do carro-chefe

### 3. Sobre a Agência
- Texto gerado automaticamente baseado nos dados do formulário
- Foto do responsável (opcional)
- Diferenciais da agência

### 4. Pacotes em Destaque
- Cards dos 3 pacotes cadastrados
- Preço, destino, duração
- Botão "Quero esse pacote" → WhatsApp

### 5. Depoimentos
- Área para adicionar depoimentos de clientes
- Formato: foto + nome + texto + destino visitado

### 6. CTA Final
- "Pronto para viajar?"
- Botão WhatsApp
- Formulário de contato simples

### 7. Footer
- Logo + nome da agência
- Links das redes sociais
- WhatsApp + Email
- "Site criado com TravelBoost"

---

## Dashboard Admin

### Acesso
```
URL: [subdominio].travelboost.io/admin
Login: email do cliente
Senha: definida no formulário
```

### Funcionalidades do Dashboard

#### Gerenciar Pacotes
- Adicionar novo pacote (nome, destino, preço, descrição, foto)
- Editar pacote existente
- Ativar/desativar pacote
- Definir pacote como "destaque"

#### Gerenciar Ofertas
- Criar oferta relâmpago (com prazo de validade)
- Definir desconto (% ou valor fixo)
- Publicar oferta no site automaticamente
- Histórico de ofertas anteriores

#### Gerenciar Depoimentos
- Adicionar depoimento (texto + foto + nome + destino)
- Aprovar/reprovar depoimentos
- Ordenar depoimentos

#### Configurações
- Alterar cores do site
- Atualizar logo
- Editar textos da página
- Alterar WhatsApp e redes sociais
- Alterar senha do dashboard

#### Analytics Básico
- Visitas ao site (últimos 30 dias)
- Cliques no WhatsApp
- Pacotes mais visualizados

---

## Deploy Automático

### Opção 1 — Vercel (Recomendado)
```bash
# Sistema executa automaticamente:
vercel --prod --token $VERCEL_TOKEN

# URL gerada:
# https://[nome-agencia].vercel.app
# ou domínio customizado
```

### Opção 2 — GitHub Pages
```bash
# Sistema cria repositório automaticamente:
gh repo create travelboost-[nome-agencia] --public
git push origin main

# URL gerada:
# https://[usuario].github.io/travelboost-[nome-agencia]
```

### Opção 3 — Subdomínio TravelBoost
```
# URL padrão:
# https://[nome-agencia].travelboost.io
```

---

## Template de Site Base

O sistema usa um template HTML/CSS/JS pré-construído e substitui as variáveis:

```html
<!-- Variáveis substituídas automaticamente -->
{{NOME_AGENCIA}}      → Mundo Viagens
{{RESPONSAVEL}}       → Maria Silva
{{CIDADE}}            → Fortaleza - CE
{{WHATSAPP}}          → (85) 99999-9999
{{INSTAGRAM}}         → @mundoviagens
{{COR_PRIMARIA}}      → #FF6B35
{{COR_SECUNDARIA}}    → #004E89
{{SLOGAN}}            → Sua viagem dos sonhos começa aqui
{{LOGO_URL}}          → /assets/logo.png
{{CARRO_CHEFE}}       → nordeste
{{PACOTE_1_NOME}}     → Natal Inesquecível
{{PACOTE_1_PRECO}}    → R$ 1.800/pessoa
{{PACOTE_1_DESC}}     → 5 noites com aéreo + hotel beira-mar
```

---

## Manutenção e Atualizações

### O Cliente Pode Fazer Sozinho
- Adicionar/editar pacotes
- Criar ofertas relâmpago
- Adicionar depoimentos
- Atualizar preços
- Mudar fotos

### Requer Suporte TravelBoost
- Mudança de layout/estrutura
- Integração com novos sistemas
- Domínio customizado (ex: mundoviagens.com.br)
- Funcionalidades novas

---

## Próxima Fase Após o Site

Com o site no ar, o cliente está pronto para:
1. Usar o site como destino dos anúncios pagos
2. Compartilhar o link no Instagram (bio)
3. Enviar o link pelo WhatsApp para clientes
4. Criar campanhas no Meta Ads apontando para o site
5. Acompanhar as visitas pelo dashboard
