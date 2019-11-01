export class ModeloBoletim {
    constructor(
        public id: number,
        public capa: string,
        public titulo: string,
        public publicadoEm: string,
        public conteudo: string,
        public likes: number,
        public publicadorImagem: string,
        public publicadorNome: string,
        public publicadorId: number
    ) {}
} 
