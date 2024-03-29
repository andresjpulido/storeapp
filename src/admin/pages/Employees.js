import React, { useEffect, useRef, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { readAllEmployee, deleteEmployee } from '../../redux/actions/employeeActions';
import { ALERT } from '../../redux/constants/ActionTypes';

export default function Employees() {
    const employees = useSelector((state) => state.employeeReducer.employees);

    const [numberRows, setNumberRows] = useState(0);

    const dispatch = useDispatch();
    let history =  useNavigate();

    useEffect(() => {
        dispatch(readAllEmployee());
        dispatch({ type: ALERT, payload: null });
    }, [dispatch]);

    const table = useRef(null);

    const columns = [
        {
            dataField: 'firstName',
            text: 'Name',
        },
        {
            dataField: 'lastName',
            text: 'Last Name',
            sort: true,
        },
    ];

    const handleNew = (e) => {
        e.preventDefault();
        history('/employee');
    };

    const deleteRows = async () => {
        const rows = table.current.selectionContext.selected;
        console.log(rows);
        await dispatch(deleteEmployee(rows));
    };

    const onRowSelect = (row, isSelect, rowIndex, e) => {
        if (isSelect) setNumberRows(numberRows + 1);
        else setNumberRows(numberRows - 1);
    };

    const onRowSelectAll = (isSelect, rows, e) => {
        if (isSelect) setNumberRows(rows.length);
        else setNumberRows(0);
    };

    const selectRow = {
        mode: 'checkbox',
        onSelect: onRowSelect,
        onSelectAll: onRowSelectAll,
    };

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            history.push('/employee/' + row.id);
        },
        onMouseEnter: (e, row, rowIndex) => {},
    };

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <h4>Employees</h4>

            <button id="b1" className="btn btn-link float-right" type="button" onClick={handleNew}>
                Create new
            </button>

            {numberRows > 0 && employees.length > 0 && (
                <button id="deleter" className="btn btn-link float-right" type="button" onClick={deleteRows}>
                    Delete
                </button>
            )}

            <BootstrapTable
                striped
                hover
                keyField="id"
                data={employees}
                columns={columns}
                selectRow={selectRow}
                ref={table}
                pagination={paginationFactory()}
                rowEvents={rowEvents}
            />
        </div>
    );
}
