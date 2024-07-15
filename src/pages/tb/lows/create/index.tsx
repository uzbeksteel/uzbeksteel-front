import { Drawer, Form } from '@/components';
import { Form as AntdForm, Col, DatePicker, Input } from 'antd';

export const CreateLowDrawer = () => {
    return (
        <Drawer title="Асос яратиш">
            <Form>
                <Col span={24}>
                    <AntdForm.Item required={true} label="Хужжат номи">
                        <Input placeholder="Хужжат номи" />
                    </AntdForm.Item>
                </Col>
                <Col span={24}>
                    <AntdForm.Item required={true} label="Санаси">
                        <DatePicker style={{ width: '100%' }} placeholder="Санаси" />
                    </AntdForm.Item>
                </Col>
                <Col span={24}>
                    <AntdForm.Item required={true} label="СХММваЭ департаменти таркибий бўлинмаси">
                        <Input placeholder="СХММваЭ департаменти таркибий бўлинмаси" />
                    </AntdForm.Item>
                </Col>
                <Col span={24}>
                    <AntdForm.Item required={true} label="Сақлаш жойи (электрон шаклида)">
                        <Input placeholder="Сақлаш жойи (электрон шаклида)" />
                    </AntdForm.Item>
                </Col>
            </Form>
        </Drawer>
    );
};
