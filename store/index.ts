import { defineStore } from "pinia";

import {countries, countriesNoStates, affairs} from "~/data";
// import { Handler } from "~/services/api.handle";
// import { useSnFetch } from "~/composables/snFetch";

const expiryDate = new Date();
expiryDate.setDate(expiryDate.getDate() + 3);
const expiryTime = new Date(expiryDate).getTime()
// const handler = new Handler();
export const useStore = defineStore({
    id: "main",
    state: () => ({
        loading: true,
        navigation: [
            { name: "Name", href: "/auth/register", icon: 'name' },
            { name: "School", href: "/auth/register/school", icon:  'school' }/* ,
            { name: "Bio&info", href: "/auth/register/bio-info", icon:  'bio-info' },
            { name: "Image", href: "/auth/register/image", icon:  'image' },
            { name: "Confirm", href: "/auth/register/confirm", icon: 'confirm' }, */
        ],
        pageContent: [
            {
                route: "/auth/login",
                title: "Login to your ScoutSity Account",
                subTitle: "Connect with  peers and like-minds",
            },
            {
                route: "/auth/register",
                title: "Create a new look",
                subTitle:
                    "A Look is an account on ScoutSity. When someone creates a Look, that person becomes a Sitizen of ScoutSity. Use the progress bar to navigate between steps.",
            },
            {
                route: "/auth/register/school",
                title: "Create a new look",
                subTitle:
                    "A school represents any institution where you received a formal education. It could be a high school, a college, a university, a polytechnic,an academy, etc.",
            }/* ,
            {
                route: "/auth/register/bio-info",
                title: "Create a new look",
                subTitle:
                    "What would you like people to know about you? This information would enable you connect with others and have a better experience on the platform",
            },
            {
                route: "/auth/register/image",
                title: "Create a new look",
                subTitle:
                    "The alignment of the backdrop and the profile picture is a representation of how your profile would look like.",
            },
            {
                route: "/auth/register/confirm",
                title: "Create a new look",
                subTitle:
                    "Cross check to make sure all the details are how you’d want them to be. Use the progress bar in navigating back to previous steps to make any changes. Welcome to ScoutSity!",
            }, */
        ],
        countries: countries,
        countryCodes: countriesNoStates,
        affairs: affairs,
        allMessages: [
            {
                id: "1",
                img: "/message-1.png",
                handle: "Juliana James",
                name: "julicious_me",
                snippet: "Julia: Will you be able to come for the house",
                date: "Yesterday",
                type: "whisper",
                seen: false,
                content: [
                    {
                        date: "Feb 23",
                        data: [{
                            text: "If we agree to hold the dinner after elections we need to give at least one week because people who travelled need to come back first. That’s why I suggested before. You get?",
                            sent: true,
                            stamp: "13:23"
                        },
                            {
                                text: "I Understand what you mean. But we need time to get ready.",
                                sent: false,
                                stamp: "14:02"
                            },
                            {
                                text: "Tuh, I don’t know. This departmen dinner don turn wahala now. Don’ know if I can make it but we’ll see sha.",
                                sent: true,
                                stamp: "13:23"
                            },
                            {
                                text: "Okay. Once I confim the day I’ll let you know how far.",
                                sent: false,
                                stamp: "14:37"
                            }]
                    },
                    {
                        date: "Yesterday",
                        data: [
                            {
                                text: "So they say the dinner is next tomorrow.",
                                sent: false,
                                stamp: "09:44"
                            },
                            {
                                text: "WIll you be able to come for the it?",
                                sent: false,
                                stamp: "09:45"
                            }]
                    }
                ]
            },
            {
                id: "2",
                img: "/message-2.png",
                handle: "Paul Ajeyi",
                name: "paulo4real",
                snippet: "Paul: I tell you say na Jagaban go wi...",
                date: "Feb. 28",
                seen: false,
                type: "whisper",
                content: [
                    {
                        date: "Feb 23",
                        data: [{
                            text: "If we agree to hold the dinner after elections we need to give at least one week because people who travelled need to come back first. That’s why I suggested before. You get?",
                            sent: true,
                            stamp: "13:23"
                        },
                            {
                                text: "I Understand what you mean. But we need time to get ready.",
                                sent: false,
                                stamp: "14:02"
                            },
                            {
                                text: "Tuh, I don’t know. This departmen dinner don turn wahala now. Don’ know if I can make it but we’ll see sha.",
                                sent: true,
                                stamp: "13:23"
                            },
                            {
                                text: "Okay. Once I confim the day I’ll let you know how far.",
                                sent: false,
                                stamp: "14:37"
                            }]
                    },
                    {
                        date: "Yesterday",
                        data: [
                            {
                                text: "So they say the dinner is next tomorrow.",
                                sent: false,
                                stamp: "09:44"
                            },
                            {
                                text: "WIll you be able to come for the it?",
                                sent: false,
                                stamp: "09:45"
                            }]
                    }
                ]
            },
            {
                id: "3",
                img: "/message-3.png",
                handle: "Veronica Dotun",
                name: "veechic",
                snippet: "Veronica: Yeah, I also heard resumpt...",
                date: "Feb. 28",
                seen: false,
                type: "whisper",
                content: [
                    {
                        date: "Feb 23",
                        data: [{
                            text: "If we agree to hold the dinner after elections we need to give at least one week because people who travelled need to come back first. That’s why I suggested before. You get?",
                            sent: true,
                            stamp: "13:23"
                        },
                            {
                                text: "I Understand what you mean. But we need time to get ready.",
                                sent: false,
                                stamp: "14:02"
                            },
                            {
                                text: "Tuh, I don’t know. This departmen dinner don turn wahala now. Don’ know if I can make it but we’ll see sha.",
                                sent: true,
                                stamp: "13:23"
                            },
                            {
                                text: "Okay. Once I confim the day I’ll let you know how far.",
                                sent: false,
                                stamp: "14:37"
                            }]
                    },
                    {
                        date: "Yesterday",
                        data: [
                            {
                                text: "So they say the dinner is next tomorrow.",
                                sent: false,
                                stamp: "09:44"
                            },
                            {
                                text: "WIll you be able to come for the it?",
                                sent: false,
                                stamp: "09:45"
                            }]
                    }
                ]
            },
            {
                id: "4",
                img: "/message-4.png",
                handle: "Seyi Sabiyi",
                name: "seyisabiyi",
                snippet: "Omoh, I was at the polling unit w...",
                date: "Feb. 25",
                seen: true,
                type: "whisper",
                content: [
                    {
                        date: "Feb 23",
                        data: [{
                            text: "If we agree to hold the dinner after elections we need to give at least one week because people who travelled need to come back first. That’s why I suggested before. You get?",
                            sent: true,
                            stamp: "13:23"
                        },
                            {
                                text: "I Understand what you mean. But we need time to get ready.",
                                sent: false,
                                stamp: "14:02"
                            },
                            {
                                text: "Tuh, I don’t know. This departmen dinner don turn wahala now. Don’ know if I can make it but we’ll see sha.",
                                sent: true,
                                stamp: "13:23"
                            },
                            {
                                text: "Okay. Once I confim the day I’ll let you know how far.",
                                sent: false,
                                stamp: "14:37"
                            }]
                    },
                    {
                        date: "Yesterday",
                        data: [
                            {
                                text: "So they say the dinner is next tomorrow.",
                                sent: false,
                                stamp: "09:44"
                            },
                            {
                                text: "WIll you be able to come for the it?",
                                sent: false,
                                stamp: "09:45"
                            }]
                    }
                ]
            },
            {
                id: "5",
                img: "/message-5.png",
                handle: "Susanna Akambi",
                name: "sassysusy",
                snippet: "Yeah, I agree. Hope he wins the e...",
                date: "Feb. 25",
                seen: true,
                type: "whisper",
                content: [
                    {
                        date: "Feb 23",
                        data: [{
                            text: "If we agree to hold the dinner after elections we need to give at least one week because people who travelled need to come back first. That’s why I suggested before. You get?",
                            sent: true,
                            stamp: "13:23"
                        },
                            {
                                text: "I Understand what you mean. But we need time to get ready.",
                                sent: false,
                                stamp: "14:02"
                            },
                            {
                                text: "Tuh, I don’t know. This departmen dinner don turn wahala now. Don’ know if I can make it but we’ll see sha.",
                                sent: true,
                                stamp: "13:23"
                            },
                            {
                                text: "Okay. Once I confim the day I’ll let you know how far.",
                                sent: false,
                                stamp: "14:37"
                            }]
                    },
                    {
                        date: "Yesterday",
                        data: [
                            {
                                text: "So they say the dinner is next tomorrow.",
                                sent: false,
                                stamp: "09:44"
                            },
                            {
                                text: "WIll you be able to come for the it?",
                                sent: false,
                                stamp: "09:45"
                            }]
                    }
                ]
            }
        ],
        activeMessage: 'whisper'
    }),
    actions: {
        setMessages(type: string){

        }
        /*async callApi(payload) {
            await handler
                .handle(useSnFetch().users[`${payload?.route}`], {
                    data: payload.data,
                })
                .then((res) => {
                    this[`${payload?.state}`] = res;
                })
                .catch((e) => e);
        },*/
        /* async fetchCountries(){
            const { data} = await useFetch('/api/countries')
            console.log('data is', data)
        } */
    },
    getters: {
        eventsToday(state){
            return state.affairs.filter(event => {
                return event.date === "Dec 04, 2023"
            })
        },
        tourneys(state){
            return state.affairs.filter(event => {
                return event?.price
            })
        },
        messages(state){
            return state.allMessages.filter(message => {
                return message?.type === state.activeMessage
            })
        },
        eventsAnticipated(state){
            return state.affairs.filter(event => {
                return event.date !== "Dec 04, 2023" && !event.price
            })
        }
    },
    persist: {
        storage: persistedState.cookiesWithOptions({
            // sameSite: 'strict',
            maxAge: expiryTime,
            expires: expiryDate
        }),
    },
});
