// rsc
import React from 'react';

const TableHeader = () => {
    return(
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
    );
}

const TableAction = () => {
    return(
    <>
        <button type = 'button' className='btn btn-danger'>Delete</button> {/* btn danger means red colour*/}
        <button type = 'button' className='btn btn-warning'>Edit</button>  {/* btn warning means yellow colour*/}
    </>
    );
}

const TableRow = () => {
    return(
<tbody>
                    <tr>
                        <td>1</td>
                        <td>Test</td>
                        <td><TableAction/></td>
                    </tr>
                     <tr>
                        <td>2</td>
                        <td>Dest</td>
                        <td><TableAction/></td>
                    </tr>
                </tbody>
    );
}

const Table = () => {
    return (
        <div className = "test">
            <table className='table table-dark table-striped'>
                <TableHeader />
                <TableRow/>
            </table>
            
        </div>
    );
};

export default Table;