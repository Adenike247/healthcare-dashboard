import { anderson, brown, davis, evans, johnson, martinez, mitchell, nolans, respiration, samantha, taylor, temperature, thompson, williams } from "../assets/image";
import BirthIcon from "../assets/svg/BirthIcon";
import Calender from "../assets/svg/Calender";
import FemaleIcon from "../assets/svg/FemaleIcon";
import Home from "../assets/svg/Home";
import InsuranceIcon from "../assets/svg/InsuranceIcon";
import Message from "../assets/svg/Message";
import Patient from "../assets/svg/Patient";
import PhoneIcon from "../assets/svg/PhoneIcon";
import Transaction from "../assets/svg/Transaction";

export const navItemData = [{
    id: 1,
    icon: <Home />,
    name: 'Overview'
}, {
    id: 2,
    icon: <Patient />,
    name: 'Patients',
    href: 'http://localhost:3000/'
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
export const patientData = [{
    id: 1,
    icon: <BirthIcon />,
    upperText: 'Date Of Birth',
    bottomText: 'August 23, 1996'
},
{
    id: 2,
    icon: <FemaleIcon />,
    upperText: 'Gender',
    bottomText: 'Female'
}, {
    id: 3,
    icon: <PhoneIcon />,
    upperText: 'Contact Info.',
    bottomText: '(415) 555-1234'
}, {
    id: 4,
    icon: <PhoneIcon />,
    upperText: 'Emergency Contacts',
    bottomText: '(415) 555-5678'
},
{
    id: 4,
    icon: <InsuranceIcon />,
    upperText: 'Insurance Provider',
    bottomText: 'Sunrise Health Assurance'
},
]
export const labResult = [{
    id: 1,
    testName: 'Blood Tests'
},
{
    id: 2,
    testName: 'CT Scans'
}, {
    id: 3,
    testName: 'Radiology Reports'
}, {
    id: 4,
    testName: 'X-Rays'
}, {
    id: 5,
    testName: 'Urine Test'
},
]
export const tableData = [{
    id: 1,
    problemDiagnosis: 'Hypertension',
    description: 'Chronic high blood pressure',
    status:'Under Observation'
},
    {
        id: 2,
        problemDiagnosis: 'Type 2 Diabetes',
        description: 'Insulin resistance and elevated blood sugar',
        status: 'Cured'
    },
    {
        id: 3,
        problemDiagnosis: 'Asthma',
        description: 'Recurrent episodes of bronchial constriction',
        status: 'Inactive'
    },
    {
        id: 4,
        problemDiagnosis: 'Hypertension',
        description: 'Chronic high blood pressure',
        status: 'Under Observation'
    },
]
export const checkupData = [{
    id: 1,
    logo: respiration,
    title:'Respiratory Rate',
    result: '20 bpm',
    status: 'Normal',
    background:'#E0F3FA'
},
    {
        id: 2,
        logo: temperature,
        title: 'Temperature',
        result: '98.6°F',
        status: 'Normal',
        background: '#FFE6E9'
    },
    {
        id: 3,
        logo: respiration,
        title: 'Heart Rate',
        result: '78 bpm',
        status: 'Lower than Average',
        background: '#FFE6F1'
    },
]