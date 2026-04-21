class Personagem {
  private _nome: string;
  private _classe: classesPersonagens;

  constructor(nome: string, classe: classesPersonagens) {
    this._nome = nome;
    this._classe = classe;
  }

  get nome(): string {
    return this._nome;
  }

  get classe(): classesPersonagens {
    return this._classe;
  }

  set classe(novaClasse: classesPersonagens) {
    this._classe = novaClasse;
  }
}

type classesPersonagens = {
  nomeClasse: string;
  hp: number;
  mp: number;
  forca: number;
  agilidade: number;
}

const pelado: classesPersonagens = { nomeClasse: "Pelado", hp: 50, mp: 0, forca: 1, agilidade: 1 }
const guerreiro: classesPersonagens = { nomeClasse: "Guerreiro", hp: 150, mp: 30, forca: 5, agilidade: 2 }
const mago: classesPersonagens = { nomeClasse: "Mago", hp: 80, mp: 100, forca: 2, agilidade: 3 }
const arqueiro: classesPersonagens = { nomeClasse: "Arqueiro", hp: 120, mp: 50, forca: 3, agilidade: 5 }
const paladino: classesPersonagens = { nomeClasse: "Paladino", hp: 130, mp: 70, forca: 3, agilidade: 3 }

const listaPersonagens: Personagem[] = [];

function mostrarMenu() {
  console.clear();
  console.log("======= Menu =======");
  console.log("1. Adicionar personagem");
  console.log("2. Listar personagens");
  console.log("3. Sair");
  return prompt("Escolha uma opção:");
}

function adicionarPersonagem() {
  const nome = prompt('Insira o nome do Personagem: ');

  if (nome == null) {
    prompt('Nome inválido. Pressione Enter para continuar');
    return;
  }

  const novoPersonagem = new Personagem(nome, pelado);
  listaPersonagens.push(novoPersonagem);

  console.clear();
  console.log("=== CLASSES DISPONÍVEIS ===");
  console.log(`1 - Guerreiro | HP: ${guerreiro.hp} | MP: ${guerreiro.mp} | Força: ${guerreiro.forca} | Agilidade: ${guerreiro.agilidade}`);
  console.log(`2 - Mago      | HP: ${mago.hp} | MP: ${mago.mp} | Força: ${mago.forca} | Agilidade: ${mago.agilidade}`);
  console.log(`3 - Arqueiro  | HP: ${arqueiro.hp} | MP: ${arqueiro.mp} | Força: ${arqueiro.forca} | Agilidade: ${arqueiro.agilidade}`);
  console.log(`4 - Paladino  | HP: ${paladino.hp} | MP: ${paladino.mp} | Força: ${paladino.forca} | Agilidade: ${paladino.agilidade}`);

  const entrada = prompt("Selecione a classe: ");

  if (!entrada) {
    prompt("Classe inválida.");
    return;
  }
  const selecionarClasse = Number(entrada);

  if (selecionarClasse === null) {
  prompt('Classe inválida. Pressione Enter para continuar');
  return;
  }
  if (selecionarClasse === 1) {
    novoPersonagem.classe = guerreiro;
  }
  if (selecionarClasse === 2) {
    novoPersonagem.classe = mago;
  }
  if (selecionarClasse === 3) {
    novoPersonagem.classe = arqueiro;
  }
  if (selecionarClasse === 4) {
    novoPersonagem.classe = paladino;
  }
}

function listarPersonagens() {

  console.clear();
  console.log('======== Personagens ========');

  if (listaPersonagens.length === 0) {
    console.log('Nenhum personagem adicionado');
    prompt('Pressione Enter para continuar');
    return;
  }

  for (const personagem of listaPersonagens) {
    console.log(
      '- ', personagem.nome, ` - Classe: ${personagem.classe.nomeClasse} | HP: ${personagem.classe.hp} | MP: ${personagem.classe.mp} | Força: ${personagem.classe.forca} | Agilidade: ${personagem.classe.agilidade}`);
  }

  prompt('Pressione Enter para continuar');
}

while (true) {
  const opcao = mostrarMenu();

  if (opcao === null) {
    console.log("[erro] Opção inválida.");
    continue;
  }

  if (opcao === "1") {
    adicionarPersonagem();
    continue;
  }

  if (opcao === "2") {
    listarPersonagens();
    continue;
  }

  if (opcao === "3") {
    console.log("Arrivederci!");
    break;
  }

  prompt("[erro] Opção inválida. pressione Enter para continuar.");
}