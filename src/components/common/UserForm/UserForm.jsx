import { Button, TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import { createAvatar } from '@dicebear/avatars';
import * as avatarStyles from '@dicebear/avatars-identicon-sprites';

import css from './UserForm.module.scss';
import routes from '../../../routes';

const userSchema = Yup.object().shape({
    name: Yup.string().min(2, 'Не менее 2 символов').required('Обязательно'),
    age: Yup.number()
        .typeError('Введите число')
        .integer('Введите целое число')
        .min(1, 'От 1')
        .max(100, 'До 100')
        .required('Обязательно'),
});

const UserForm = ({ onSubmit, initValues = {} }) => {
    const formik = useFormik({
        initialValues: {
            name: initValues.name || '',
            age: initValues.age ? String(initValues.age) : '',
        },
        validationSchema: userSchema,
        onSubmit: ({ name, age }) => {
            onSubmit({
                ...initValues,
                id: initValues.id || shortid(),
                avatar: createAvatar(avatarStyles, {
                    seed: `${name} ${age}`,
                }),
                name,
                age: Number(age),
            });
        },
    });

    return (
        <form className={css.form} onSubmit={formik.handleSubmit} autoComplete="off">
            <div className={css.fieldsWrapper}>
                <TextField
                    className={css.nameField}
                    id="name"
                    name="name"
                    label="Имя"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && !!formik.errors.name}
                    helperText={formik.touched.name && formik.errors.name}
                />
                <TextField
                    className={css.ageField}
                    id="age"
                    name="age"
                    label="Возраст"
                    value={formik.values.age}
                    onChange={formik.handleChange}
                    error={formik.touched.age && !!formik.errors.age}
                    helperText={formik.touched.age && formik.errors.age}
                />
            </div>

            <div className={css.buttonsWrapper}>
                <Button
                    className={css.saveBtn}
                    type="submit"
                    variant="contained"
                    size="large"
                >
                    Сохранить
                </Button>
                <Button component={Link} to={routes.home} variant="outlined" size="large">
                    Отменить
                </Button>
            </div>
        </form>
    );
};

export default UserForm;
