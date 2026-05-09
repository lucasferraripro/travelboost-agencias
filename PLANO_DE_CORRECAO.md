# 🛠️ Plano de Correção Técnica - TravelBoost Agency System

Este documento lista todos os erros críticos, bugs de lógica e melhorias necessárias para tornar o sistema funcional. Use este roteiro em qualquer IA para gerar as correções.

## 1. Funções de JavaScript Ausentes (CRÍTICO)
O arquivo `sistema-agencia.html` referencia funções que não estão definidas no bloco `<script>`.

### A. Função `handleLogoUpload(input)`
**Problema:** O input de logo (`#f-logo`) chama esta função, mas ela não existe.
**O que deve fazer:** 
- Ler o arquivo usando `FileReader`.
- Converter para Base64.
- Salvar na variável global `logoBase64`.
- Mostrar um preview da logo na UI.

### B. Função `popularTeste()`
**Problema:** O botão de preenchimento automático não funciona.
**O que deve fazer:** Preencher todos os campos do formulário (nome, cidade, instagram, selects) com dados fictícios para testes rápidos.

---

## 2. Erros de Lógica e Variáveis
- **Variável `logoBase64`**: Declarar como `let logoBase64 = null;` no topo do script.
- **Bloco de Navegação**: Corrigir a função `irBloco` para que o fluxo ignore o `bloco-3` (que está vazio) e navegue corretamente entre 1, 2, 4 e 5.
- **Campos Ocultos de Score**: Revelar ou ajustar a lógica dos inputs `f-reels`, `f-stories`, `f-bio` e `f-whatsapp` para que o usuário possa realmente pontuar neles.

---

## 3. Problema de Imagem e Download (CORS)
**Problema:** O download do PNG via Canvas falha devido a restrições de segurança (Tainted Canvas) ao carregar imagens de domínios externos no protocolo `file://`.

**Solução sugerida:**
1. Garantir que `imgIA.crossOrigin = "anonymous";` esteja definido antes do `src`.
2. Implementar um sistema de download que, em caso de erro no `toDataURL()`, abra a imagem em uma nova aba com instruções de "Salvar como".
3. Tentar usar um proxy de imagens (como `images.weserv.nl`) para contornar restrições de CORS.

---

## 4. Melhorias na Fase 3 (Artes com IA)
- **Prompt Dinâmico**: O prompt atual ignora as "Observações livres" (`f-obs`). O prompt deve incorporar detalhes do nicho e do desafio do cliente.
- **Qualidade Visual**: Adicionar parâmetros de iluminação cinematográfica e remover textos gerados pela IA no prompt Master.

---

## 5. Melhorias na Fase 4 (Site)
- **Consistência Visual**: O site gerado deve herdar a cor primária (`cor-primaria`) e a imagem gerada na Fase 3.
- **Estrutura de Vendas**: Adicionar seções de "Depoimentos" e "FAQ" (estáticos ou baseados no nicho) para aumentar a conversão do site gerado.

---

## 6. Checklist de Arquivos a Revisar
- [ ] `sistema-agencia.html`: Principal arquivo com erros.
- [ ] `sistema-agencia-v2.html`: Versão alternativa que também apresenta as mesmas lacunas.

---

**Nota para a IA que for resolver:** 
Foque primeiro em restaurar as funções de JavaScript. Sem elas, o sistema não avança das telas iniciais.
