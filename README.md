<a href="https://github.com/AdamAugustinsky/tinder_itb-mobile/blob/master/LICENSE">
  <p align="center" ><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="React Native is released under the MIT license." /></p>
</a>

# TinderITB Mobile
Aplicativo mobile do TinderITB desenvolvido com React Native

<p align="center" >
  <img src="https://i.imgur.com/B6C3bmu.png" />
  <img src="https://i.imgur.com/ibn8zc9.png" />
  <img src="https://i.imgur.com/HRhyTWs.png" />
  <img src="https://i.imgur.com/wqP6Fni.png" />
  <img src="https://i.imgur.com/5j1oSmM.png" />
</p>

## Para um facil acesso ao app, utilize o app do expo https://exp.host/@adamaugustinsky/TinderITB

### Para conseguir executar o aplicativo siga os passos a seguir:
- Baixe e Instale o NodeJS  https://nodejs.org/en/download/
- Baixe e instale o Yarn https://classic.yarnpkg.com/en/docs/install#windows-stable - opcional
- Abra o terminal com premissão de administrador

  <p align="center" ><img src="http://i.imgur.com/iF7upFl.png" /></p>

  Instale o expo-cli
  com yarn: `yarn global add expo-cli`(Recomendado)

  <p align="center" ><img src="http://i.imgur.com/J4vlze4.png" /></p>

  **ou** com npm(padrão): `npm install expo-cli --global`



### Iniciando o App
- Instale o git bash https://git-scm.com/downloads
  Abra o git bash na pasta desejada

  <p align="center" ><img src="http://i.imgur.com/hjV2CPh.png" /></p>

  Execute `git clone git@github.com:AdamAugustinsky/tinder_itb-mobile.git`

  <p align="center" ><img src="http://i.imgur.com/U0KROPT.png" /></p>

- Na pasta do projeto execute os comandos:

<p align="center" ><img src="http://i.imgur.com/q1zLUme.png" /></p>

`yarn`

<p align="center" ><img src="http://i.imgur.com/q1zLUme.png" /></p>

`expo start`

<p align="center" ><img src="http://i.imgur.com/8UfCMKu.png" /></p>

### Configurando o Axios para a sua maquina
**Abra o codigo do app, em src/services/api.js**

<p align="center" ><img src="http://i.imgur.com/MRhC5mF.png" alt="ip no BaseURL em api.js"></p>

**No navegador vá ate o Metro Bundler aberto apos executar o `expo start`**

<p align="center" ><img src="http://i.imgur.com/p5LuPq7.png" alt="No Metro Bundler" /></p>

**Na aba do Metro Bundler que foi aberta no seu browser, selecione e copie o seu ip acima do QR Code**

<p align="center" ><img src="http://i.imgur.com/rYNeNfk.png" alt="Seu Ip depois do exp:// e antes do :"></p>

**Substitua o ip atual em src/services/api.js pelo seu ip**

## Tenha a API rodando antes de prosseguir https://github.com/Cauaspinheiro/tinder-itb-backend

### Executando o app no Celular(ou emulador)
- Tenha a api https://github.com/Cauaspinheiro/tinder-itb-backend rodando
- **Para Celulares:**
  Baixe o app do expo na play store https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US
  Leia o QR Code do Metro Bundler com o app
- **Para Emuladores:**
  Execute o Emulador
  <p align="center" ><img src="http://i.imgur.com/aTsGSx1.png"></p>

  Clique no botão **Run on Android device/emulator** no Metro Bundler
