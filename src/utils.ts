export default function translate(text: String){
    switch(text){
        case emptyName:
            return '"nome" não pode ficar vázio';
        case emptyEmail:
            return '"email" não pode ficar vázio';
        case validEmail:
            return '"email" deve ser um email válido';
        case alreadyUsedEmail:
            return 'Esse email já foi utilizado';
        case emptyPassword:
            return '"Senha" não pode ficar vázio';
        case EmailNpassword:
            return 'Email ou senha incorreto.';
        default:
            return 'Preencha os campos corretamente';
    }
}
export const emptyName = '"name" is not allowed to be empty';
export const emptyEmail = '"email" is not allowed to be empty';
export const emptyPassword = '"password" is not allowed to be empty';
export const alreadyUsedEmail = 'This email is already used.';
export const validEmail = '"email" must be a valid email';
export const EmailNpassword = 'Incorrect email/password combination.';

