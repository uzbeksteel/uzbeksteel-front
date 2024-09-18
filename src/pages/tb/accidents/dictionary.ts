import { AccidentStatus } from '@/constants';

export const accidentStatusDictionary: Record<AccidentStatus, string> = {
    [AccidentStatus.NEW]: 'Янги',
    [AccidentStatus.IN_PROCESS]: 'Жараёнда',
    [AccidentStatus.DONE]: 'Кўриб чиқилган',
};
