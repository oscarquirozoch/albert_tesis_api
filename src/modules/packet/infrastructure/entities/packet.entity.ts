import { BeforeInsert, Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PacketSpecialityEntity } from "./packet-speciality.entity";
import { UserEntity } from "src/modules/user/infrastructure/entities/user.entity";

@Entity('packets')
export class PacketEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(() => UserEntity)
    @JoinColumn({ name: 'user_creator_id' })
    user_creator: number;

    @Column({
        type: 'varchar',
        nullable: true
    })
    code: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    name: string;

    @Column({
        type: 'varchar',
        nullable: true
    })
    description: string;

    @Column({
        type: 'text',
        nullable: true
    })
    relational_codes: string;

    @Column({
        type: 'boolean',
        default: true,
        nullable: false
    })
    status: boolean;

    @CreateDateColumn({
        name: 'created_at',
        nullable: false
    })
    created_at: Date;

    @UpdateDateColumn({
        name: 'updated_at',
        nullable: false
    })
    updated_at: Date;

    @DeleteDateColumn({
        name: 'deleted_at',
        nullable: true
    })
    deleted_at: Date;

    @OneToMany(type => PacketSpecialityEntity, packet_specialities => packet_specialities.packet)
    packet_specialities: PacketSpecialityEntity[];

    @BeforeInsert()
    setTimestamp() {
        this.created_at = new Date();
        this.updated_at = new Date();
    }
}