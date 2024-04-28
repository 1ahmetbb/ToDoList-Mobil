import { object, string } from 'yup';

    let validationSchema = object({
        email: string().email('Doğru bir e-mail girildiğinden emin misiniz?').required('Geçerli bir e-mail girilmeli.'),
        password: string().min(6, 'Şifre minimum 6 karakterden oluşmalı.').max(16, 'Şifre maximum 16 karakterden oluşmalı.'),
        //rpassword: string().oneOf([Yup.ref('password'), null], 'Şifreler uyuşmamaktadır.')
    });


export const validation = async (userInfo) => {
    try {
        await validationSchema.validate(userInfo)
        return true
    } catch (error) {
        return {
            status: false,
            message: error.message
        }
    }
}