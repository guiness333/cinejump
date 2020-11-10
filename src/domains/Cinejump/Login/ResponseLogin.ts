export default interface Response {
    user: User,
    token: string;
}

interface User {
    id?: string;
    name?: string;
    email?: string;
    created_at?: string;
    updated_at?: string;
}
