# CENTRAL HUB — Canva Viagem
> Seu painel de controle completo. 62 skills. 3 projetos. Um único lugar.
> **Como usar:** Abra este arquivo no Obsidian. Use os links `[[]]` para navegar. Use `/skill-name` no Claude Code para ativar.

---

## MAPA DO ECOSSISTEMA

```
┌─────────────────────────────────────────────────────────────────────┐
│                    canvaviagem-repo  (HUB MASTER)                   │
│                                                                     │
│  ┌─────────────────────┐   ┌──────────────────┐   ┌─────────────┐  │
│  │   .agents/skills/   │   │ agencias-viagem/  │   │canvaviagem- │  │
│  │   (49 skills)       │   │ .claude/skills/   │   │  videos/    │  │
│  │                     │   │ (13 skills)       │   │ (Remotion)  │  │
│  │  Negócio / SaaS     │   │                   │   │             │  │
│  │  • CEO / CMO        │   │  Vídeos (4)       │   │  5 vídeos   │  │
│  │  • Dados / Churn    │   │  Campanhas (9)    │   │  prontos    │  │
│  │  • Aquisição        │   │                   │   │             │  │
│  │  • Escala           │   │                   │   │             │  │
│  │  • Produto          │   │                   │   │             │  │
│  │  • Conteúdo         │   │                   │   │             │  │
│  └─────────────────────┘   └──────────────────┘   └─────────────┘  │
│                                                                     │
│  OBSIDIAN VAULT ativo (porta 27124) | CLAUDE.md = contexto IA       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## PIPELINES PRONTOS (ação imediata)

### Rotina Diária (5 min)
```
1. /canvaviagem_orquestrador   → briefing do dia, diagnóstico
2. /canvaviagem_aquisicao_conteudo → post do dia
3. /canvaviagem_copywriter     → escrever legenda
4. /canvaviagem_revisor        → revisar antes de publicar
```

### Segunda-Feira (planejamento semanal)
```
1. /canvaviagem_dados_stripe   → MRR e assinantes da semana
2. /canvaviagem_relatorio_visual → relatório integrado
3. /canvaviagem_escala_diretor → análise de progresso da meta
4. /canvaviagem_churn_diretor  → verificar cancelamentos
5. /video-pipeline-completo   → gerar 1 vídeo novo automaticamente
```

### Criar Vídeo do Zero (automático)
```
/video-pipeline-completo
  └→ pesquisa mercado → gera código TSX → renderiza MP4 → legenda IA
```

### Campanha Meta Ads (do zero ao blueprint)
```
/departamento-campanhas-roi
  └→ criativos → copy → LP → budget → blueprint → previsão
```

### Emergência: Assinaturas Pararam
```
1. /canvaviagem_dados_stripe
2. /canvaviagem_aquisicao_diretor
3. /canvaviagem_aquisicao_email
4. /canvaviagem_churn_winback
```

---

## GRUPO A — NEGÓCIO (49 skills)
> Acesse abrindo Claude Code em: `C:\Users\win 10\Desktop\canvaviagem-repo`

### ORQUESTRADOR & LIDERANÇA
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_orquestrador` | Diagnóstico diário completo do negócio | **Todo dia pela manhã — ponto de entrada** |
| `/super-dev-team` | **Orquestrador do Super Time de Engenharia** | Executar correções de bugs, desenvolver telas e blinder Supabase |
| `/canvaviagem_ceo` | Decisões estratégicas, aprovações, visão mensal | Decisões importantes, revisão mensal |
| `/canvaviagem_cmo` | Estratégia de marketing, plano do mês | Planejar campanhas, coordenar conteúdo |
| `/canvaviagem_ganancia` | Análise de oportunidades de receita imediata | Quando quiser crescer receita rápido |

### DADOS & INTELIGÊNCIA
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_dados_stripe` | Busca MRR, assinantes, churn, receita real | Toda segunda para ter os números |
| `/canvaviagem_dados_analytics` | Page views, cliques, fontes de tráfego | Analisar performance de conteúdo |
| `/canvaviagem_relatorio_visual` | Relatório visual integrado (diário/semanal/mensal) | Gerar dashboard de métricas |
| `/canvaviagem_gestao_tokens` | Verifica saldo e estima custo de IA antes de automações | Antes de rodar pipelines longas |

### ANTI-CHURN (RETENÇÃO)
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_churn_diretor` | Diagnostica causa raiz do churn | Quando tiver cancelamento ou churn alto |
| `/canvaviagem_churn_onboarding` | Sequência boas-vindas para novos assinantes | Para todo novo assinante (semana 1) |
| `/canvaviagem_churn_engajamento` | Reativa assinantes inativos (sem login 14+ dias) | Assinantes que sumiram |
| `/canvaviagem_churn_winback` | Sequência D7/D21/D45 para ex-assinantes | Para recuperar cancelados |

