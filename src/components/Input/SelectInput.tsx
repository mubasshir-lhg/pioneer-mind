import { TextField, TextFieldProps } from '@mui/material'
import { KeyboardArrowDown } from '@mui/icons-material'

export default function SelectInput(props: TextFieldProps): ReactNode {
    const { value, onChange, size, placeholder, children, ...rest } = props

    return (
        <TextField
            select
            fullWidth
            value={value}
            onChange={onChange}
            SelectProps={{
                IconComponent: KeyboardArrowDown,
                displayEmpty: true,
                renderValue: (val: string) => (val !== '' ? val : placeholder),
                inputProps: { MenuProps: { disableScrollLock: true } },
                sx: { color: '#fff', textAlign: 'left' },
            }}
            size={size}
            variant="outlined"
            sx={{ mb: 2 }}
            {...rest}
        >
            {children}
        </TextField>
    )
}
