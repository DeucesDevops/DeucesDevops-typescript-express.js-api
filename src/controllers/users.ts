import { UserModel } from "model/users";


export const getUsers = () => UserModel.find()

export const getUserByEmail = (email: string) => UserModel.findOne({ email })

export const getUserBySessionToken = (sessionToken: string) => UserModel.findOne({
    "authentication.sessionToken": sessionToken,
})

export const getUserById = (id: string) => UserModel.findById(id)

export const createUser = (values: Record<string, any>) => new UserModel(values)
    .save()
    .then((user) => user.toObject())

export const updateUser = (id: string, values: Record<string, any>) => UserModel.findByIdAndUpdate(id, values)

export const deleteUser = (id: string) => UserModel.findById({_id: id})

