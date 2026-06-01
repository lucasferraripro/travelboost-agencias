# ORGANOGRAMA COMPLETO — CANVA VIAGEM
# Departamentos & Funcionários (Skills IA)
# Atualizado: Março/2026
# Fontes: skills internas + goose-skills + agency-agents (msitarzewski)

---

## VISÃO GERAL DA EMPRESA

```
                        ┌─────────────────────┐
                        │    LUCAS HENRIQUE    │
                        │   CEO / Fundador     │
                        │ lucas_gestor_negocios│
                        └─────────┬───────────┘
                                  │
                    ┌─────────────┼─────────────┐
                    │             │             │
              ┌─────┴─────┐ ┌────┴────┐ ┌──────┴──────┐
              │    CEO     │ │   CMO   │ │ ORQUESTRADOR│
              │  canvavgm  │ │ canvavgm│ │   DIÁRIO    │
              │   _ceo     │ │  _cmo   │ │ canvavgm_   │
              │            │ │         │ │ orquestrador │
              └────────────┘ └─────────┘ └─────────────┘
```

**Total de Funcionários (Skills):** 85+
- 62 skills internas existentes
- 23+ skills externas do goose-skills (a instalar)

---

## DEPT 1 — DIRETORIA EXECUTIVA (3 funcionários)

> Decisões estratégicas, visão 360°, coordenação geral

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **CEO & Fundador** | `lucas_gestor_negocios` | Interno | ✅ Ativo |
| **Diretor Executivo** | `canvaviagem_ceo` | Interno | ✅ Ativo |
| **Diretor de Marketing** | `canvaviagem_cmo` | Interno | ✅ Ativo |

**Rotina:** Reunião semanal (segunda) + revisão mensal estratégica

---

## DEPT 2 — CENTRAL DE COMANDO (4 funcionários)

> Orquestração diária, dados em tempo real, gestão de recursos

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Orquestrador Diário** | `canvaviagem_orquestrador` | Interno | ✅ Ativo |
| **Analista Stripe** | `canvaviagem_dados_stripe` | Interno | ✅ Ativo |
| **Analista Analytics** | `canvaviagem_dados_analytics` | Interno | ✅ Ativo |
| **Gestor de Tokens** | `canvaviagem_gestao_tokens` | Interno | ✅ Ativo |

**Fluxo:**
```
canvaviagem_orquestrador (todo dia às 9h)
  → canvaviagem_dados_stripe (puxa MRR, churn, assinantes)
  → canvaviagem_dados_analytics (puxa tráfego, cliques)
  → Distribui briefing para todos os departamentos
```

---

## DEPT 3 — INTELIGÊNCIA & RELATÓRIOS (5 funcionários)

> Relatórios visuais, inteligência competitiva, monitoramento de mercado

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Analista Visual** | `canvaviagem_relatorio_visual` | Interno | ✅ Ativo |
| **Pesquisador de Mercado** | `canvaviagem_mercado` | Interno | ✅ Ativo |
| **Espião de Concorrentes** | `competitor-intel` | Goose | 🔲 Instalar |
| **Gerador de Battlecards** | `battlecard-generator` | Goose | 🔲 Instalar |
| **Scanner de Indústria** | `industry-scanner` | Goose | 🔲 Instalar |

```bash
# Instalar skills de inteligência competitiva:
npx goose-skills install competitor-intel
npx goose-skills install battlecard-generator
npx goose-skills install industry-scanner
```

---

## DEPT 4 — CONTEÚDO & CRIAÇÃO (13 funcionários)

