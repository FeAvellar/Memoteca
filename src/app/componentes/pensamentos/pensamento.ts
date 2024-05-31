//Dentro de pensamento.ts, criaremos uma interface de nome Pensamento, com inicial maiúscula. Nesta interface, colocaremos todos os atributos e os respectivos formatos esperados.
//Também incluiremos a classe export, para tornar essa interface acessível à outras classes. Se houvessem outros atributos em nosso package.json, eles também seriam incluídos na interface.
// A interface ou tipagem que construímos é como um contrato que deve ser seguido por ambas as partes — front-end e back-end.


export interface Pensamento {  //Incluiremos a classe export, para tornar essa interface acessível (visível) à outras classes.
  id?: number
  conteudo: string
  autoria: string
  modelo: string
}
