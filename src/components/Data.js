import Calender from "../assets/svg/Calender";
import Home from "../assets/svg/Home";
import Message from "../assets/svg/Message";
import Patient from "../assets/svg/Patient";
import Transaction from "../assets/svg/Transaction";

export const navItemData = [{
    id: 1,
    icon: <Home />,
    name: 'Overview'
}, {
    id: 2,
    icon: <Patient />,
    name: 'Patients',
    href:'http://localhost:3000/'
    },
    {
        id: 3,
        icon: <Calender />,
        name: 'Schedule'
    },
    {
        id: 4,
        icon: <Message />,
        name: 'Message'
    },
    {
        id: 5,
        icon: <Transaction />,
        name: 'Transactions'
    },
]