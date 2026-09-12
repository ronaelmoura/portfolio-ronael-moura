# Portfólio de Ronael Moura

Portfólio profissional de **Ronael Moura**, Desenvolvedor Full Stack com React, Node.js e TypeScript, e criador da Ronas Tech.

O projeto apresenta projetos autorais, decisões técnicas e trabalhos publicados. O case principal é o [Ronas Desk](https://github.com/ronaelmoura/ronas-desk), uma demonstração Full Stack com dados fictícios e 370 testes documentados (361 no CI e 9 de integração local). Também inclui StockFlow API, Multer Safe Limit, o [portfólio de Beatriz Mendes](https://beatriz-mendes-portfolio.vercel.app/) e a [Ronas Tech](https://www.ronastech.com.br/) como experiência profissional atual em suporte remoto. Painéis ilustrativos são identificados e não representam métricas de clientes.

## Projeto

O código da aplicação está em [`portfolio-ronas-tech/`](portfolio-ronas-tech/).

```bash
cd portfolio-ronas-tech
npm install
npm run dev
```

## Validação

```bash
cd portfolio-ronas-tech
npm run lint
npm test
npm run build
```

São sete testes de conteúdo, executados com o test runner nativo do Node.
Eles verificam o que não pode regredir na página: que as ilustrações não são
apresentadas como resultado medido de cliente, que a URL canônica aponta para
o portfólio, que o menu de comandos usa um diálogo nativo e respeita
`prefers-reduced-motion`, e que abas e filtros expõem seleção e controle por
teclado. O CI roda exatamente os mesmos comandos.

O workflow em `.github/workflows/deploy.yml` publica o build no GitHub Pages após pushes para `main`.

## Links

[GitHub](https://github.com/ronaelmoura) · [LinkedIn](https://www.linkedin.com/in/ronael-moura) · [YouTube](https://www.youtube.com/@RonasTech)
