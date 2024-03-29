import React, { useEffect, useRef, useState } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { useDispatch, useSelector } from 'react-redux';
import { getHours, delHours } from '../../redux/actions/hourActions';
import { dateFormatter } from '../../utils/formatters';
import { useNavigate } from 'react-router-dom';
import { ALERT } from '../../redux/constants/ActionTypes';

export default function ExtraHours() {
    const unpaidHours = useSelector((state) => state.hourReducer.unpaidHours);
    const user = useSelector((state) => state.authReducer.user);

    const [numberRows, setNumberRows] = useState(0);

    const dispatch = useDispatch();
    let history = useNavigate();

    useEffect(() => {
        dispatch(getHours(user.id_employee));
        dispatch({ type: ALERT, payload: null });
    }, [dispatch, user]);

    const table = useRef(null);

    const columns = [
        {
            dataField: 'start_date',
            text: 'Date',
            formatter: dateFormatter,
        },
        {
            dataField: 'amount',
            text: 'Hours',
            sort: true,
        },
        {
            dataField: 'activity',
            text: 'Activity',
        },
    ];

    const rowEvents = {
        onClick: (e, row, rowIndex) => {
            console.log(`clicked on row with index: ${row.id} - ${rowIndex}`);
            history('/newea/' + row.id);
        },
        onMouseEnter: (e, row, rowIndex) => {
            //console.log(`enter on row with index: ${rowIndex}`);
        },
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push('/newea');
    };

    const deleteRows = async () => {
        // console.log(table)
        // console.log(table.current.selectionContext.selected)
        const rows = table.current.selectionContext.selected;
        await dispatch(delHours(rows, user.username));
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

    return (
        <div className="container">
            <br />
            <br />
            <br />
            <h4>Worked Hours</h4>

            {unpaidHours.length > 0 ? (
                <BootstrapTable
                    striped
                    hover
                    keyField="id"
                    data={unpaidHours}
                    columns={columns}
                    rowEvents={rowEvents}
                    selectRow={selectRow}
                    ref={table}
                />
            ) : (
                <div className="alert alert-light" role="alert">
                    No results!
                </div>
            )}

            <button id="move" className="btn btn-secondary" type="button" onClick={handleSubmit}>
                New
            </button>
            {numberRows > 0 && unpaidHours.length > 0 && (
                <button id="deleter" className="btn btn-secondary float-right" type="button" onClick={deleteRows}>
                    Delete
                </button>
            )}
        </div>
    );
}
