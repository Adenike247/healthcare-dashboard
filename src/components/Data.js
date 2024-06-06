import { anderson, brown, davis, evans, johnson, martinez, mitchell, nolans, samantha, taylor, thompson, williams } from "../assets/image";
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
export const sideBarData = [{
    id: 1,
    image: williams,
    profileName: 'Emily Williams',
    gender: 'Female, 18',
    
},
    {
        id: 2,
        image: johnson,
        profileName: 'Ryan Johnson',
        gender: 'Male, 45',

    }, {
        id: 3,
        image: mitchell,
        profileName: 'Brandon Mitchell',
        gender: 'Male, 36',

    }, {
        id: 4,
        image: taylor,
        profileName: 'Jessica Taylor',
        gender: 'Female, 28',

    }, {
        id: 5,
        image: samantha,
        profileName: 'Samantha Johnson',
        gender: 'Female, 56',

    }, {
        id: 6,
        image: martinez,
        profileName: 'Ashley Martinez',
        gender: 'Female, 54',

    }, {
        id: 7,
        image: brown,
        profileName: 'Olivia Brown',
        gender: 'Female, 32',

    }, {
        id: 8,
        image: davis,
        profileName: 'Tyler Davis',
        gender: 'Male, 19',

    }, {
        id: 9,
        image: anderson,
        profileName: 'Kevin Anderson',
        gender: 'Male, 30',

    }, {
        id: 10,
        image: thompson,
        profileName: 'Dylan Thompson',
        gender: 'Male, 36',

    }, {
        id: 11,
        image: evans,
        profileName: 'Nathan Evans',
        gender: 'Male, 58',

    }, {
        id: 12,
        image: nolans,
        profileName: 'Mike Nolan',
        gender: 'Male, 31',

    },
]