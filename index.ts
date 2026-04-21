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

const guerreiro: classesPersonagens = { nomeClasse: "Guerreiro", hp: 150, mp: 30, forca: 4, agilidade: 2 }
const mago: classesPersonagens = { nomeClasse: "Mago", hp: 100, mp: 100, forca: 5, agilidade: 2 }
const arqueiro: classesPersonagens = { nomeClasse: "Arqueiro", hp: 120, mp: 50, forca: 3, agilidade: 5 }
const paladino: classesPersonagens = { nomeClasse: "Paladino", hp: 130, mp: 70, forca: 3, agilidade: 3 }

const inimigo: classesPersonagens = { nomeClasse: "Dragão Ancião", hp: 180, mp: 0, forca: 5, agilidade: 1 }

const listaPersonagens: Personagem[] = [];

function mostrarMenu() {
  console.clear();
  console.log("======= Menu =======");
  console.log("1. Adicionar personagem");
  console.log("2. Listar personagens");
  console.log("3. Batalhar");
  console.log("4. Sair");
  return prompt("Escolha uma opção:");
}

function adicionarPersonagem() {
  const nome = prompt('Insira o nome do Personagem: ');

  if (nome == null) {
    prompt('Nome inválido. Pressione Enter para continuar');
    return;
  }

  // if (listaPersonagens.length >= 4) {
  //   prompt("Sua party já está cheia!");
  //   return;
  // }

  const novoPersonagem = new Personagem(nome, guerreiro);
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

function atacar() {
  console.clear();
  let dano = listaPersonagens[0].classe.forca * 5;
  let critico = Math.random() * 4;
  if (critico > 1) {
    dano *= 2;
  }
  inimigo.hp -= dano;
  prompt(`Você ataca o inimigo e causa ${dano} de dano! (Pressione Enter para continuar)`);
  receberDano();
}

function curar() {
  let cura = 40;
  let milagre = Math.random() * 4;
  if (milagre > 1) {
    cura = 70;
  }
  listaPersonagens[0].classe.hp += cura;
  listaPersonagens[0].classe.mp -= 30;
  prompt(`Você se cura e recupera ${cura} de HP! (Pressione Enter para continuar)`);
  receberDano();
}

function receberDano() {
  let danoRecebido = inimigo.forca * 5;
  let critico = Math.random() * 4;
  if (critico > 1) {
    danoRecebido *= 1.5;
  }
  let esquiva = (Math.random() * 5) + listaPersonagens[0].classe.agilidade;
  if (esquiva > 7) {
    prompt(`Você esquiva do ataque do inimigo! (Pressione Enter para continuar)`);
    return;
  }
  listaPersonagens[0].classe.hp -= danoRecebido;
  prompt(`Você recebe ${danoRecebido} de dano! (Pressione Enter para continuar)`);
}

function Batalhar() {
  console.clear();
  console.log(`${listaPersonagens[0].nome} é atacado por um dragão!`);

  while (true) {
    console.log(`
╔══════════════════════════════════════════════════════════════╗
║                        BOSS ENCOUNTER                        ║
╠══════════════════════════════════════════════════════════════╣
║                              /\\_/\\\\                          ║
║                     .-""-._ /     \\\\                         ║
║                    /       Y  . .  Y                         ║
║                   /   /\\   |   ^   |                         ║
║                  /   /  \\  |  ---  |                         ║
║                 /___/____\\_|       |                         ║
║                    /  _  \\ |  ___  |                         ║
║                   /  / \\  \\| /   \\ |                         ║
║              ____/__/___\\__V/_____\\|____                     ║
║             /   _    FIRE DRAGON     _  \\                    ║
║            /___/ \\__________________/ \\__\\                   ║
║               /_/                    \\_\\                     ║
╠══════════════════════════════════════════════════════════════╣
║ Nome: Bayle, the Dread                                       ║
║ HP : [${inimigo.hp} / 180]                                             ║
╚══════════════════════════════════════════════════════════════╝
   ${listaPersonagens[0].nome} - Classe: ${listaPersonagens[0].classe.nomeClasse}  
   HP: ${listaPersonagens[0].classe.hp}   | MP: ${listaPersonagens[0].classe.mp} 
   Força: ${listaPersonagens[0].classe.forca} | Agilidade: ${listaPersonagens[0].classe.agilidade}`);

    if (inimigo.hp <= 0) {
      prompt("Parabéns! Você derrotou o vil Bayle! (Pressione Enter para continuar)");
      break;
    }
    if (listaPersonagens[0].classe.hp <= 0) {
      prompt("Você foi morto e devorado por Bayle! Game Over, betinha. (Pressione Enter para continuar)");
      break;
    }
    const opcao = prompt("Escolha sua ação: 1 - Atacar | 2 - Curar");
    if (opcao === "1") {
      atacar();
    }
    if (opcao === "2") {
      curar();
    }
  }
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
    Batalhar();
    continue;
  }

  if (opcao === "4") {
    console.log("Arrivederci!");
    break;
  }

  prompt("[erro] Opção inválida. pressione Enter para continuar.");
}