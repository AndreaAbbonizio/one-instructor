import { reactive } from 'vue';

export const store = reactive({
    courses: [
        {
            image: '/images/dj-image.jpeg',
            title: 'How to be a DJ? Make Elctronic Music',
            type: 'Electronic',
            level: 'Advanced',
            lectures: '8 Lectures',
            duration: '6 hours',
            price: '$59',
        },

        {
            image: '/images/gaming-image.png',
            title: 'Nvidia and UE4 Technologies Pratice',
            type: 'Nvidia',
            level: 'Advanced',
            lectures: '8 Lectures',
            duration: '6 hours',
            price: '$89',
        },

        {
            image: '/images/fashion-image.jpeg',
            title: 'Fashion Photography from professional',
            type: 'Fashion',
            level: 'Advanced',
            lectures: '6 Lectures',
            duration: '6 hours',
            price: '$69',
        },

        {
            image: '/images/design-image.jpeg',
            title: 'Design Instruments for Communication',
            type: 'Communication',
            level: 'Intermediate',
            lectures: '6 Lectures',
            duration: '6 hours',
            price: '$29',
        },

        {
            image: '/images/art-image.jpg',
            title: 'Make your Concept Right and Beautiful',
            type: 'Art',
            level: 'Intermediate',
            lectures: '6 Lectures',
            duration: '6 hours',
            price: '$59',
        },

        {
            image: '/images/bike-image.jpeg',
            title: 'Road Bike Manual or How to Be a Champion',
            type: 'Bicycling',
            level: 'Begginer',
            lectures: '6 Lectures',
            duration: '6 hours',
            price: '$39',
        }


    ]
});