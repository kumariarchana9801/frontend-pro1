import React from 'react'
import { Table } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

function Tickettable({ticket}) {
  return (
	<Table  striped bordered hover>
		<thead>
			<tr>
				<th>#</th>
				<th>Subjects</th>
				<th>Status</th>
				<th>Opened date</th>
			</tr>
		</thead>
		<tbody>
			{ticket.length && ticket.map((row,i)=>(
			<tr key={row.id}>
				<td>{row.id}</td>
				<td>{row.subject}</td>
				<td>{row.status}</td>
				<td>{row.addedAt}</td>
			</tr>))
			}
				<tr>
            <td colSpan="4" className="text-center">
              No ticket show{" "}
            </td>
          </tr>
			
		</tbody>
	</Table>
  )
}

Tickettable.propTypes={
	tickets:PropTypes.array.isRequired,
}

export default Tickettable