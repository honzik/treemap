import {Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, BaseEntity} from "typeorm";

@Entity()
export class Note extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 256 })
    title: string;

    @Column("text")
    description: string;

    @Column({type: "varchar", length: 6})
    color: string;

    @ManyToOne(type => Note, note => note.childNotes)
    parentNote: Note;
    
    @OneToMany(type => Note, note => note.parentNote)
    childNotes: Note[];

}
