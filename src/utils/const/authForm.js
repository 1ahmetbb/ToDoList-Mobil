import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export const loginForm = [
    {
        id: 1,
        title: 'E-mail Adresi',
        type: 'email',
        icon: <Entypo name="mail" size={20} color="#868E96" />,
    },
    {
        id: 2,
        title: 'Şifre',
        type: 'password',
        icon: <Entypo name="key" size={20} color="#868E96" />,
        isSecure: true,
        isSecureIcon:
        {
            visible:<Entypo name="eye" size={20} color="#868E96" />,
            notVisible:<Entypo name="eye-with-line" size={20} color="#868E96" />
        }
    }
];

export const registerForm = [
    {
        id: 1,
        title: 'E-mail Adresi',
        type: 'email',
        icon: <Entypo name="mail" size={20} color="#868E96" />,
    },
    {
        id: 2,
        title: 'Şifre',
        type: 'password',
        icon: <Entypo name="key" size={20} color="#868E96" />,
        isSecure: true,
        isSecureIcon:
        {
            visible:<Entypo name="eye" size={20} color="#868E96" />,
            notVisible:<Entypo name="eye-with-line" size={20} color="#868E96" />
        }
    },
    {
        id: 3,
        title: 'Şifre Tekrarı',
        type: 'rpassword',
        icon: <Entypo name="key" size={20} color="#868E96" />,
        isSecure: true,
        isSecureIcon:
        {
            visible:<Entypo name="eye" size={20} color="#868E96" />,
            notVisible:<Entypo name="eye-with-line" size={20} color="#868E96" />
        }
    }
];
