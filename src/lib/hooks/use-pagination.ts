import { useState } from 'react';
import { PaginationProps } from 'antd';

export const usePagination = (total: number) => {
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  const showTotal: PaginationProps['showTotal'] = (total) => `Total ${total} items`;

  const onChange: PaginationProps['onChange'] = (page) => {
    setCurrent(page);
  };

  const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, size) => {
    setCurrent(current);
    setPageSize(size);
  };

  return {
    onShowSizeChange,
    onChange,
    showTotal,
    total,
    current,
    pageSize,
    showSizeChanger: true,
  };
};
