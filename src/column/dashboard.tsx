import UserAvatar from '../components/Avatar/Avatar'
import Button from '../components/Buttons/Button'
import avater from '../assets/Avatar.png'

const columns = (): ReactNode => {
    return [
        {
            name: 'Date',
            key: 'date',
        },
        {
            name: 'Attendiee',
            key: 'serviceType',
            component: () => <UserAvatar url={avater} width={40} height={40} />,
        },
        { name: 'Session Type', key: 'sessionType' },
        {
            name: '',
            key: 'status',
            component: () => (
                <Button
                    variant="outlined"
                    color="secondary"
                    sx={{ width: 160 }}
                >
                    Join Meeting
                </Button>
            ),
        },
    ]
}

export { columns }
