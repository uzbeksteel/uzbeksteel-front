import { useQuery } from '@tanstack/react-query';

export const useGetQuery = (key: string, fn: () => void) =>
    useQuery({
        queryKey: [key],
        queryFn: fn,
    });
