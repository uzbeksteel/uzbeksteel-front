export interface TabProps<T> {
    onFinish: (values: T) => void;
}

export interface IProps {
    isPending: boolean;
    onFinish: any;
}