### AQUISIÇÃO
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_aquisicao_diretor` | Diagnóstico e estratégia de aquisição | Quando assinaturas pararem |
| `/canvaviagem_aquisicao_conteudo` | Planeja conteúdo orgânico da semana | Toda segunda para definir calendário |
| `/canvaviagem_aquisicao_email` | Campanhas de email para leads e compradores | Para converter lista em assinantes |
| `/canvaviagem_aquisicao_trafego` | Planejar e executar tráfego pago | Para escalar via anúncios |

### ESCALA
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_escala_diretor` | Revisão semanal de progresso da meta de MRR | Toda segunda, após relatório |
| `/canvaviagem_escala_funil` | Otimiza /planos e checkout para converter mais | Quando conversão da LP cair |
| `/canvaviagem_escala_anual` | Converte assinantes mensais para plano anual | Campanha de migração anual |

### PRODUTO & MERCADO
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_produto_diretor` | Reunião mensal de melhoria de produto | Todo mês para roadmap |
| `/canvaviagem_produto_youtube` | Pesquisa tendências e destinos em alta no YouTube | Para pesquisa de mercado |
| `/canvaviagem_produto_social` | Monitora comentários e grupos de agentes de viagem | Para capturar voz do mercado |
| `/canvaviagem_produto_feedback` | Analisa avaliações e pedidos de cancelamento | Para melhorar produto |
| `/canvaviagem_produto_inovacao` | Sugere novos produtos e melhorias | Para inovar e crescer oferta |

### RELACIONAMENTO & EXPANSÃO
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_atendimento` | Responde DMs, WhatsApp, emails, suporte | Para gerir atendimento |
| `/canvaviagem_comunidade` | Gere grupo WhatsApp de assinantes e engajamento | Para ativar comunidade |
| `/canvaviagem_hotmart` | Monitora Hotmart e converte compradores em assinantes | Para upsell de compradores |
| `/canvaviagem_lancamento` | Planejar e executar lançamento/relançamento de produto | Para lançar novo produto |
| `/canvaviagem_collab` | Identificar e fechar parcerias e influenciadores | Para parcerias estratégicas |

### MARKETING & CONTEÚDO
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_copywriter` | Escreve copy de post, email ou anúncio | Para escrever qualquer texto |
| `/canvaviagem_designer` | Cria briefing de arte para o Canva | Para criar artes |
| `/canvaviagem_feed` | Monta post de feed do Instagram | Para posts de feed |
| `/canvaviagem_stories` | Monta sequência de stories | Para stories |
| `/canvaviagem_seo` | Otimiza páginas e artigos para Google | Para ranquear no Google |
| `/canvaviagem_blog` | Cria artigos de blog completos | Para blog |
| `/canvaviagem_blog_analista` | Analisa performance de artigos e oportunidades SEO | Para estratégia de blog |
| `/canvaviagem_blog_autonomo` | Gerencia blog de forma autônoma | Para produção contínua |
| `/canvaviagem_revisor` | Revisa qualquer conteúdo antes de publicar | **Sempre antes de publicar** |
| `/canvaviagem_mercado` | Pesquisa concorrentes e oportunidades de mercado | Para inteligência competitiva |
| `/canvaviagem_trafego` | Gestão de anúncios pagos | Para campanhas pagas |
| `/canvaviagem_relatorio_visual` | Relatório visual integrado | Para apresentações |
| `/canvaviagem_seo` | SEO técnico e de conteúdo | Para crescimento orgânico |

### FÁBRICA DE ARTES (4 AGENTES PUBLICITÁRIOS)
| Agent / Skill | O que faz | Quando usar |
|---|---|---|
| `/dept-art-factory` | **Orquestrador de Artes Premium** (Diretor de Arte) | Geração de criativos publicitários 100% blindados de colisão e desalinhamento |
| `/art-copywriter` | Escreve títulos curtos, slogans e hooks de criativos de turismo | Para otimizar a escrita de títulos de anúncios |
| `/art-grid-layout` | Garante margens seguras e dimensionamentos exatos no Canvas | Para blindagem contra sobreposição ou quebra de palavras |
| `/art-color-palette` | Calcula o contraste (WCAG AA) e opacidade das cores da marca | Para garantir legibilidade máxima e sofisticação cromática |
| `/art-director` | Seleciona o estilo ideal (Estilo A ao H) e exporta a composição final | Para compilar a entrega final do anúncio |

### AULA SECRETA & LANÇAMENTO
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/canvaviagem_aula_secreta_manager` | Gerencia aula secreta/evento de captação | Para webinars e eventos |
| `/canvaviagem_aula_secreta_suporte` | Suporte durante aula secreta ao vivo | Durante eventos |

---

## GRUPO B — VÍDEO & CAMPANHAS (13 skills)
> Acesse abrindo Claude Code em: `C:\Users\win 10\Desktop\agencias-viagem`
> Ou em: `C:\Users\win 10\Desktop\canvaviagem-repo` (após configurar .claude/skills/)

