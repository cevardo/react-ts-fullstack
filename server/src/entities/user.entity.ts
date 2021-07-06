import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstName: string;
    
    @Column()
    lastName: string;
    
    @Column()
    age: number;

    @Column()
    isActive: boolean

    constructor(id: number, firstName: string, lastName: string, age: number, isActive: boolean) { 
        super() 
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.isActive = isActive
    }
}
