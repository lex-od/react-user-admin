import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useSelector } from 'react-redux';
import css from './UserTable.module.scss';
import { usersSls } from '../../../redux/users';

const UserTable = () => {
    const users = useSelector(usersSls.getAllUsers);

    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>№</TableCell>
                    <TableCell>Аватар</TableCell>
                    <TableCell>Имя</TableCell>
                    <TableCell>Возраст</TableCell>
                    <TableCell>Статус</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map(({ id, avatar, name, age, status }, index) => (
                    <TableRow className={css.tableRow} key={id}>
                        <TableCell>{index}</TableCell>
                        <TableCell>{avatar}</TableCell>
                        <TableCell>{name}</TableCell>
                        <TableCell>{age}</TableCell>
                        <TableCell>{status}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default UserTable;
