import knex from "knex";
import { config } from "../utils/configSQL.js";


export const knexCli = knex(config.db);

knexCli.schema.dropTableIfExists('productosSQL')
            .then(()=>{
                knexCli.schema.createTable('productosSQL', table =>{
                    table.increments('id').primary();
                    table.string('nombre', 50).notNullable();
                    table.string('precio', 50).notNullable();
                    table.string('stock', 50).notNullable();
            })
            .then(()=> console.log('tabla creada'))
            .catch(err=> {
                console.log(err); 
                throw err;
            })
            .finally(()=>{
                knexCli.destroy();
            });
        });
