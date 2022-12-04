export class UserSchema extends Realm.Object {
  static schema = {
    name: "Users",

    properties: {
      _id: "string",
      nome: "string",
      //sobrenome: "string",
      email: "string",
      password: "string",
      //telefone: "string?",
      //sexo: "string",
      //cpf: "string",
      //cep: "string?",
      //endereco: "string",
      //nascimento: "date",
      createdAt: "date",
    },

    primaryKey: "_id",
  };
}
