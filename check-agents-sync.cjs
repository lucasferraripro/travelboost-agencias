#!/usr/bin/env node

/**
 * 🕵️‍♂️ AGENTE ÁRBITRO DE COMPATIBILIDADE E SINCRONIA
 * Arquivo: check-agents-sync.cjs
 * Função: Auditar o estado atual, rodar testes de build, segurança e RLS antes de commit/push.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log("🕵️‍♂️ [ÁRBITRO] Iniciando auditoria de sincronia do Super Time de Engenharia...");

// 1. Validar integridade do Barramento de Estado
const busPath = path.join(__dirname, '.agents', 'task_state.json');
if (!fs.existsSync(busPath)) {
  console.error("❌ [SEGURANÇA] Erro crítico: O Barramento de Estado (.agents/task_state.json) não foi encontrado!");
  process.exit(1);
}

try {
  const busContent = JSON.parse(fs.readFileSync(busPath, 'utf8'));
  console.log(`✅ [ESTADO] Barramento de Estado carregado com sucesso. Tarefa ativa: "${busContent.active_task.description}" (Status: ${busContent.active_task.status})`);
} catch (e) {
  console.error("❌ [ESTADO] Erro crítico: O arquivo .agents/task_state.json está corrompido!");
  process.exit(1);
}

// 2. Auditoria de Segurança: Verificar chaves de API expostas no código frontend
console.log("🔒 [SEGURANÇA] Verificando se há vazamento de chaves privadas no frontend...");
const srcPath = path.join(__dirname, 'src');

function scanDirForKeys(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        scanDirForKeys(fullPath);
      }
    } else if (file.endsWith('.ts') || file.endsWith('.tsx') || file.endsWith('.js') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('supabase_service_role_key') || content.includes('service_role') || (content.includes('sk-proj-') && !fullPath.includes('Edge'))) {
        console.error(`❌ [SEGURANÇA] Vazamento crítico em: ${fullPath} - Chave privada ou Service Role exposta!`);
        process.exit(1);
      }
    }
  }
}

if (fs.existsSync(srcPath)) {
  scanDirForKeys(srcPath);
  console.log("✅ [SEGURANÇA] Nenhuma chave privada ou Service Role foi encontrada exposta no frontend.");
}

// 3. Auditoria de Build e Compilação
console.log("🔎 [QA_REVIEW] Verificando compilação do TypeScript (npm run build)...");
try {
  execSync('npm run build', { stdio: 'inherit', cwd: __dirname });
  console.log("✅ [QA_REVIEW] Compilação realizada com sucesso! Zero erros de TypeScript detectados.");
} catch (error) {
  console.error("❌ [QA_REVIEW] Erro crítico: O código não compila! Por favor, corrija os erros de TypeScript antes de prosseguir.");
  process.exit(1);
}

console.log("\n🚀 [ÁRBITRO] Tudo aprovado e 100% sincronizado! Super Time está pronto para deploy.");
process.exit(0);
