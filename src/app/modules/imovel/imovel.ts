export interface Imovel {
    _id? : string;
    tipo: string;
    descricao: string;
    preco: number;
    locacao_venda: string;
    endereco: string;
    ativo: boolean;
    proprietario? : string;
}
