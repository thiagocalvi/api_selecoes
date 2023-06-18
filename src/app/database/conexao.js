import mysql from 'mysql';

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: 'install',
    database: 'bd_copa'
})

conexao.connect();

/**
 * Executa um codigo sql com ou sem valores
 * @param {string} sql 
 * @param {string=id | [selecao, id]} valores 
 * @param {string} mensagemReject 
 * @returns objeto da Primisse
 */

export const consulta = (sql, valores='', mensagemReject='') => {
    return new Promise((resolve, reject) => {
        conexao.query(sql, valores, (error, result)=>{
            if(error) return reject(mensagemReject==""?error:mensagemReject)

            const row = JSON.parse(JSON.stringify(result));
            
            return resolve(row)
        })
    })
}

export default conexao;