> Produção de conteúdo orgânico: copy, design, feed, stories, blog, SEO

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Copywriter Chefe** | `canvaviagem_copywriter` | Interno | ✅ Ativo |
| **Diretor de Arte** | `canvaviagem_designer` | Interno | ✅ Ativo |
| **Editor de Feed** | `canvaviagem_feed` | Interno | ✅ Ativo |
| **Editor de Stories** | `canvaviagem_stories` | Interno | ✅ Ativo |
| **Blogueiro** | `canvaviagem_blog` | Interno | ✅ Ativo |
| **Analista de Blog** | `canvaviagem_blog_analista` | Interno | ✅ Ativo |
| **Blog Autônomo** | `canvaviagem_blog_autonomo` | Interno | ✅ Ativo |
| **Especialista SEO** | `canvaviagem_seo` | Interno | ✅ Ativo |
| **Revisor Final** | `canvaviagem_revisor` | Interno | ✅ Ativo |
| **Copy Direct Response** | `copy-direct-response` | Interno | ✅ Ativo |
| **Reaproveitador de Conteúdo** | `content-repurposer` | Goose | 🔲 Instalar |
| **Fábrica de Briefings** | `content-brief-factory` | Goose | 🔲 Instalar |
| **Criador de Carrosséis** | `create-html-carousel` | Goose | 🔲 Instalar |

```bash
npx goose-skills install content-repurposer
npx goose-skills install content-brief-factory
npx goose-skills install create-html-carousel
```

**Fluxo de Conteúdo:**
```
canvaviagem_mercado → identifica temas quentes
    ↓
canvaviagem_aquisicao_conteudo → define calendário semanal
    ↓
canvaviagem_copywriter → escreve hook + legenda + CTA
canvaviagem_designer → cria briefing visual
    ↓
canvaviagem_feed / canvaviagem_stories → monta post final
    ↓
content-repurposer (NOVO) → transforma 1 post em 5 formatos
    ↓
canvaviagem_revisor → ✅ CHECKPOINT OBRIGATÓRIO
```

---

## DEPT 5 — FÁBRICA DE VÍDEOS & REELS (8 funcionários)

> Pipeline completo: pesquisa → roteiro → código Remotion → render → legenda IA

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Diretor de Vídeo (Orquestrador)** | `video-pipeline-completo` | Interno | ✅ Ativo |
| **Pesquisador de Tendências** | `video-pesquisa-mercado` | Interno | ✅ Ativo |
| **Programador Remotion** | `video-gerar-composicao` | Interno | ✅ Ativo |
| **Renderizador** | `video-renderizar` | Interno | ✅ Ativo |
| **Narrador de Hooks** | `hero-narrative` | Interno | ✅ Ativo |
| **Humanizador de Copy** | `humanizer-main` | Interno | ✅ Ativo |
| **Caçador de Hooks Virais** | `trending-ad-hook-spotter` | Goose | 🔲 Instalar |
| **Assistente YouTube** | `youtube-watcher` | Goose | 🔲 Instalar |

```bash
npx goose-skills install trending-ad-hook-spotter
npx goose-skills install youtube-watcher
```

### Vídeos Prontos para Renderizar

| ID Remotion | Duração | Tema |
|-------------|---------|------|
| `Video1-SegredoDasGrandes` | 30s | Segredo das grandes agências |
| `Video2-EnquantoVoceTrava` | 30s | Enquanto você trava no Canva |
| `Video3-MensagemWhatsApp` | 25s | Mensagem WhatsApp inesperada |
| `Video4-AchoFofo` | 28s | Ironizando Canva amador |
| `Video5-SemEquipe` | 25s | Como postar 5 vídeos sem equipe |

**Pipeline de Produção de Reels:**
```
video-pesquisa-mercado
  └→ Pesquisa trends Instagram/TikTok + hooks virais
  └→ trending-ad-hook-spotter (NOVO) → hooks de ads que convertem
  └→ youtube-watcher (NOVO) → referências de vídeo
  └→ Gera briefing JSON
        ↓
hero-narrative → cria narrativa do hook
humanizer-main → humaniza a copy do roteiro
        ↓
video-gerar-composicao
  └→ Lê briefing + narrativa
  └→ Gera TSX Remotion (4 cenas + transições)
  └→ Atualiza Root.tsx
        ↓
video-renderizar
  └→ npx remotion render <ID> out/vN.mp4
  └→ Gera legenda com Gemini AI
  └→ Exporta thumbnail
        ↓
canvaviagem_revisor → ✅ CHECKPOINT OBRIGATÓRIO
```

