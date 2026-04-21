# Versão 1.0 — Estado Original

**Data:** 21/04/2026  
**Status:** Snapshot original antes de qualquer modificação

## O que existe nesta versão
- `sistema-agencia.html` — App principal com Fase 1 (diagnóstico) e Fase 2 (entregáveis)
- `arquivos/landing_page_travelboost.html` — Landing page de vendas
- `arquivos/SCRIPT_LIVE_TRAVELBOOST.md` — Script de live 60 min
- `arquivos/TRAVELBOOST_SISTEMA_COMPLETO.md` — Documentação técnica
- `arquivos/travelboost_system.py` — Backend Python + Claude API

## Problemas conhecidos nesta versão
- Encoding UTF-8 quebrado nos comentários JS (caracteres `Ã©`, `â€"` etc.)
- Landing page começa com `"""` Python (HTML inválido)
- Branding inconsistente: "Canva Viagem" vs "TravelBoost"
- Fase 2 direciona para compra do "Canva Viagem" em vez de entregar conteúdo pronto
- Vídeos são apenas títulos/referências, sem links reais
- Legendas não têm botão de copiar funcional em todos os casos

## Como restaurar esta versão
Copie os arquivos de `versions/v1.0/` para a raiz do projeto.
