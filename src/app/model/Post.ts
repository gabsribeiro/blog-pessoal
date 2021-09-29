import { Theme } from "./Theme";
import { User } from "./User";

export class Post {
    public idPost: number;
    public title: string;
    public text: string;
    public user: User;
    public relatedTheme: Theme;    
}