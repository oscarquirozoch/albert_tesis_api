import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SpecialityEntity } from "src/modules/speciality/infrastructure/entities/speciality.entity";
import { PacketEntity } from "./packet.entity";

@Entity('packet_specialities')
export class PacketSpecialityEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({
        type: 'integer',
        nullable: false
    })
    sessions: number;

    @ManyToOne(() => PacketEntity, (packet) => packet.packet_specialities)
    @JoinColumn({ name: 'packet_id' })
    packet: PacketEntity;

    @ManyToOne(() => SpecialityEntity, (speciality) => speciality.packet_specialities)
    @JoinColumn({ name: 'speciality_id' })
    speciality: SpecialityEntity;

}