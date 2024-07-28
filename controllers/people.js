let { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({ success: true, data: people })
}

const createPeople = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json(
            {   success: false,
                msg: 'Please Provide Name Value'
            }
        )
    }
    res.status(201).json({ success: true, person: name })
}

const createPostman = (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json(
            {   success: false,
                msg: 'Please Provide Name Value'
            }
        )
    }
    res.status(201).send({ success: true, data: [...people, name] })
}

const updatePeople = (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))

    if (!person) {
        return res.status(404).json(
            {   success: false,
                msg: `No person with the id ${id}`
            }
        )
    }
    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json(
        {
            success: true,
            data: newPeople
        }
    )
}

const deletePeople = (req, res) => {
    //const { id } = req.params
    const person = people.find((person) => person.id === Number(req.params.id))

    if (!person) {
        return res.status(404).json(
            {   success: false,
                msg: `No person with the id ${req.params.id}`
            }
        )
    }
    const newPeople = people.filter((person) => person.id !== Number(req.params.id))

    return res.status(200).json(
        {
            success: true,
            data: newPeople
        }
    )
}

module.exports = {
    getPeople,
    createPeople,
    createPostman,
    updatePeople,
    deletePeople
}

