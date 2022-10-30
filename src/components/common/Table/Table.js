import React from "react";
import "./Table.css"

const Table = ({title,columns,rows,callBackRow,isRowHoverable}) => {

    return  rows ? <table>
            <caption>{title}</caption>
            <thead>
                <tr>
                    {columns?.map((column,headerId) => <th key={headerId} >{column.columnName}</th>)}
                </tr>
            </thead>
            <tbody>
                {rows?.map((row,rowId) =>
                    (<tr className={""+(isRowHoverable && "table-row")} key={rowId} onClick={() => callBackRow(row)} >
                        {
                            Object
                            .entries(row)
                            .filter(([key, value]) => columns?.find(column => key === column.property) )
                            .map(
                                ([key, value], colId) => 
                                    <td
                                        key={colId} 
                                        data-label={columns?.find(column => key === column.property)?.columnName}
                                    >{key === "dateCreated" ? new Date(value).toUTCString() : value}</td>
                            )
                        }
                    </tr>)
                )}
            </tbody>
        </table>
        : <h1 style={{textAlign: "center"}} >Nothing to display</h1>
}

export default Table;