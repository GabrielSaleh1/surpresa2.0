# Surpresa — 2 meses de noivado 💍

Projeto estático feito para publicar gratuitamente no GitHub Pages.

## 1. Arquivos que você precisa adicionar

Coloque suas imagens em:

`assets/images/`

Usando estes nomes:

- `nos-1.jpg`
- `futuro-casa.jpg`
- `futuro-viagem.jpg`
- `futuro-casa2.jpg`
- `futuro-velhinhos.jpg`

Coloque seus áudios em:

`assets/audio/`

Usando estes nomes:

- `musica.mp3` — música instrumental de fundo
- `mensagem-1.mp3` — sua primeira mensagem de voz
- `mensagem-2.mp3` — sua mensagem final

## 2. Sugestão para os áudios

### mensagem-1.mp3

Use esta parte para falar sobre:
- como você se sente nesses dois meses de noivado;
- o que mudou desde que ela entrou na sua vida;
- como é pensar nela como sua futura esposa;
- como a distância faz você valorizar ainda mais os momentos juntos.

Uma duração entre 1 e 3 minutos funciona muito bem.

### mensagem-2.mp3

Esse áudio deve ser mais curto e funcionar como fechamento.

Uma ideia:

"Todas essas coisas que você acabou de ver ainda não aconteceram.
Mas é justamente isso que faz eu gostar tanto de pensar nelas.
Porque, se depender de mim, a gente ainda vai construir cada uma dessas memórias juntos.
Feliz dois meses de noivado, meu amor.
Eu escolheria você de novo. E de novo. E de novo."

## 3. Publicar no GitHub Pages

1. Crie um repositório no GitHub.
2. Faça upload de todos os arquivos deste projeto.
3. Vá em Settings.
4. Entre em Pages.
5. Em "Build and deployment", escolha "Deploy from a branch".
6. Escolha a branch `main`.
7. Escolha a pasta `/root`.
8. Salve.

O GitHub irá fornecer um endereço parecido com:

`https://seuusuario.github.io/nome-do-repositorio/`

## 4. Personalização

Os textos estão dentro de `index.html`.

Você pode trocar livremente:
- datas;
- anos das memórias futuras;
- textos;
- botões;
- imagens;
- mensagem final.

## 5. Música

Escolha uma música que você tenha direito de usar ou um arquivo instrumental livre/licenciado.

A música começa somente depois que ela toca em "Começar", porque navegadores normalmente bloqueiam autoplay com som.

Quando sua mensagem de voz começa, o site reduz automaticamente o volume da música e aumenta novamente quando o áudio termina.

## 6. Escolha final

Quando ela escolhe a próxima memória, o site salva a opção no `localStorage` do navegador dela.

Isso significa que a escolha fica salva naquele dispositivo, mas não é enviada para você.

Se você quiser receber a resposta automaticamente depois, pode integrar Formspree, Google Forms, Firebase ou outro backend.
