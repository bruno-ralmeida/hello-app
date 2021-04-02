# hello-app 🤖🌎

> O objetivo do aplicativo Hello é aproveitar a geolocalização para obter o país dos usuários para que ele possa gerar uma saudação personalizada na língua nativa dos usuários.

> Projeto baseado no repósitorio [app-ideas 📚](https://github.com/florinpop17/app-ideas/blob/master/Projects/1-Beginner/Hello-App.md)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).



### Histórias do usuário
- [x] O usuário pode ver um painel de login simulado contendo um campo de entrada de texto de nome de usuário, um campo de entrada de texto por senha e botões 'Login' e 'Logout'.
- [x] O usuário pode inserir um nome de login falso no campo Nome do Usuário.
- [x] O usuário pode inserir uma senha falsa no campo Senha. A entrada deve ser mascarada para que os asteriscos do usuário () para cada caractere inserido em vez da senha do texto simples.*
- [x] O usuário pode clicar no botão 'Login' para realizar um login simulado.
- [x] O usuário pode ver uma mensagem se os campos de entrada estão vazios e a cor da borda do campo(s) em erro deve ser alterada para vermelho.
- [x] O usuário pode ver uma mensagem de reconhecimento de login no formato: <hello-in-native-language> <user-name> you have-successfully logged in!
- [x] O usuário pode clicar no botão 'Logout' para limpar os campos de entrada de texto e quaisquer mensagens anteriores.
- [x] O usuário pode ver uma nova mensagem quando conectado com sucesso no formato: Have a great day <user-name>!
#### Recursos bônus
 - [x] O usuário pode ver um campo de entrada de texto adicional para um código de idioma que será usado para substituir o IP obtido através da geolocalização. Dica: este é um ótimo recurso para testar seu aplicativo.
 - [x] O usuário pode ver informações adicionais de geolocalização após o login que inclui pelo menos o endereço IP local, cidade, região, nome do país, CEP, longitude, latitude e fuso horário.


### Resultado! ✨

> Login 

![login]()

> Home

![home]()