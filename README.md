# GitHub Pages Preview

Previa estatica da intranet para apresentacao publica.

## Estrutura

- `index.html`: landing page publica
- `styles.css`: identidade visual da previa
- `script.js`: troca de telas simuladas

## Publicacao

O workflow em `.github/workflows/deploy-preview.yml` publica esta pasta no GitHub Pages.

Passos no GitHub:

1. Envie estes arquivos para o repositorio remoto.
2. Em `Settings > Pages`, selecione `GitHub Actions` como source.
3. Aguarde a execucao do workflow `Deploy GitHub Pages Preview`.
4. Use a URL gerada pelo Pages como link publico de demonstracao.

## Dominio customizado

Quando o dominio estiver liberado, basta adicionar um arquivo `CNAME` nesta pasta com o dominio final.
