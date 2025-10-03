# Sweet Sophia Website

Este projeto é um boilerplate moderno de e-commerce para a Sweet Sophia, focado na venda de brownies artesanais. Foi construído com as mais recentes tecnologias do ecossistema React.

## Tecnologias Utilizadas

* **Frontend Framework**: React com TypeScript
* **Build Tool**: Vite
* **Estilização**: Tailwind CSS com classes utilitárias personalizadas.
* **Componentes UI**: Componentes acessíveis e customizáveis baseados em [shadcn/ui](https://ui.shadcn.com/) e Radix Primitives (ex: `Dialog`, `Drawer`, `Carousel`, `Toggle`, etc.).
* **Rotas**: `react-router-dom`
* **Outras Bibliotecas**: Gerenciamento de estado de carrinho (Custom Context), `sonner` para notificações.

## Configuração e Desenvolvimento

### Pré-requisitos

Você precisa ter o Node.js e o npm (ou um gerenciador de pacotes compatível como Yarn ou Bun) instalados.

### Primeiros Passos

1.  **Instale as dependências:**
    ```bash
    npm install
    ```

2.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```
    O aplicativo será iniciado em `http://localhost:8080` (ou em uma porta diferente se a 8080 estiver em uso).

## Estrutura do Projeto

* `src/pages/Index.tsx`: A página principal que agrega todos os componentes da landing page (`Header`, `Hero`, `Products`, `About`, `Footer`).
* `src/components/`: Contém os componentes principais da aplicação.
* `src/components/ui/`: Componentes UI base do shadcn/ui.
* `src/contexts/CartContext.tsx`: Lógica e estado para o carrinho de compras.
* `src/index.css`: Definição de tokens de design e cores usando variáveis CSS (HSL) para dar suporte ao modo claro/escuro.

## Agradecimentos

Este projeto foi desenvolvido com a assistência de inteligência artificial da plataforma **Lovable**, que ajudou na estruturação inicial do código, integração de bibliotecas e refatoração de componentes.