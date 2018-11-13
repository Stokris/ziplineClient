import React from 'react';
import { Table, Button } from 'reactstrap';


const ZiplineTable = (props) => {

    return (
        <div>
            <h3>Zipline History</h3>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Parks</th>
                        <th>Time</th>
                        <th>People</th>
                        <th>Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.ziplines.map((zipline, id) => {
                            return (
                                <tr key={id}>
                                    <th scope="row">{zipline.id}</th>
                                    <td>{zipline.parks}</td>
                                    <td>{zipline.time}</td>
                                    <td>{zipline.people}</td>
                                    <td>{zipline.price}</td>
                                    <td>
                                        <Button id={zipline.id} onClick={props.delete}>Delete</Button>|
                                        <Button id={zipline.id} onClick={e => props.update(e, zipline)} color="warning">Update</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </div>
    );
}

export default ZiplineTable;