**Comando rápido:**
```bash
cd "C:\Users\win 10\Desktop\canvaviagem-videos"
npx remotion render Video1-SegredoDasGrandes out/v1.mp4
```

---

## DEPT 6 — TRÁFEGO PAGO & ADS (14 funcionários)

> Meta Ads, Google Ads, campanhas ROI, compliance, segurança

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Gestor de Tráfego** | `canvaviagem_trafego` | Interno | ✅ Ativo |
| **Operador Meta Ads** | `canvaviagem_meta_ads` | Interno | ✅ Ativo |
| **Compliance Meta** | `canvaviagem_meta_ads_compliance` | Interno | ✅ Ativo |
| **Segurança de API** | `canvaviagem_meta_seguranca_api` | Interno | ✅ Ativo |
| **Diretor de Campanhas ROI** | `departamento-campanhas-roi` | Interno | ✅ Ativo |
| **Coletor de Criativos** | `agente-1-creative-assets` | Interno | ✅ Ativo |
| **Extrator de Copy** | `agente-2-copy-extractor` | Interno | ✅ Ativo |
| **Validador de LP** | `agente-3-lp-validator` | Interno | ✅ Ativo |
| **Projetor de ROI** | `agente-4-budget-roi` | Interno | ✅ Ativo |
| **Gerador de Blueprint** | `agente-5-blueprint-generator` | Interno | ✅ Ativo |
| **Preditor de Performance** | `agente-6-performance-predictor` | Interno | ✅ Ativo |
| **Construtor Google Ads** | `google-search-ads-builder` | Goose | 🔲 Instalar |
| **Construtor Meta Ads** | `meta-ads-campaign-builder` | Goose | 🔲 Instalar |
| **Minerador de Ângulos** | `ad-angle-miner` | Goose | 🔲 Instalar |

```bash
npx goose-skills install google-search-ads-builder
npx goose-skills install meta-ads-campaign-builder
npx goose-skills install ad-angle-miner
```

**Análise de Tráfego:**

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Analista de Campanhas** | `traffic-campaign-analyzer` | Interno | ✅ Ativo |
| **Recomendador de Escala** | `scaling-recommendation` | Interno | ✅ Ativo |
| **Alocador de Budget** | `ad-spend-allocator` | Goose | 🔲 Instalar |
| **Priorizador de Canais** | `paid-channel-prioritizer` | Goose | 🔲 Instalar |

```bash
npx goose-skills install ad-spend-allocator
npx goose-skills install paid-channel-prioritizer
```

---

## DEPT 7 — AQUISIÇÃO & VENDAS (8 funcionários)

> Estratégia de aquisição, funil de vendas, leads, email marketing

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Diretor de Aquisição** | `canvaviagem_aquisicao_diretor` | Interno | ✅ Ativo |
| **Planejador de Conteúdo** | `canvaviagem_aquisicao_conteudo` | Interno | ✅ Ativo |
| **Email Marketer** | `canvaviagem_aquisicao_email` | Interno | ✅ Ativo |
| **Gestor de Tráfego Pago** | `canvaviagem_aquisicao_trafego` | Interno | ✅ Ativo |
| **Oportunista de Receita** | `canvaviagem_ganancia` | Interno | ✅ Ativo |
| **Otimizador de LP** | `landing-page-dr` | Interno | ✅ Ativo |
| **Ad Copy Maccedo** | `ad-copy-maccedo` | Interno | ✅ Ativo |
| **Auditor de LP** | `ad-to-landing-page-auditor` | Goose | 🔲 Instalar |

```bash
npx goose-skills install ad-to-landing-page-auditor
```

---

## DEPT 8 — ANTI-CHURN & RETENÇÃO (6 funcionários)

