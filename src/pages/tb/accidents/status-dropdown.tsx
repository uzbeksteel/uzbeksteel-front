import { Dropdown, MenuProps, Space } from 'antd';
import { AccidentStatus } from '@/constants';
import { Icon } from '@/components';
import { accidentStatusDictionary } from '@/pages/tb/accidents/dictionary.ts';
import { updateAccidentStatusMutation } from '@/lib/services';

interface StatusDropdownProps {
    currentStatus: AccidentStatus;
    accidentId: string;
}
export const StatusDropdown = ({ currentStatus, accidentId }: StatusDropdownProps) => {
    const { mutate } = updateAccidentStatusMutation();
    const onClick: MenuProps['onClick'] = ({ key }) => {
        mutate({ status: key as AccidentStatus, accidentId });
    };

    const items: MenuProps['items'] = Object.values(AccidentStatus).map((el) => ({
        label: accidentStatusDictionary[el],
        key: el,
    }));
    return (
        <Dropdown menu={{ items, onClick }}>
            <a style={{ color: '#D5680A' }} onClick={(e) => e.preventDefault()}>
                <Space>
                    {accidentStatusDictionary[currentStatus]}
                    <Icon name="ChevronDown" color="#D5680A" />
                </Space>
            </a>
        </Dropdown>
    );
};
