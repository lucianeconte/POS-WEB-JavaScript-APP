export interface Imovel {
    _id? : string;
    tipo: string;
    descricao: string;
    locacao_venda: string;
    preco: number;
    ativo: boolean;
    endereco: string;
    proprietario? : string;
}
