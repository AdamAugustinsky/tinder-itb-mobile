<a href="https://github.com/AdamAugustinsky/tinder_itb-mobile/blob/master/LICENSE">
  <p><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." /></p>
</a>

# TinderITB Mobile
Aplicativo mobile do TinderITB desenvolvido com React Native

### Para conseguir executar o aplicativo siga os passos a seguir:
- Baixe e Instale o NodeJS  https://nodejs.org/en/download/
- Baixe e instale o Yarn https://classic.yarnpkg.com/en/docs/install#windows-stable - opcional
- Abra o terminal com premissão de administrador
  Instale o expo-cli
  com yarn: `yarn global add expo-cli`(Recomendado)
  **ou** com npm(padrão): `npm install expo-cli --global`

### Iniciando o App
- Na pasta do projeto execute os comandos:
`yarn`
`expo start`

### Configurando o Axios para a sua maquina
**Abra o codigo do app, em src/services/api.js**
<p><img src="http://i.imgur.com/MRhC5mF.png" alt="ip no BaseURL em api.js"></p>
**No navegador vá ate o Metro Bundler aberto apos executar o `expo start`**
<p><img src="http://i.imgur.com/p5LuPq7.png" alt="No Metro Bundler" /></p>
**Na aba do Metro Bundler que foi aberta no seu browser, seleciona o seu ip acima do QR Code**
<p><img src="http://i.imgur.com/rYNeNfk.png" alt="Seu Ip depois do exp:// e antes do :"></p>
**Substitua o ip atual em src/services/api.js pelo seu ip**

## Tenha a API rodando antes de prosseguir https://github.com/Cauaspinheiro/tinder-itb-backend

### Executando o app no Celular(ou emulador)
- Tenha a api https://github.com/Cauaspinheiro/tinder-itb-backend rodando
- **Para Celulares:**
  Baixe o app do expo na play store https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US
  Leia o QR Code do Metro Bundler com o app
- **Para Emuladores:**
  Execute o Emulador
  <p><img src="http://i.imgur.com/aTsGSx1.png"></p>
  Clique no botão **Run on Android device/emulator** no Metro Bundler