### PIPELINE DE VÍDEO (Remotion)
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/video-pipeline-completo` | **Pipeline completa do zero ao MP4** — pesquisa → código → renderiza | Para gerar vídeo automaticamente |
| `/video-pesquisa-mercado` | Pesquisa tendências de viagem, gera briefing JSON | Etapa 1 do pipeline de vídeo |
| `/video-gerar-composicao` | Lê briefing e gera código Remotion TSX completo | Etapa 2 do pipeline de vídeo |
| `/video-renderizar` | Renderiza MP4 via Remotion + gera legenda com Gemini | Etapa 3 — gera o vídeo final |

**Vídeos já prontos em canvaviagem-videos/:**
- `Video1-SegredoDasGrandes` (30s) — Segredo das grandes agências
- `Video2-EnquantoVoceTrava` (30s) — Enquanto você trava no Canva
- `Video3-MensagemWhatsApp` (25s) — Mensagem WhatsApp inesperada
- `Video4-AchoFofo` (28s) — Ironizando quem usa Canva
- `Video5-SemEquipe` (25s) — Como postar 5 vídeos por dia

### CAMPANHAS META ADS (ROI)
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/departamento-campanhas-roi` | **Orquestra todos os 6 agentes** — campanha completa do zero | Para preparar campanha Meta |
| `/agente-1-creative-assets` | Coleta e valida criativos (vídeos/imagens) para Meta Ads | Etapa 1 — organizar criativos |
| `/agente-2-copy-extractor` | Extrai copy e hooks de campanhas antigas de alta performance | Etapa 2 — extrair copy que funciona |
| `/agente-3-lp-validator` | Valida landing pages (velocidade, pixel, CTA, checkout) | Etapa 3 — checar LPs |
| `/agente-4-budget-roi` | Projeta ROI por cenário de budget (R$100/R$200/R$500+) | Etapa 4 — calcular investimento |
| `/agente-5-blueprint-generator` | Gera blueprint completo da campanha (JSON + Markdown) | Etapa 5 — blueprint final |
| `/agente-6-performance-predictor` | Projeta ROAS, CAC, CTR e diz: PUBLICAR / CAUTION / NÃO | Etapa 6 — decisão final |

### ANÁLISE DE TRÁFEGO
| Skill | O que faz | Quando usar |
|-------|-----------|-------------|
| `/traffic-campaign-analyzer` | Dashboard visual com métricas de campanha (Meta/Google/TikTok) | Para analisar performance de anúncio |
| `/scaling-recommendation` | Recomenda ESCALAR, PAUSAR ou AJUSTAR baseado em ROAS/CAC | Para decidir orçamento rápido |

---

## DOCUMENTOS DE REFERÊNCIA

| Documento | O que contém | Caminho |
|-----------|-------------|---------|
| [[agencias-viagem/METODOLOGIAS]] | Framework completo de copy, hooks, retenção de vídeo (710 linhas) | `agencias-viagem/METODOLOGIAS.md` |
| [[.agents/MAPA]] | Mapa técnico dos 7 departamentos e fluxos de dados | `.agents/MAPA.md` |
| [[lp-cv.md]] | Design system da página /planos (cores, tipografia, componentes) | `lp-cv.md.md` |
| [[agencias-viagem/estrategia_ia/DASHBOARD_IA]] | Dashboard de análise com IA | `agencias-viagem/estrategia_ia/DASHBOARD_IA.md` |
| [[agencias-viagem/estrategia_ia/icp_canva_viagem]] | Ideal Customer Profile — quem é o comprador | `agencias-viagem/estrategia_ia/icp_canva_viagem.md` |
| [[agencias-viagem/estrategia_ia/ESTRATEGIA_TRAFEGO_PAGO]] | Estratégia de tráfego pago documentada | `agencias-viagem/estrategia_ia/ESTRATEGIA_TRAFEGO_PAGO.md` |

---

## REGRAS CRÍTICAS (não esquecer)

```
1. IDs Remotion usam HÍFENS, nunca underscores
   ✅ Video1-SegredoDasGrandes
   ❌ Video1_SegredoDasGrandes

2. Sempre começar o dia com /canvaviagem_orquestrador

3. Sempre passar pelo /canvaviagem_revisor antes de publicar qualquer conteúdo

4. Render Remotion: sempre incluir extensão .mp4 no output
   ✅ npx remotion render Video1-SegredoDasGrandes out/v1.mp4

5. Skills de vídeo precisam de Node.js + Remotion instalado em canvaviagem-videos/
   Skills de IA (legenda) precisam de GOOGLE_API_KEY no .env
```

---

## CONEXÕES ENTRE GRUPOS

```
GRUPO A (Negócio)          ←→         GRUPO B (Vídeo & Campanhas)
────────────────────                   ───────────────────────────
canvaviagem_aquisicao_conteudo  →  video-pipeline-completo
canvaviagem_copywriter          →  video-gerar-composicao (copy das cenas)
canvaviagem_mercado             →  video-pesquisa-mercado
canvaviagem_trafego             →  departamento-campanhas-roi
canvaviagem_cmo                 →  agente-5-blueprint-generator
```

---

*Última atualização: 2026-03-14 | Total: 62 skills ativas*
