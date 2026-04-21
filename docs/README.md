# 📚 Documentação TravelBoost

> Toda a documentação organizada do sistema. Leia nesta ordem.

---

## Índice

| # | Arquivo | O Que É |
|---|---------|---------|
| 0 | [VISAO_GERAL.md](./VISAO_GERAL.md) | Visão geral do sistema, arquivos, stack |
| 1 | [FASE_1_DIAGNOSTICO.md](./FASE_1_DIAGNOSTICO.md) | Formulário, scoring, níveis, gargalos |
| 2 | [FASE_2_ENTREGAVEIS.md](./FASE_2_ENTREGAVEIS.md) | Vídeos, legendas, ofertas, checklist 30 dias |
| 3 | [FASE_3_ARTES.md](./FASE_3_ARTES.md) | Banana Pro API, templates, upload de logo |
| 4 | [FASE_4_SITE.md](./FASE_4_SITE.md) | Site do cliente, dashboard admin, deploy |
| 5 | [MEMORIA_CLIENTE.md](./MEMORIA_CLIENTE.md) | Login, banco de dados, progresso |
| 6 | [CAMPANHAS_ANUNCIOS.md](./CAMPANHAS_ANUNCIOS.md) | 5 campanhas, copy, tutorial Meta Ads |
| 7 | [CONTEUDO_BANCO.md](./CONTEUDO_BANCO.md) | 150 vídeos, 200+ legendas, hashtags |
| 8 | [PRECIFICACAO.md](./PRECIFICACAO.md) | Planos, preços, ROI, upsell |
| 9 | [ROADMAP_TECNICO.md](./ROADMAP_TECNICO.md) | Status atual, próximas sprints, correções |

---

## Fluxo Resumido

```
Cliente acessa → Faz login (ou cadastro)
        ↓
FASE 1 — Diagnóstico (15 min)
Preenche formulário → Score 0-100 → Gargalos → Checklist
        ↓
FASE 2 — Entregáveis (20 min)
Vídeos filtrados + Legendas prontas + Ofertas + Plano 30 dias
        ↓
FASE 3 — Artes (15 min)
Sobe logo → Escolhe template → Gera arte → Baixa
        ↓
FASE 4 — Site (10 min)
Preenche dados → Site gerado → Dashboard admin → Deploy
        ↓
CAMPANHAS — Direcionamento
Copy pronto + Tutorial Meta Ads + Checklist de lançamento
        ↓
RESULTADO: Agência com tudo funcionando em 1 hora
```

---

## Arquivos do Projeto

```
/
├── sistema-agencia.html              ← App principal (Fase 1 + 2) ✅
├── arquivos/
│   ├── landing_page_travelboost.html ← Página de vendas ✅
│   ├── SCRIPT_LIVE_TRAVELBOOST.md    ← Script live 60 min ✅
│   ├── TRAVELBOOST_SISTEMA_COMPLETO.md ← Doc técnica ✅
│   └── travelboost_system.py         ← Backend Python ✅
├── docs/                             ← Esta pasta ✅
│   ├── README.md                     ← Este arquivo
│   ├── VISAO_GERAL.md
│   ├── FASE_1_DIAGNOSTICO.md
│   ├── FASE_2_ENTREGAVEIS.md
│   ├── FASE_3_ARTES.md
│   ├── FASE_4_SITE.md
│   ├── MEMORIA_CLIENTE.md
│   ├── CAMPANHAS_ANUNCIOS.md
│   ├── CONTEUDO_BANCO.md
│   ├── PRECIFICACAO.md
│   └── ROADMAP_TECNICO.md
└── .kiro/skills/
    └── travelboost-marketing.md      ← Skills do agente Kiro ✅
```

---

## Próximas Ações Imediatas

1. **Corrigir encoding** do `sistema-agencia.html` (caracteres quebrados)
2. **Remover `"""`** do topo da landing page
3. **Decidir branding**: "Canva Viagem" vs "TravelBoost"
4. **Expandir banco de vídeos** para 150 títulos completos
5. **Implementar login** e memória por cliente
