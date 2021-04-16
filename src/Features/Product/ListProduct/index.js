import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MaterialTable from 'Components/MaterialTable';
import { fetchProduct } from '../ProductSlice';

const ListProductContainer = () => {
    const dispatch = useDispatch();
    const listProduct = useSelector((state) => state.product.list);

    const list = useMemo(() => {
        return listProduct.map((product) => ({ ...product }));
    }, [listProduct]);

    useEffect(() => {
        dispatch(fetchProduct());
    }, []);

    return (
        <div>
            <MaterialTable
                title=''
                columns={[
                    {
                        title: 'ID',
                        field: 'id',
                        grouping: false,
                        removable: false,
                    },
                    { title: 'Tên', field: 'name', grouping: false },
                    {
                        title: 'Xuất xứ',
                        field: 'madeBy',
                    },
                    {
                        title: 'Loại',
                        field: 'type',
                    },
                    {
                        title: 'Giá',
                        field: 'price',
                        align: 'right',
                        grouping: false,
                    },
                ]}
                data={list}
                options={{
                    grouping: true,
                }}
            />
        </div>
    );
};

export default ListProductContainer;
