import React from 'react';
import SovosTable from 's1-ui/sovos-table';

const columns = [
  {
    title: 'ID',
    id: 1,
    component: ({ content }) => <div>{ content.id }</div>
  },
  {
    title: 'First',
    id: 2,
    component: ({ content }) => <div>{ content.first }</div>
  },
  {
    title: 'Last',
    id: 3,
    component: ({ content }) => <div>{ content.last }</div>,
    width: 'greedy'
  }
];

const data = Array.from(Array(25).keys()).map((v) => {
  const id = v + 1;
  return {
    id,
    first: `first ${id}`,
    last: `last ${id}`
  };
});

const CustomersPage = () => (
  <div>
    <SovosTable
      columns={ columns }
      data={ data }
      selectable={ false }
    />
  </div>
);

export default CustomersPage;
