
import { ILibrary } from '../store/library/libraryModels'



export const testLibrary:ILibrary = {
    _id: "62b4dc559648f34fa61c5304",
    libraryDetails: {
        _id: "62b4dc559648f34fa61c5305",
        name: "Workbench"
    },
    stacks: [
        {
            _id: "62b4e37df0861eb55e1c0a69",
            stackDetails: {
                _id:"62b5267afe5be1d64ae3a813",
                name: "Mern App Project",
                color: "yellow",
            },  
            cards: [
                {
                    _id: "62b5267afe5be1d64ae3a814",
                    cardDetails: {
                        _id: "62a42e5678c46874bb7310a0",
                        title: "Fix backend API",
                        description: " Need to work on setting up controllers folder",
                        completed: false,
                        color: "blue"
                    }
                },
                {
                    _id: "62b5267afe5be1d64ae3a834",
                    cardDetails: {
                        _id: "62a42e5678c46874bb7312a2",
                        title: "Build Styled Components for Frontend",
                        description: "Learn and use styled components in the front end",
                        completed: false,
                        color: "green"
                    }
                },
                {
                    _id: "62b5267afe5be1d64ae32144",
                    cardDetails: {
                        _id: "62a42e5678c46874bb7310a0",
                        title: "Learn user authentication",
                        description: "Learn jwt tokens",
                        completed: false,
                        color: "purple" 
                    }
                }
            ]
        },
        {
            _id: "62b4e37df0861eb55e1c0a75",
            stackDetails: {
                _id:"62b5267afe5be1d64ae3a813",
                name: "Mern App Project",
                color: "red",
            },  
            cards: [
                {
                    _id: "62a26d72959cb557ad2c18cc",
                    cardDetails: {
                        _id: "62a2b1b3ab820d6aaf3d4514",
                        title: "Fix backend API",
                        description: " Need to work on setting up controllers folder",
                        completed: false,
                        color: "orange"
                    }
                },
                {
                    _id: "62a2afa70273381276c10c10",
                    cardDetails: {
                        _id: "62a2b087d2e0678842eca8ff",
                        title: "Build Styled Components for Frontend",
                        description: "Learn and use styled components in the front end",
                        completed: false,
                        color: "red"
                    }
                },
                {
                    _id: "62a42e4b78c46874bb731099",
                    cardDetails: {
                        _id: "62a42e4b78c46874bb73109a",
                        title: "Learn user authentication",
                        description: "Learn jwt tokens",
                        completed: false,
                        color: "yellow"
                    }
                }
            ]
        }
    ]

}