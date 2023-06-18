import { consulta } from "../database/conexao.js";
class SelecaoRepository{

    create(selecoe){
        const sql = "INSERT INTO selecoes SET ?"
        return consulta(sql, selecoe, "Error");
    }
    
    findAll(){
        const sql = "SELECT * FROM selecoes";
        return consulta(sql, "Error")
    }
    
    findById(id){
        const sql = `SELECT * FROM selecoes WHERE id=?`;
        return consulta(sql, id, "Error")   
    }
    
    update(id, selecao){
        const sql = "UPDATE selecoes SET ? WHERE id=?"
        return consulta(sql, [selecao, id], "Error")
    }
    
    delete(id){
        const sql = "DELETE FROM selecoes WHERE id=?"
        return consulta(sql, id, "Error")
    }
}

export default new SelecaoRepository();
