import { getEmailAuth, getId, getToken } from 'store/auth/selectors';
import { useAppSelector } from './redux/useAppSelector';

interface IHookUseAuth {
    isAuth: boolean;
    email: string | null;
    id: string | null;
    token: string;
}

export const useAuth = (): IHookUseAuth => {
    const id = useAppSelector(getId);
    const email = useAppSelector(getEmailAuth);
    const token = useAppSelector(getToken);

    return {
        isAuth: !!email,
        email,
        id,
        token,
    };
};