> Prevenir cancelamentos, reativar inativos, recuperar ex-assinantes

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Diretor Anti-Churn** | `canvaviagem_churn_diretor` | Interno | ✅ Ativo |
| **Onboarding Specialist** | `canvaviagem_churn_onboarding` | Interno | ✅ Ativo |
| **Reativador** | `canvaviagem_churn_engajamento` | Interno | ✅ Ativo |
| **Win-back Specialist** | `canvaviagem_churn_winback` | Interno | ✅ Ativo |
| **Detector de Risco** | `churn-risk-detector` | Goose | 🔲 Instalar |
| **Sequência Win-back** | `customer-win-back-sequencer` | Goose | 🔲 Instalar |

```bash
npx goose-skills install churn-risk-detector
npx goose-skills install customer-win-back-sequencer
```

**Fluxo Anti-Churn:**
```
canvaviagem_dados_stripe → identifica cancelamentos
        ↓
canvaviagem_churn_diretor → diagnostica causa
churn-risk-detector (NOVO) → score de risco por assinante
        │
        ├── Novo (semana 1-2)? → canvaviagem_churn_onboarding
        ├── Inativo (14+ dias)? → canvaviagem_churn_engajamento
        └── Cancelou? → canvaviagem_churn_winback
                        + customer-win-back-sequencer (NOVO)
```

---

## DEPT 9 — ESCALA & CRESCIMENTO (3 funcionários)

> Metas de MRR, conversão de funil, migração para plano anual

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Diretor de Escala** | `canvaviagem_escala_diretor` | Interno | ✅ Ativo |
| **Otimizador de Funil** | `canvaviagem_escala_funil` | Interno | ✅ Ativo |
| **Conversor Anual** | `canvaviagem_escala_anual` | Interno | ✅ Ativo |

---

## DEPT 10 — PRODUTO & INOVAÇÃO (5 funcionários)

> Evolução do produto, tendências, feedback, novas funcionalidades

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Diretor de Produto** | `canvaviagem_produto_diretor` | Interno | ✅ Ativo |
| **Pesquisador YouTube** | `canvaviagem_produto_youtube` | Interno | ✅ Ativo |
| **Monitor Social** | `canvaviagem_produto_social` | Interno | ✅ Ativo |
| **Analista de Feedback** | `canvaviagem_produto_feedback` | Interno | ✅ Ativo |
| **Inovador** | `canvaviagem_produto_inovacao` | Interno | ✅ Ativo |

---

## DEPT 11 — RELACIONAMENTO & COMUNIDADE (5 funcionários)

> Atendimento, comunidade WhatsApp, Hotmart, parcerias, lançamentos

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Atendente** | `canvaviagem_atendimento` | Interno | ✅ Ativo |
| **Community Manager** | `canvaviagem_comunidade` | Interno | ✅ Ativo |
| **Gestor Hotmart** | `canvaviagem_hotmart` | Interno | ✅ Ativo |
| **Gestor de Lançamentos** | `canvaviagem_lancamento` | Interno | ✅ Ativo |
| **Closer de Parcerias** | `canvaviagem_collab` | Interno | ✅ Ativo |

---

## DEPT 12 — EMAIL & ATIVAÇÃO (4 funcionários)

> Sequências de email, ativação, campanhas, nurturing

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Diretor de Email** | `canvaviagem_email_diretor` | Interno | ✅ Ativo |
| **Especialista Ativação** | `canvaviagem_email_ativacao` | Interno | ✅ Ativo |
| **Email Outreach** | `cold-email-outreach` | Goose | 🔲 Instalar |
| **Sequência Early Access** | `early-access-email-sequence` | Goose | 🔲 Instalar |

```bash
npx goose-skills install cold-email-outreach
npx goose-skills install early-access-email-sequence
```

---

## DEPT 13 — SEO & AUTORIDADE DIGITAL (5 funcionários)

> Dominar Google, SEO programático, monitoramento de SERP

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **SEO Specialist** | `canvaviagem_seo` | Interno | ✅ Ativo |
| **Blogueiro SEO** | `canvaviagem_blog` | Interno | ✅ Ativo |
| **Mapeador de Autoridade** | `topical-authority-mapper` | Goose | 🔲 Instalar |
| **Caçador de Oportunidades** | `seo-opportunity-finder` | Goose | 🔲 Instalar |
| **Motor de Conteúdo SEO** | `seo-content-engine` | Goose | 🔲 Instalar |

