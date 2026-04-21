# TravelBoost — Visão Geral do Sistema

> Sistema completo de transformação digital para agências de viagens.
> Tudo em 1 hora. Do diagnóstico ao site publicado.

---

## O Que É

TravelBoost é uma plataforma SaaS para agências de viagens brasileiras que entrega:

- **Diagnóstico** do perfil digital com score real (0–100)
- **Entregáveis prontos**: vídeos, legendas, ofertas, checklist
- **Criação de artes** com identidade visual do cliente (Banana Pro API)
- **Site profissional** com dashboard admin para o cliente gerenciar

Tudo em uma única ferramenta, sem precisar sair para nenhuma outra plataforma.

---

## Por Que Existe

Agências de viagem sofrem com:

| Problema | Custo Real |
|----------|-----------|
| Designer para marca | R$ 2–5k |
| Copywriter para conteúdo | R$ 2–3k |
| Gestor de ads para campanhas | R$ 3–5k |
| Tempo de espera | 4–6 semanas |

**TravelBoost resolve tudo isso em 1 hora por R$ 4.990 (one-time) ou R$ 1.990/mês.**

---

## As 4 Fases

```
FASE 1          FASE 2          FASE 3          FASE 4
Diagnóstico  →  Entregáveis  →  Artes       →  Site
(15 min)        (20 min)        (15 min)        (10 min)
```

### Fase 1 — Diagnóstico de Perfil
Formulário com 5 blocos → Score 0–100 → Nível 1–5 → Gargalos → Checklist

### Fase 2 — Entregáveis Prontos
Vídeos filtrados por nicho + Legendas por destino + Ofertas prontas + Plano 30 dias

### Fase 3 — Criação de Artes
Logo do cliente + Templates pré-definidos + Banana Pro API → Arte pronta para download

### Fase 4 — Site do Cliente
Formulário de dados → Site gerado → Dashboard admin → Deploy automático

---

## Arquivos do Projeto

```
/
├── sistema-agencia.html          ← App principal (Fase 1 + Fase 2)
├── arquivos/
│   ├── landing_page_travelboost.html   ← Página de vendas
│   ├── SCRIPT_LIVE_TRAVELBOOST.md      ← Script de live (60 min)
│   ├── TRAVELBOOST_SISTEMA_COMPLETO.md ← Documentação técnica
│   └── travelboost_system.py           ← Backend Python + Claude API
├── docs/                         ← Documentação organizada (este diretório)
│   ├── VISAO_GERAL.md            ← Este arquivo
│   ├── FASE_1_DIAGNOSTICO.md
│   ├── FASE_2_ENTREGAVEIS.md
│   ├── FASE_3_ARTES.md
│   ├── FASE_4_SITE.md
│   ├── MEMORIA_CLIENTE.md
│   ├── CAMPANHAS_ANUNCIOS.md
│   └── PRECIFICACAO.md
└── .kiro/skills/
    └── travelboost-marketing.md  ← Skills do agente Kiro
```

---

## Stack Técnico

| Camada | Tecnologia |
|--------|-----------|
| Frontend | HTML + CSS + JS puro (zero dependências) |
| IA / Diagnóstico | Claude API (Anthropic) |
| Geração de Artes | Banana Pro API |
| Backend | Python 3 |
| Banco de Dados | PostgreSQL + Redis |
| Storage | AWS S3 |
| Deploy de Sites | Vercel / GitHub Pages |
| Email | Mailchimp / ActiveCampaign |
| WhatsApp | Twilio |

---

## Modelo de Negócio

| Plano | Preço | O Que Inclui |
|-------|-------|-------------|
| One-time | R$ 4.990 | Diagnóstico + Marca + Conteúdo + Campanhas + 3 meses suporte |
| Mensal | R$ 1.990/mês | Tudo + novos posts mensais + otimização + consultoria 30 min |

---

## Criador

Lucas Ferrari — @lucasferrari.pro
Rocha Digital — Gestão de tráfego pago para agências de viagem
