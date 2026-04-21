# TravelBoost — Informações do Projeto

## Repositório GitHub

| Info | Detalhe |
|------|---------|
| **URL** | https://github.com/lucasferraripro/travelboost-agencias |
| **Visibilidade** | 🟢 Público |
| **Conta** | lucasferraripro |
| **Criado em** | 21/04/2026 |
| **Descrição** | Sistema de diagnóstico e entregáveis para agências de viagens brasileiras |

---

## Como acessar o repositório

```
https://github.com/lucasferraripro/travelboost-agencias
```

---

## Como recuperar uma versão anterior

### Opção 1 — Pelo GitHub (mais fácil)
1. Acesse https://github.com/lucasferraripro/travelboost-agencias
2. Clique em **"Commits"** (fica acima dos arquivos, mostra o número de commits)
3. Encontre o commit da versão que quer recuperar
4. Clique no ícone `<>` (Browse files) à direita do commit
5. Baixe o arquivo que quer restaurar

### Opção 2 — Pelo terminal
```bash
# Ver histórico de commits com datas
git log --oneline --format="%h %ad %s" --date=format:"%d/%m/%Y %H:%M"

# Restaurar um arquivo específico de um commit anterior
git checkout <hash-do-commit> -- sistema-agencia.html

# Restaurar TUDO para um commit anterior (cuidado)
git checkout <hash-do-commit>
```

---

## Salvamento automático

O Kiro está configurado para fazer **commit + push automático** no GitHub toda vez que um arquivo `.html`, `.md`, `.py`, `.js` ou `.css` for salvo.

Cada alteração fica registrada com data e hora no histórico de commits.

---

## Compartilhar com outras IAs

Para alinhar outra IA com este projeto, passe:

1. **URL do repositório:** `https://github.com/lucasferraripro/travelboost-agencias`
2. **Documentação principal:** pasta `docs/` — especialmente `docs/README.md` e `docs/VISAO_GERAL.md`
3. **Skills do Kiro:** `.kiro/skills/travelboost-marketing.md`

---

## Estrutura do projeto

```
/
├── sistema-agencia.html              ← App principal (abre no navegador)
├── PROJETO.md                        ← Este arquivo
├── README.md                         ← Descrição geral
├── .gitignore
├── arquivos/                         ← Materiais de apoio
│   ├── landing_page_travelboost.html
│   ├── SCRIPT_LIVE_TRAVELBOOST.md
│   ├── TRAVELBOOST_SISTEMA_COMPLETO.md
│   └── travelboost_system.py
├── docs/                             ← Documentação técnica
│   ├── README.md
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
├── versions/                         ← Snapshots de versões
│   └── v1.0/                         ← Estado original do projeto
└── .kiro/skills/
    └── travelboost-marketing.md      ← Contexto para o Kiro
```

---

## Desenvolvido por

**Lucas Ferrari**
- GitHub: [@lucasferraripro](https://github.com/lucasferraripro)
- Instagram: [@lucasferrari.pro](https://instagram.com/lucasferrari.pro)
- Empresa: Rocha Digital