```bash
npx goose-skills install topical-authority-mapper
npx goose-skills install seo-opportunity-finder
npx goose-skills install seo-content-engine
```

---

## DEPT 14 — MONITORAMENTO & SOCIAL LISTENING (4 funcionários)

> Escuta social, Reddit, Twitter, newsletters do nicho de viagens

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Monitor Social** | `canvaviagem_produto_social` | Interno | ✅ Ativo |
| **Scraper Reddit** | `reddit-scraper` | Goose | 🔲 Instalar |
| **Scraper Twitter** | `twitter-scraper` | Goose | 🔲 Instalar |
| **Monitor de Reviews** | `review-scraper` | Goose | 🔲 Instalar |

```bash
npx goose-skills install reddit-scraper
npx goose-skills install twitter-scraper
npx goose-skills install review-scraper
```

---

## DEPT 15 — SEGURANÇA & COMPLIANCE (3 funcionários)

> Proteção de contas, compliance de ads, segurança de API

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Compliance Meta Ads** | `canvaviagem_meta_ads_compliance` | Interno | ✅ Ativo |
| **Segurança API** | `canvaviagem_meta_seguranca_api` | Interno | ✅ Ativo |
| **Dev Ops** | `canvaviagem_dev` | Interno | ✅ Ativo |

---

## DEPT 16 — EVENTOS & WEBINARS (2 funcionários)

> Aulas secretas, webinars, eventos ao vivo

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Gestor de Aula Secreta** | `canvaviagem_aula_secreta_manager` | Interno | ✅ Ativo |
| **Suporte ao Vivo** | `canvaviagem_aula_secreta_suporte` | Interno | ✅ Ativo |

---

## DEPT 17 — FÁBRICA DE ARTES (4 funcionários)

> Geração de criativos publicitários integrados, divisão de tarefas por agentes de IA e garantia de visual premium 100% blindado contra erros de layout no Canvas.

| Cargo | Skill | Tipo | Status |
|-------|-------|------|--------|
| **Agente Copywriter** | `art-copywriter` | Interno | ✅ Ativo |
| **Agente Grid & Layout** | `art-grid-layout` | Interno | ✅ Ativo |
| **Agente Cores e Paletas** | `art-color-palette` | Interno | ✅ Ativo |
| **Agente Diretor de Artes** | `art-director` | Interno | ✅ Ativo |

**Rotina:** Acionado via `/dept-art-factory` para planejar e segmentar de forma autônoma a geração de imagens sob os 8 Estilos Premium Determinísticos (Estilo A ao H) baseados no input e título do usuário.

---

## RESUMO: NOVAS CONTRATAÇÕES (goose-skills para instalar)

### Script de instalação completo:

```bash
# DEPT 3 — Inteligência Competitiva
npx goose-skills install competitor-intel
npx goose-skills install battlecard-generator
npx goose-skills install industry-scanner

# DEPT 4 — Conteúdo & Criação
npx goose-skills install content-repurposer
npx goose-skills install content-brief-factory
npx goose-skills install create-html-carousel

# DEPT 5 — Vídeos & Reels
npx goose-skills install trending-ad-hook-spotter
npx goose-skills install youtube-watcher

# DEPT 6 — Tráfego Pago
npx goose-skills install google-search-ads-builder
npx goose-skills install meta-ads-campaign-builder
npx goose-skills install ad-angle-miner
npx goose-skills install ad-spend-allocator
npx goose-skills install paid-channel-prioritizer

# DEPT 7 — Aquisição
npx goose-skills install ad-to-landing-page-auditor

# DEPT 8 — Anti-Churn
npx goose-skills install churn-risk-detector
npx goose-skills install customer-win-back-sequencer

# DEPT 12 — Email
npx goose-skills install cold-email-outreach
npx goose-skills install early-access-email-sequence

# DEPT 13 — SEO
npx goose-skills install topical-authority-mapper
npx goose-skills install seo-opportunity-finder
npx goose-skills install seo-content-engine

# DEPT 14 — Monitoramento
npx goose-skills install reddit-scraper
npx goose-skills install twitter-scraper
npx goose-skills install review-scraper
```

