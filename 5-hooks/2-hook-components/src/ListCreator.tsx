import { FC, useEffect, useRef } from 'react';

export interface ListItem {
  id: number;
}

export interface ListItems {
  listItems?: Array<ListItem>;
}

const ListCreator: FC<ListItems> = ({ listItems }) => {
  let renderItems = useRef<Array<JSX.Element> | undefined>();

  useEffect(() => {
    console.log('list items updated');
    renderItems.current = listItems?.map((item, index) => <div key={item.id}>{item.id}</div>);
  }, [listItems]);

  console.log('rendering list creator');
  return <>{renderItems.current}</>;
};

export default ListCreator;
