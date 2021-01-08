export default function translate(text: String){
    switch(text){
        case emptyName:
            return 'Preencha o campo do Nome';
        case emptyEmail:
            return 'Preencha o campo de Email';
        case validEmail:
            return 'Você precisa fornecer um email válido';
        case alreadyUsedEmail:
            return 'Esse email já foi utilizado';
        case emptyPassword:
            return 'Preencha o campo da Senha';
        case EmailNpassword:
            return 'Email ou senha incorreto.';
        default:
            return 'Ocorreu um erro ao fazer login. Verifique suas credenciais.';
    }
}
export const emptyName = '"name" is not allowed to be empty';
export const emptyEmail = '"email" is not allowed to be empty';
export const emptyPassword = '"password" is not allowed to be empty';
export const alreadyUsedEmail = 'This email is already used.';
export const validEmail = '"email" must be a valid email';
export const EmailNpassword = 'Incorrect email/password combination.';

