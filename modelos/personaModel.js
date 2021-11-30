import mongoose from 'mongoose'

//Definir  el esquema de persona:
const Schema = mongoose.Schema;

export const PersonaSchema = new Schema({  
    nombre: {
        type: String,
        required: "Ingrese nombre"
    },
    apellido: {
        type: String,
        required: "Ingrese nombre"
    },
    email:{
        type: String
    },
    empresa: {
        type: String
    },
    telefono:{
        type: Number
    }, 
    fecha_creacion: {
        type:Date,
        default: Date.now
    }
 })
