# Dev Tracker

Uma aplicação mobile moderna construída com Expo e React Native.

## 🚀 Tecnologias Principais

- [Expo](~52.0.11) - Framework para desenvolvimento React Native
- [React Native](0.76.3) - Framework para desenvolvimento mobile
- [Redux Toolkit](2.4.0) - Gerenciamento de estado
- [NativeWind](4.1.23) - Estilização com Tailwind
- [TailwindCSS](3.4.16) - Framework CSS utilitário

## 📱 Funcionalidades

- Interface moderna: Desenvolvida com NativeWind/TailwindCSS para um design consistente.
- Performance otimizada: Gerenciamento de estado eficiente com Redux Toolkit.
- Navegação intuitiva: Implementação com React Navigation e Expo Router.
- Código seguro: Desenvolvido utilizando TypeScript.
- Design responsivo: Adaptado para diferentes resoluções e dispositivos.
- Integração com APIs: Pronto para consumir serviços externos e processar dados.
- Ambiente multiplataforma: Suporte para iOS, Android e web.

## 🛠 Configuração

1. Pré-requisitos:

- Node.js 16+
- PNPM
- Expo CLI
- Xcode (iOS) ou Android Studio (Android)

2. Clone o repositório:
   bash
   git clone https://github.com/seu-usuario/dev-tracker.git
   cd dev-tracker

3. Instale as dependências:
   bash
   pnpm install

4. Inicie o servidor de desenvolvimento:
   bash
   pnpm start

5. Execute no seu dispositivo:

- iOS: pnpm ios
- Android: pnpm android
- Web: pnpm web

## 📁 Estrutura do Projeto

src/
├── app/ # Telas e rotas (Expo Router)
├── assets/ # Imagens, fontes e arquivos estáticos
├── redux/ # Configuração Redux
├── styles/ # Estilos globais
├── types/ # Tipagens TypeScript
└── utils/ # Funções utilitárias

## 🔧 Desenvolvimento

- Ambiente de desenvolvimento com Expo
- ESLint + Prettier para qualidade de código
