---
name: Super Time de Engenharia — Canva Viagem
description: Framework de orquestração técnica colaborativa entre agentes de desenvolvimento, focado em implementar novos recursos, corrigir bugs e evoluir o aplicativo de forma segura e elegante.
---

# 🏢 SUPER TIME DE ENGENHARIA — CANVA VIAGEM

Este documento estabelece o **Super Time de Desenvolvimento e Engenharia** da plataforma Canva Viagem. Ele organiza e integra todas as nossas inteligências artificiais técnicas em departamentos claros, garantindo que toda modificação, recurso novo ou correção solicitada por você seja executada sob as melhores diretrizes possíveis de arquitetura e segurança.

---

## 👥 DEPARTAMENTOS DO SUPER TIME DE DEV

### 1. 👨‍💻 DEPT_FRONTEND (Engenharia de Interface)
*   **Agente Líder:** `canvaviagem_dev` (Frontend specialist)
*   **Especialidades:** React 18, TypeScript, Vite, responsividade móvel (mobile-first), Tailwind CSS e transições fluidas.
*   **Área de Atuação:** `src/pages/`, `src/components/`, `src/App.tsx`.
*   **Diretriz de Ouro:** Garantir zero desalinhamentos visuais e que novas interfaces carreguem de forma ultra-rápida.

### 2. 🔌 DEPT_BACKEND (Infraestrutura & APIs)
*   **Agente Líder:** `canvaviagem_dev` (Backend specialist)
*   **Especialidades:** Edge Functions do Supabase (Deno), integrações com Stripe/AbacatePay, automações de e-mail e consumo seguro das APIs de IA (Gemini/OpenAI).
*   **Área de Atuação:** `supabase/functions/`, `src/hooks/useAuth`.
*   **Diretriz de Ouro:** Manter todas as chaves privadas totalmente ocultas do frontend e testar rotas localmente antes de deploys.

### 3. 🎨 DEPT_ART_ENGINE (Direção de Arte & Canvas)
*   **Agente Líder:** `art-director` & `diretor_artes`
*   **Especialidades:** Engenharia do Canvas 2D (`composeTravelAd`), tipografia serifada premium, proporções de imagem e cálculo dinâmico de contraste e opacidade.
*   **Área de Atuação:** `src/lib/fabrica-compose-art.ts`, `src/lib/fabrica-text-contrast.ts`.
*   **Diretriz de Ouro:** Proteger 100% o Canvas contra sobreposição de textos, palavras cortadas ou contrastes apagados (norma WCAG AA).

### 4. 🔒 DEPT_SECURITY (Segurança & LGPD)
*   **Agente Líder:** `canvaviagem_dev` (Data Security) & `canvaviagem_meta_seguranca_api`
*   **Especialidades:** Validação de tokens de API, políticas de Row Level Security (RLS) no Supabase, segurança nas rotas de checkout e autenticação.
*   **Área de Atuação:** `supabase/migrations/`, `supabase/config.toml`, `.env`.
*   **Diretriz de Ouro:** Blindar as tabelas contra vazamento de dados de usuários e garantir Magic Links ultra-seguros.

### 5. 🔎 DEPT_QA_REVIEW (Garantia de Qualidade & Build)
*   **Agente Líder:** `canvaviagem_revisor`
*   **Especialidades:** Resolução de erros de compilação de TypeScript, auditoria de builds, prevenção de Mojibake (erros de acentuação/UTF-8) e garantia de conformidade técnica.
*   **Área de Atuação:** `tsconfig.json`, `eslint.config.js`, `vite.config.ts`.
*   **Diretriz de Ouro:** Nunca commitar código que impeça o `npm run build` de rodar com sucesso.

---

## 🔄 WORKFLOW DE EXECUÇÃO DINÂMICA (Como trabalhamos juntos)

Toda vez que você me pedir uma nova tarefa ou correção, eu agirei como o **Orquestrador Geral** da Fábrica, conduzindo o seguinte fluxo automático:

```
                  [Sua Solicitação]
                         │
                         ▼
             [Orquestrador / Antigravity]
                         │
    ┌────────────────────┼────────────────────┐
    ▼                    ▼                    ▼
[DEPT_SECURITY]    [DEPT_BACKEND]     [DEPT_FRONTEND]
Mapeia riscos      Gera APIs/Dados    Modifica Telas
    │                    │                    │
    └────────────────────┼────────────────────┘
                         │
                         ▼
                 [DEPT_ART_ENGINE]
             Refina e blinda o layout
                         │
                         ▼
                  [DEPT_QA_REVIEW]
             Roda builds e valida 100%
                         │
                         ▼
                [Deploy Seguro 🚀]
```

Dessa forma, cada parte do aplicativo é cuidada por um especialista virtual, garantindo que o Canva Viagem seja a plataforma mais estável e premium de turismo!
