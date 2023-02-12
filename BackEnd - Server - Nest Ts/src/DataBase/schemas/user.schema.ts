import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type UserDocument = User & Document

@Schema()
export class User {

    @Prop()
    username: string;

    @Prop()
    mail: string;

    @Prop()
    uuid: number;

    @Prop()
    password: string

    @Prop()
    avatar: string

    @Prop()
    ipp: string

    @Prop()
    bio: string

    @Prop()
    country: string

    @Prop()
    datareg: string

    @Prop([])
    UserData: {
        GameData: {
            Avg: number
            Tournaments: number
            Matchs: number
            MapsPlay: number
            Win: number
            Loser: number
            Kills: number
            Deads: number
            Accuracy: number   
            HistoryMatchs: []
        }
        CardInfo: {
            CardID: number
            Subcribe: string
            RefUrl: string
            RefUser: number
            money: number
            Transactions: []
        }
        FriendsData: {
            Friends: []
            FriendsToAccept: []
            BlackList: []
        }
    }

}

export const UserSchema = SchemaFactory.createForClass(User)