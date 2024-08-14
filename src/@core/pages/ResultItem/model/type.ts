export type IResultItem = {
    id: string,
    comment: string,
    rate:number ,
    create_data: string,
    user_id:{
        id: string,
        full_name: string,
        image_link: string,

    }
}