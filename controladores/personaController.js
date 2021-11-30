import mongoose from 'mongoose'
import {PersonaSchema}  from '../modelos/personaModel.js'

//crear objeto persona basada en el schema:
const Persona = mongoose.model('Persona' , PersonaSchema)

//crear accion para registrar nueva Persona:

export const addPersona =  (request, response) => {
    //creando nueva persona:
    let p = new Persona(request.body)
    //grabar la nueva persona
    p.save((error, p) => {
        if (error) {
            response.send(error)
        } else {
            response.json(p)
        }
    })
}

//crear accion para listar personas

export const getPersona =  (request, response) => {
    Persona.find({}, (error, personas) =>{
        if (error) {
            response.send(error)
        } else {
            response.json(personas)
        }
    })
}

// accion para obtener una persona por su id

export const getPersonaById =  (request, response) => {
    Persona.findById(request.params.personaid, (error, persona) =>{
        if (error) {
            response.send(error)
        } else {
            response.json(persona)
        }
    })
}

// accion para actualizar persona por id

export const updatePersona =  (request, response) => {
    Persona.findOneAndUpdate({_id: request.params.personaid},
        request.body ,
        {
            new:true
        },
        (error, persona)=>{
            if (error) {
                response.send(error)
            } else {
                response.json(persona)
            }
        })
}

// delete

export const deletePersona =  (request, response) => {
    Persona.deleteOne({_id: request.params.personaid},
        (error, persona)=>{
            if (error) {
                response.send(error)
            } else {
                response.json({mensaje: "borrado melo"})
            }
        })
}