export type ResponceType = {
    success : number,
    message : string
}

export type BodyType = {
    name: string | null | undefined, 
    last_name: string | null | undefined, 
    phone: string | null | undefined, 
    country: string | null | undefined, 
    zip: string | null | undefined, 
    product: string | null | undefined, 
    address: string | null | undefined, 
    comment: string | null | undefined,
}