

export class ContenedorFirebase{
    constructor(){
        this.poductos = productos
    }


async save(obj){
    let doc = obj.doc();
    await doc.create(productos);
  }

 
async getAll(){
  const response = await this.poductos.get()
return response;}
 

  async GetByID(id) {
  let doc = usuarios.doc(`${id}`);
  response = await doc.get();
  
  }

  async updateByID(id, obj) {
  doc = usuarios.doc(`${id}`);
  response = await doc.update({obj})
}

async deleteByid(id) {
  doc = usuarios.doc(`${id}`);
  response = await doc.delete()
 
}

}