**Total: 23 novas skills do goose-skills**

---

## QUADRO GERAL DA EMPRESA

```
╔══════════════════════════════════════════════════════════════╗
║                    CANVA VIAGEM S.A.                        ║
║              "A empresa com 89+ funcionários IA"            ║
╠══════════════════════════════════════════════════════════════╣
║                                                              ║
║  DEPT 1  Diretoria Executiva .............. 3 funcionários   ║
║  DEPT 2  Central de Comando ............... 4 funcionários   ║
║  DEPT 3  Inteligência & Relatórios ........ 5 funcionários   ║
║  DEPT 4  Conteúdo & Criação .............. 13 funcionários   ║
║  DEPT 5  Fábrica de Vídeos & Reels ........ 8 funcionários   ║
║  DEPT 6  Tráfego Pago & Ads .............. 14 funcionários   ║
║  DEPT 7  Aquisição & Vendas ............... 8 funcionários   ║
║  DEPT 8  Anti-Churn & Retenção ............ 6 funcionários   ║
║  DEPT 9  Escala & Crescimento ............. 3 funcionários   ║
║  DEPT 10 Produto & Inovação ............... 5 funcionários   ║
║  DEPT 11 Relacionamento & Comunidade ...... 5 funcionários   ║
║  DEPT 12 Email & Ativação ................. 4 funcionários   ║
║  DEPT 13 SEO & Autoridade Digital ......... 5 funcionários   ║
║  DEPT 14 Monitoramento & Social Listening . 4 funcionários   ║
║  DEPT 15 Segurança & Compliance ........... 3 funcionários   ║
║  DEPT 16 Eventos & Webinars ............... 2 funcionários   ║
║  DEPT 17 Fábrica de Artes ................. 4 funcionários   ║
║                                                              ║
║  TOTAL: 66 internos + 23 goose-skills = 89 funcionários     ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

---

## ROTINAS DA EMPRESA

### Rotina Diária (5 min)
```
09:00  canvaviagem_orquestrador → briefing do dia
09:05  canvaviagem_aquisicao_conteudo → definir post
09:10  canvaviagem_copywriter → escrever copy
09:15  canvaviagem_revisor → ✅ aprovar
```

### Segunda-feira (Planejamento Semanal)
```
1. canvaviagem_dados_stripe → números
2. canvaviagem_relatorio_visual → relatório
3. canvaviagem_escala_diretor → progresso
4. canvaviagem_churn_diretor → cancelamentos
5. canvaviagem_aquisicao_conteudo → calendário
6. video-pipeline-completo → 1 reel novo
```

### Quarta-feira (Dia de Reels)
```
1. video-pesquisa-mercado → tendências
2. trending-ad-hook-spotter → hooks virais
3. hero-narrative → narrativa do hook
4. video-gerar-composicao → código Remotion
5. video-renderizar → MP4 + legenda IA
6. canvaviagem_revisor → ✅ aprovar
```

### Sexta-feira (Análise & Otimização)
```
1. traffic-campaign-analyzer → métricas
2. scaling-recommendation → escalar/pausar
3. canvaviagem_produto_feedback → reviews
4. canvaviagem_escala_funil → otimizar LP
```

### Reunião Mensal (1° segunda do mês)
```
1. canvaviagem_relatorio_visual → relatório mensal
2. canvaviagem_produto_diretor → melhorias
3. canvaviagem_produto_inovacao → novas ideias
4. canvaviagem_ceo → decisões estratégicas
5. canvaviagem_cmo → calendário do mês
```

---

## DEPARTAMENTOS ISOLADOS (Para Teste Independente)

> Cada departamento abaixo opera **sozinho**, sem depender dos outros.
> Ideal para testar cada equipe separadamente.
> Fonte: agency-agents (msitarzewski/agency-agents) + goose-skills

### Estrutura de Arquivos

```
.agents/skills/
├── dept-design/                ← 8 agentes de design (agency-agents)
│   ├── SKILL.md               ← Orquestrador do departamento
│   ├── design-brand-guardian.md
│   ├── design-image-prompt-engineer.md
│   ├── design-visual-storyteller.md
│   ├── design-ui-designer.md
│   ├── design-ux-architect.md
│   ├── design-inclusive-visuals-specialist.md
│   └── design-whimsy-injector.md
│
├── dept-marketing-social/      ← 7 agentes de social media
│   ├── SKILL.md
│   ├── marketing-instagram-curator.md
│   ├── marketing-tiktok-strategist.md
│   ├── marketing-carousel-growth-engine.md
│   ├── marketing-short-video-editing-coach.md
│   ├── marketing-content-creator.md
│   ├── marketing-social-media-strategist.md
│   └── marketing-growth-hacker.md
│
├── dept-paid-media/            ← 7 agentes de mídia paga
│   ├── SKILL.md
│   ├── paid-media-auditor.md
│   ├── paid-media-creative-strategist.md
│   ├── paid-media-paid-social-strategist.md
│   ├── paid-media-ppc-strategist.md
│   ├── paid-media-programmatic-buyer.md
│   ├── paid-media-search-query-analyst.md
│   └── paid-media-tracking-specialist.md
│
├── dept-video-reels/           ← 8 agentes de vídeo Remotion
│   └── SKILL.md
│
├── dept-seo-authority/         ← 5 agentes de SEO
│   ├── SKILL.md
│   └── marketing-seo-specialist.md
│
└── dept-intelligence/          ← 8 agentes de inteligência
    ├── SKILL.md
    ├── agents-orchestrator.md
    ├── product-*.md (5 agentes de produto)
    └── (goose-skills: competitor-intel, reddit-scraper, etc.)

