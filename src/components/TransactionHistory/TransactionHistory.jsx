import PropTypes from 'prop-types';
import { StyleTable, StyledTableHeader, StyledTableData, StyledTableRow } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return (
        <StyleTable>
            <thead>
                <tr>
                    <StyledTableHeader>Type</StyledTableHeader>
                    <StyledTableHeader>Amount</StyledTableHeader>
                    <StyledTableHeader>Currency</StyledTableHeader>
                </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <StyledTableRow key={id}>
                            <StyledTableData>{type}</StyledTableData>
                            <StyledTableData>{amount}</StyledTableData>
                            <StyledTableData>{currency}</StyledTableData>
                            
                        </StyledTableRow>
                    )
                })}
            </tbody>
        </StyleTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,

    }))
};
