import { User } from "entities/user.entity";

export default class UserService {
    static async find(data: any) {
        const users = await User.find({ skip: 2, take: 5 });
        return users
    }

    static async findActive() {
        return await User.find({ isActive: true });
    } 

    static async findById(id: number) {
        return await User.findOne({ id: id });
    } 

    static async findByName(firstName: string, lastName: string) {
        return User.createQueryBuilder("user")
            .where("user.firstName = :firstName", { firstName })
            .andWhere("user.lastName = :lastName", { lastName })
            .getMany();
    }

    static async save(data: any) {
        const user = new User(data.id, data.firstName, data.lastName, data.age, data.isActive)
        await user.save();
    }

    static async delete(data: any) {
        const user = new User(data.id, data.firstName, data.lastName, data.age, data.isActive)
        await user.remove();
    }
}
