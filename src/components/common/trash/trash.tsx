import { Icon } from '@/components';

type Props = {
    onClick?: (prop: any) => void;
};

export const Trash = ({ onClick }: Props) => <Icon btn danger name="Trash2" onClick={onClick} />;