├── dept-art-factory/           ← 4 agentes da Fábrica de Artes
    ├── SKILL.md                ← Diretor de Artes
    ├── art-copywriter.md
    ├── art-grid-layout.md
    ├── art-color-palette.md
    └── art-director.md
```

### Como Testar Cada Departamento

```bash
# Testar o Departamento de Design sozinho:
# No Claude Code, referencie o SKILL.md do departamento:
# "Leia .agents/skills/dept-design/SKILL.md e crie uma arte para Instagram"

# Testar Marketing Social:
# "Leia .agents/skills/dept-marketing-social/SKILL.md e crie calendário semanal"

# Testar Mídia Paga:
# "Leia .agents/skills/dept-paid-media/SKILL.md e audite campanhas"

# Testar Vídeos & Reels:
# "Leia .agents/skills/dept-video-reels/SKILL.md e crie um reel novo"

# Testar SEO:
# "Leia .agents/skills/dept-seo-authority/SKILL.md e audite o blog"

# Testar Inteligência:
# "Leia .agents/skills/dept-intelligence/SKILL.md e analise concorrentes"

# Testar Fábrica de Artes:
# "Leia .agents/skills/dept-art-factory/SKILL.md e crie um criativo premium"
```

---

## FONTES DOS AGENTES

| Fonte | Qtd | Tipo | Instalação |
|-------|-----|------|------------|
| **Skills internas** (canvaviagem_*) | 62 | `.agents/skills/` | Já ativo |
| **goose-skills** (athina-ai) | 10 | `~/.claude/skills/` | `npx goose-skills install` |
| **agency-agents** (msitarzewski) | 43 | `.agents/skills/dept-*/` | Clonado em `.agency-agents/` |
| **TOTAL** | **115** | | |

### goose-skills instaladas:
- competitor-intel, industry-scanner, youtube-watcher
- create-html-carousel, reddit-scraper, twitter-scraper
- review-scraper, meta-ad-scraper, google-ad-scraper
- seo-content-audit

### agency-agents copiados:
- 8 design, 7 marketing, 7 paid-media, 5 product
- 1 orchestrator, 1 SEO specialist, + refs nos SKILL.md
